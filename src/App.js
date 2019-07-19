import React from "react";
import "./App.css";
import logo from "./logo.svg";
import {
  Table,
  Tag,
  Layout,
  Input,
  Icon,
  Button,
  Typography,
  Row,
  Col
} from "antd";

const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;

let segments = require("./segments.json");

const tags = [
  { text: "Chain", value: "Chain" },
  { text: "Political", value: "Political" },
  { text: "Demographic", value: "Demographic" },
  { text: "Place Category", value: "Place Category" },
  { text: "Behavioral", value: "Behavioral" },
];

const countries = [
  { text: "US", value: "US" },
  { text: "Australia", value: "Australia" },
  { text: "Hong Kong", value: "Hong Kong" },
  { text: "Japan", value: "Japan" },
  { text: "Singapore", value: "Singapore" }
];
const verticals = [
  { text: "Automotive", value: "Automotive" },
  { text: "Business & Finance", value: "Business & Finance" },
  { text: "Media & Entertainment", value: "Media & Entertainment" },
  { text: "Food & Dining", value: "Food & Dining" },
  { text: "Health & Fitness", value: "Health & Fitness" },
  { text: "Lifestyle & Lifestage", value: "Lifestyle & Lifestage" },
  { text: "Retail", value: "Retail" },
  { text: "Travel", value: "Travel" },
  { text: "Demographic", value: "Demographic" },
  { text: "Political", value: "Political" }
];

var parsedURL = new URL(window.location.href);
console.log(parsedURL);

