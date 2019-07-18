import pandas as pd
from datetime import date

COUNTRIES = ['Japan', 'Australia', 'Hong Kong', 'Singapore']
INPUT_PATH_1 = "Taxonomy for Hackathon.xlsx"
INPUT_PATH_2 = "taxonomy_structure.tsv"
OUTPUT_PATH = "../src/segments.json"


def get_segment_tags() -> pd.DataFrame:
    raw_df = pd.read_csv(INPUT_PATH_2, sep='\t')
    clean_df = raw_df[['Targeting Code', 'Level3']]
    clean_df = clean_df.rename(
        columns={'Targeting Code': 'segment_id', 'Level3': 'tag'})
    col_map = {
        'Brand Shoppers': 'Chain',
        'Place Category Visitors': 'Category',
        'Behavioral - Food and Beverage': 'Behavioral',
        'Behavioral - Lifestyle and Lifestage': 'Behavioral',
        'Behavioral - Seasonal': 'Behavioral',
        'Behavioral - Travel and Transportation': 'Behavioral',
        'Behavioral - Auto': 'Behavioral',
        'Behavioral - Retail': 'Behavioral',
    }
    clean_df['tag'] = clean_df['tag'].replace(col_map)
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def get_segment_taxonomy() -> pd.DataFrame:
    dfs = pd.read_excel(io=INPUT_PATH_1, sheet_name=['Google', 'Centro', 'TTD'])
    google_df = read_standard_taxonomy_reach_google(dfs['Google'])
    centro_df = read_standard_taxonomy_reach_centro(dfs['Centro'])
    ttd_df = read_standard_taxonomy_reach_ttd(dfs['TTD'])
    all_df = google_df.join(centro_df, how='outer')
    all_df = all_df.join(ttd_df, how='outer')
    all_platform_ids = pd.Series(name='platform_ids')
    for segment_id, row in all_df.iterrows():
        platform_ids = {}
        platform_ids.update(row['platform_id_google'])
        platform_ids.update(row['platform_id_centro'])
        platform_ids.update(row['platform_id_ttd'])
        all_platform_ids[segment_id] = platform_ids
    all_df['platform_ids'] = all_platform_ids
    all_df = all_df.drop(
        columns=['platform_id_google', 'platform_id_centro', 'platform_id_ttd'])
    mask = all_df['vertical'] == 'Political'
    all_df.loc[mask, 'region'] = all_df.loc[mask, 'tags'].apply(lambda x: x[1])
    all_df.loc[mask, 'tags'] = all_df.loc[mask, 'tags'].apply(lambda x: [x[0]])
    all_df.loc[mask, 'tags'] = all_df.loc[mask]
    return all_df


def read_standard_taxonomy_reach_google(raw_df: pd.DataFrame) -> pd.DataFrame:
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['Factual Segment ID']
    clean_df['platform_id_google'] = raw_df['Google Segment ID'].apply(
        lambda x: {'google_id': str(x)})
    clean_df['name'] = raw_df['Segment Name'].apply(extract_name)
    clean_df['country'] = raw_df['Segment Name'].apply(extract_country)
    clean_df['vertical'] = raw_df['Segment Name'].apply(extract_vertical)
    clean_df['description'] = raw_df.apply(extract_description, axis=1)
    clean_df['reach'] = raw_df['Reach (Jul 2019)']
    clean_df['last_updated'] = date.today()
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def extract_description(row: pd.Series) -> str:
    description = row['Description'] + '\n' + extract_tags(row['Segment Name'])
    return description


def read_standard_taxonomy_reach_centro(raw_df: pd.DataFrame) -> pd.DataFrame:
    raw_df = raw_df.loc[raw_df['Targetable']]
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['Factual ID']
    clean_df['platform_id_centro'] = raw_df['Factual ID'].apply(
        lambda x: {'centro': str(x)})
    clean_df['parent'] = raw_df['Factual Parent ID']
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def read_standard_taxonomy_reach_ttd(raw_df: pd.DataFrame) -> pd.DataFrame:
    raw_df = raw_df.loc[raw_df['Buyable']]
    clean_df = pd.DataFrame()
    clean_df['segment_id'] = raw_df['ID']
    clean_df['platform_id_ttd'] = raw_df['ID'].apply(lambda x: {'ttd': str(x)})
    clean_df = clean_df.set_index('segment_id')
    return clean_df


def extract_name(path: str) -> str:
    name = path.split('>')[-1].strip()
    return name


def extract_vertical(path: str) -> str:
    tag = path.split('>')[1].strip()
    if tag in COUNTRIES:
        vertical = path.split('>')[2].strip()
    else:
        vertical = tag
    return vertical


def extract_country(path: str) -> str:
    tag = path.split('>')[1].strip()
    if tag in COUNTRIES:
        country = tag
    else:
        country = 'US'
    return country


def extract_tags(path: str) -> str:
    if extract_country(path) == 'US':
        tags = path.split('>')[2:-1]
    else:
        tags = path.split('>')[3:-1]
    tags = [tag.strip().replace('&', 'and') for tag in tags]
    clean_tags = " > ".join(tags)
    return clean_tags


if __name__ == '__main__':
    taxonomy_df = get_segment_taxonomy()
    tags_df = get_segment_tags()
    segments_df = taxonomy_df.join(tags_df)
    segments_df.reset_index().to_json(OUTPUT_PATH, orient='records')
