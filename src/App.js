import React from "react";
import "./App.css";
import {
  Radio,
  Table,
  Tag,
  Layout,
  Checkbox,
  Menu,
  Dropdown,
  Row,
  Col,
  Input,
  Icon,
  Tooltip,
  Button,
  Typography
} from "antd";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const { Header, Footer, Sider, Content } = Layout;

let segments = require("./segments.json");
console.log(segments);

const country = (
  <Menu>
    <Menu.Item key="1">Country 1</Menu.Item>
    <Menu.Item key="2">Country 2</Menu.Item>
    <Menu.Item key="3">Country 3</Menu.Item>
  </Menu>
);
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
const platforms = ["The Trade Desk", "Google", "Centro"];

class App extends React.Component {
  rowSelection = () => ({
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    }
  });

  state = {
    filteredInfo: null,
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
        width: 100,
        render: text => (
          <Tag>
            <Text strong>{text}</Text>
          </Tag>
        )
      },
      {
        title: "Segment",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Tooltip title={record.description}>
            <Text>{text}</Text>
          </Tooltip>
        )
      },
      {
        title: "Vertical",
        dataIndex: "vertical",
        key: "vertical",
        width: 200,
        filters: verticals,
        onFilter: (value, record) => record.vertical.indexOf(value) === 0,
        render: (text, record) => <Text strong>{text}</Text>
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
        width: 200,
        render: (tags, record) => (
          <>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </>
        )
      },
      {
        title: "Reach",
        dataIndex: "reach",
        key: "reach",
        width: 200,
        sorter: (a, b) => a.reach - b.reach
      },
      {
        title: "Platform",
        dataIndex: "platform_ids",
        key: "platform_ids",
        width: 300,
        render: (platform, record) => {
          return platform.google_id ? (
            <Tooltip title={platform.google_id}>
              <Tag color="green">Google</Tag>
            </Tooltip>
          ) : (
            undefined
          );
        }
      }
    ];

    return (
      <div className="App">
        <Layout>
          <Header>header</Header>
          <Layout>
            <Content>
              <Title level={2}>Factual Data Dictionary</Title>

              <Row>
                <Col span={4}>
                  <div style={{ marginTop: 16, marginBottom: 16 }}>
                    <Search
                      placeholder="Search via name, ID, etc"
                      onSearch={value => console.log(value)}
                      style={{ width: 400 }}
                    />
                  </div>
                </Col>
              </Row>

              <Table
                size="middle"
                bordered
                rowSelection={this.rowSelection()}
                columns={columns}
                dataSource={segments}
                pagination={{ position: "top" }}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