function addSearchParam(params) {
  var url = new URL(window.location.href);
  var searchParams = new URLSearchParams(url.search);

  console.log(params[0] + ": " + params[1]);

  if (params[0] === "name") {
    if (searchParams.has("name")) {
      searchParams.delete("name");
      if (searchParams.get("name") != "") {
        searchParams.append(params[0], params[1]);
      }
    } else {
      searchParams.append(params[0], params[1]);
    }
  } else if (params[0] === "segment_id") {
    if (searchParams.has("segment_id")) {
      searchParams.delete("segment_id");
      if (searchParams.get("segment_id") != "") {
        searchParams.append(params[0], params[1]);
      }
    } else {
      searchParams.append(params[0], params[1]);
    }
  } else if (params[0] === "country") {
    if (searchParams.has("country")) {
      searchParams.delete("country");
      if (searchParams.get("country") != "") {
        searchParams.append(params[0], params[1]);
      }
    } else {
      searchParams.append(params[0], params[1]);
    }
  } else if (params[0] === "vertical") {
    if (searchParams.has("vertical")) {
      searchParams.delete("vertical");
      if (searchParams.get("vertical") != "") {
        searchParams.append(params[0], params[1]);
      }
    } else {
      searchParams.append(params[0], params[1]);
    }
  } else if (params[0] === "tags") {
    if (searchParams.has("tags")) {
      searchParams.delete("tags");
      if (searchParams.get("tags") != "") {
        searchParams.append(params[0], params[1]);
      }
    } else {
      searchParams.append(params[0], params[1]);
    }
  } else {
    searchParams.append(params[0], params[1]);
  }

  console.log(url);

  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${searchParams}`
  );
}

// APP STARTS HERE
class App extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };

  handleReset = (dataIndex, setSelectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: "", filteredInfo: {} });
    setSelectedKeys([]);
    window.history.pushState({}, "", window.location.origin);
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(dataIndex, selectedKeys, confirm)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(dataIndex, selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(dataIndex, setSelectedKeys, confirm)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
  });

  handleSearch = (dataIndex, selectedKeys, confirm) => {
    confirm();
    console.log(selectedKeys[0]);
    addSearchParam([dataIndex, selectedKeys[0]]);
    this.setState({ searchText: selectedKeys[0] });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    if (Object.keys(filters).length > 0) {
      for (var filter in filters) {
        console.log(filters);
        console.log(filter);
        addSearchParam([filter, filters[filter]]);
      }
    }
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  checkFilters = () => {
    //console.log("loaded");
    //this.handleChange();
    var url = new URL(window.location.href);
    var searchParams = new URLSearchParams(url.search);
    if (searchParams.has("name")) {
    }
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    var url = new URL(window.location.href);
    var searchParams = new URLSearchParams(url.search);

    const columns = [
      {
        title: "ID",
        dataIndex: "segment_id",
        key: "segment_id",
        width: 120,
        filteredValue: searchParams.get("segment_id")
          ? [searchParams.get("segment_id")]
          : undefined,
        sorter: (a, b) => a.segment_id.length - b.segment_id.length,
        defaultSortOrder: "ascend",
        render: text => <Text code>{text}</Text>,
        ...this.getColumnSearchProps("segment_id")
      },
      {
        title: "Segment",
        dataIndex: "name",
        key: "name",
        filteredValue: searchParams.get("name")
          ? [searchParams.get("name")]
          : undefined,
        render: (text, record) => (
          <>
            <Text strong>{text}</Text>
            <br />
            <Text>{record.description}</Text>
            <br />
            <Text type="secondary">{record.path}</Text>
          </>
        ),
        ...this.getColumnSearchProps("path")
      },
      {
        title: "Reach",
        dataIndex: "reach",
        key: "reach",
        width: 140,
        sorter: (a, b) => a.reach - b.reach,
        render: num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
        width: 120,
        filteredValue: searchParams.get("country")
          ? searchParams.get("country").split(",")
          : undefined,
        filters: countries,
        onFilter: (value, record) => record.country.indexOf(value) === 0,
        render: text => (
          <Tag>
            <Text strong>{text}</Text>
          </Tag>
        )
      },
      {
        title: "Vertical",
        dataIndex: "vertical",
        key: "vertical",
        filteredValue: searchParams.get("vertical")
          ? searchParams.get("vertical").split(",")
          : undefined,
        width: 200,
        filters: verticals,
        onFilter: (value, record) => record.vertical.indexOf(value) === 0,
        render: text => <Text strong>{text}</Text>
      },
      {
        title: "Design",
        dataIndex: "tags",
        key: "tags",
        filteredValue: searchParams.get("tags")
          ? searchParams.get("tags").split(",")
          : undefined,
        width: 200,
        filters: tags,
        onFilter: (value, record) => {
          var keep = false;
          record.tags.map(item => {
            if (item.indexOf(value) === 0) {
              keep = true;
            }
          });
          return keep;
        },

        render: (tags, record) => (
          <>
            {tags.map((tag, i) => (
              <Text key={i} type="secondary" style={{ wordWrap: "break-word" }}>
                {tag}
                <br />
              </Text>
            ))}
          </>
        )
      },
      {
        title: "Platform",
        dataIndex: "platform_ids",
        key: "platform_ids",
        width: 200,
        render: (platform, record) => {
          return (
            <>
              {platform.google_id && (
                <>
                  <Tag color="green">
                    Google: <Text copyable>{platform.google_id}</Text>
                  </Tag>
                  <br />
                </>
              )}

              {platform.centro_id && (
                <>
                  <Tag color="orange">
                    Centro: <Text copyable>{platform.centro_id}</Text>
                  </Tag>
                  <br />
                </>
              )}

              {platform.ttd_id && (
                <>
                  <Tag color="blue">
                    TTD: <Text copyable>{platform.ttd_id}</Text>
                  </Tag>
                  <br />
                </>
              )}
            </>
          );
        }
      }
    ];

    return (
      <div className="App">
        {this.checkFilters()}
        <Layout>
          <Header />
          <Layout>
            <Content>
              <Row>
                <a href="https://www.factual.com/">
                  <Col span={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                  </Col>
                </a>
                <Col span={12} style={{ paddingTop: 18 }}>
                  <Title level={2}>Audience Explorer</Title>
                  <Text>
                    Factual Audience lets you reach consumers based on their
                    real-world behavior using best-in-class location data - so
                    you reach the right consumers with the right message, every
                    time. <br />
                    Use this tool to discover Factual’s 1000+ Ready-to-Use
                    Audiences designed by our team of location experts -
                    available in your favorite DSP, DMP, or ad buying platform.
                  </Text>
                </Col>
                <Col span={4} />
                <Col span={4} style={{ textAlign: "center", paddingTop: 18 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.6)",
                      padding: 12,
                      borderRadius: 4
                    }}
                  >
                    <Text type="secondary">
                      Interested in exploring a segment or creating your own
                      custom segment?
                    </Text>
                    <br />
                    <br />
                    <a
                      href="https://www.factual.com/contactus/"
                      target="_blank"
                    >
                      <Button size="small">Contact Factual</Button>
                    </a>
                  </div>
                </Col>
              </Row>

              <Table
                size="large"
                //bordered
                //rowSelection={this.rowSelection()}
                scroll={{ y: 600 }}
                columns={columns}
                dataSource={segments}
                onChange={this.handleChange}
                pagination={{ pageSize: 99, position: "top" }}
              />
            </Content>
            <Footer>
              <Row>
                <Col span={12}>
                  <Text>
                    <a href="https://www.factual.com/privacy/">Privacy</a>
                  </Text>{" "}
                  |
                  <Text>
                    {" "}
                    <a href="https://www.factual.com/privacy/#section-9">
                      Opt Out
                    </a>
                  </Text>{" "}
                  |
                  <Text>
                    {" "}
                    <a href="https://www.factual.com/terms-of-service/">
                      Terms of Service
                    </a>
                  </Text>{" "}
                  |
                  <Text>
                    {" "}
                    <a href="https://www.factual.com/trademarks/">Trademarks</a>
                  </Text>{" "}
                  |
                  <Text>
                    {" "}
                    <a href="https://www.factual.com/cookie-declaration/">
                      EEA Cookie Policy
                    </a>
                  </Text>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                  <Text disabled>
                    1999 Ave of the Stars, Los Angeles, CA 90067
                  </Text>
                </Col>
              </Row>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
