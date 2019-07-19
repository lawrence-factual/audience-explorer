import pandas as pd
from datetime import date

COUNTRIES = ['Japan', 'Australia', 'Hong Kong', 'Singapore']
INPUT_PATH_1 = "Taxonomy for Hackathon.xlsx"
INPUT_PATH_2 = "taxonomy_structure.tsv"
OUTPUT_PATH = "../src/segments.json"
SKIPPED_TAGS = ['Behavioral']
FOCUS_REPLACEMENTS = {
    'Brand Shoppers': 'Chain',
    'Political': 'Political',
    'Demographic': 'Demographic',
    'Place Category Visitors': 'Place Category',
    'Behavioral': 'Behavioral',
    'Behavioral - Food and Beverage': 'Behavioral',
    'Behavioral - Seasonal': 'Behavioral',
    'Behavioral - Lifestyle and Lifestage': 'Behavioral',
    'Behavioral - Auto': 'Behavioral',
    'Behavioral - Travel and Transportation': 'Behavioral',
    'Behavioral - Retail': 'Behavioral',
}


def get_segment_taxonomy() -> pd.DataFrame:
    dfs = pd.read_excel(io=INPUT_PATH_1, sheet_name=['Google', 'Centro', 'TTD'])
    google_df = read_standard_taxonomy_reach_google(dfs['Google'])
    centro_df = read_standard_taxonomy_reach_centro(dfs['Centro'])
    ttd_df = read_standard_taxonomy_reach_ttd(dfs['TTD'])
    all_df = google_df.join([centro_df, ttd_df])
    all_df['platform_ids'] = all_df.apply(
        lambda row: {'google_id': row['google_id'], 'centro_id': row['centro_id'],
                     'ttd_id': row['ttd_id']}, axis=1)
    all_df = all_df.drop(columns=['google_id', 'centro_id', 'ttd_id'])

    focus_df = get_segment_focus()
    all_df = all_df.join(focus_df)
    return all_df


def read_standard_taxonomy_reach_google(raw_df: pd.DataFrame) -> pd.DataFrame:
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['Factual Segment ID']
    clean_df['google_id'] = raw_df['Google Segment ID']
    tags = raw_df['Segment Name'].str.split('>')
    tags = tags.apply(lambda vals: [val.strip().replace('&', 'and') for val in
                                    vals] if vals else None)
    tags = tags.apply(lambda vals: [val for val in vals if val not in SKIPPED_TAGS])
    clean_df['name'] = tags.apply(lambda vals: vals[-1])
    clean_df['country'] = tags.apply(
        lambda vals: vals[1] if vals[1] in COUNTRIES else 'US')
    clean_df['vertical'] = tags.apply(
        lambda vals: vals[2] if vals[1] in COUNTRIES else vals[1])
    clean_df['path'] = tags.apply(
        lambda vals: " > ".join(vals[2:]) if vals[1] in COUNTRIES else " > ".join(
            vals[1:]))
    clean_df['reach'] = raw_df['Reach (Jul 2019)'].apply(int)
    clean_df['description'] = raw_df['Description']
    clean_df['last_updated'] = date.today()
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def read_standard_taxonomy_reach_centro(raw_df: pd.DataFrame) -> pd.DataFrame:
    raw_df = raw_df.loc[raw_df['Targetable']]
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['Factual ID']
    clean_df['centro_id'] = raw_df['Factual ID']
    clean_df['parent'] = raw_df['Factual Parent ID']
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def read_standard_taxonomy_reach_ttd(raw_df: pd.DataFrame) -> pd.DataFrame:
    raw_df = raw_df.loc[raw_df['Buyable']]
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['ID']
    clean_df['ttd_id'] = raw_df['ID']
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def get_segment_focus() -> pd.DataFrame:
    focus_df = pd.read_csv(INPUT_PATH_2, sep='\t', usecols=['Targeting Code', 'Level3'])
    focus_df = focus_df.rename(
        columns={'Targeting Code': 'segment_id', 'Level3': 'focus'})
    focus_df = focus_df.loc[focus_df['focus'] != 'DEPRECATED']
    focus_df = focus_df.set_index('segment_id')
    focus_df['focus'] = focus_df['focus'].replace(FOCUS_REPLACEMENTS)
    return focus_df


if __name__ == '__main__':
    segments_df = get_segment_taxonomy()
    segments_df = segments_df.rename(columns={'focus': 'tags'})
    segments_df['tags'] = segments_df['tags'].apply(lambda x: [x])
    segments_df.reset_index().to_json(OUTPUT_PATH, orient='records')
