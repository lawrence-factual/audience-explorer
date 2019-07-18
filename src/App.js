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

const tags = [
  { text: "Advertising and Marketing", value: "Advertising and Marketing" },
  { text: "Age", value: "Age" },
  { text: "Amusement and Theme Parks", value: "Amusement and Theme Parks" },
  { text: "Arts, Crafts and Fabric", value: "Arts, Crafts and Fabric" },
  { text: "Automotive", value: "Automotive" },
  { text: "Baby and Children's Goods", value: "Baby and Children's Goods" },
  { text: "Banks", value: "Banks" },
  {
    text: "Bars, Lounges and Alcohol Locations",
    value: "Bars, Lounges and Alcohol Locations"
  },
  { text: "Beauty and Personal Care", value: "Beauty and Personal Care" },
  { text: "Behavioral", value: "Behavioral" },
  { text: "Big Box Stores", value: "Big Box Stores" },
  { text: "Bookstores", value: "Bookstores" },
  { text: "Brokerage and Investment", value: "Brokerage and Investment" },
  { text: "Business and Finance", value: "Business and Finance" },
  {
    text: "Cafes, Coffee and Tea Houses",
    value: "Cafes, Coffee and Tea Houses"
  },
  { text: "Car Dealerships", value: "Car Dealerships" },
  {
    text: "Car Maintenance, Parts and Repair",
    value: "Car Maintenance, Parts and Repair"
  },
  { text: "Car and Truck Rentals", value: "Car and Truck Rentals" },
  { text: "Casual Restaurants", value: "Casual Restaurants" },
  {
    text: "Clothing, Shoes and Accessories",
    value: "Clothing, Shoes and Accessories"
  },
  { text: "Coffee and Tea", value: "Coffee and Tea" },
  { text: "Convenience Stores", value: "Convenience Stores" },
  { text: "Computers and Electronics", value: "Computers and Electronics" },
  { text: "Cuisine Type", value: "Cuisine Type" },
  { text: "Department Stores", value: "Department Stores" },
  {
    text: "Department Stores and Big Box Stores",
    value: "Department Stores and Big Box Stores"
  },
  {
    text: "Dollar Stores and Discount Stores",
    value: "Dollar Stores and Discount Stores"
  },
  { text: "Education", value: "Education" },
  {
    text: "Electronics, Devices and Cell Phones",
    value: "Electronics, Devices and Cell Phones"
  },
  { text: "Events and Event Planning", value: "Events and Event Planning" },
  {
    text: "Eyewear, Glasses and Sunglasses",
    value: "Eyewear, Glasses and Sunglasses"
  },
  { text: "Fashion", value: "Fashion" },
  { text: "Fast Casual Restaurants", value: "Fast Casual Restaurants" },
  {
    text: "Fast Food and QSR Diners (Quick Serve Restaurant Diner)",
    value: "Fast Food and QSR Diners (Quick Serve Restaurant Diner)"
  },
  { text: "Financial Services", value: "Financial Services" },
  { text: "Food and Dining", value: "Food and Dining" },
  { text: "Food and Beverage", value: "Food and Beverage" },
  { text: "Furniture and Home Decor", value: "Furniture and Home Decor" },
  { text: "Games and Gaming", value: "Games and Gaming" },
  { text: "Gas Stations", value: "Gas Stations" },
  { text: "Gender", value: "Gender" },
  { text: "Groceries", value: "Groceries" },
  {
    text: "Grocery Stores and Supermarkets",
    value: "Grocery Stores and Supermarkets"
  },
  { text: "Gyms and Fitness Centers", value: "Gyms and Fitness Centers" },
  { text: "Hair, Skin and Nails", value: "Hair, Skin and Nails" },
  { text: "Health and Fitness", value: "Health and Fitness" },
  { text: "Home Goods", value: "Home Goods" },
  { text: "Home Improvement", value: "Home Improvement" },
  { text: "Hotels and Motels", value: "Hotels and Motels" },
  { text: "Household Income (HHI)", value: "Household Income (HHI)" },
  { text: "Insurance", value: "Insurance" },
  { text: "Jewelry and Watches", value: "Jewelry and Watches" },
  { text: "Landmarks", value: "Landmarks" },
  { text: "Legal", value: "Legal" },
  { text: "Lifestyle and Lifestage", value: "Lifestyle and Lifestage" },
  { text: "Lodging", value: "Lodging" },
  { text: "Mattresses", value: "Mattresses" },
  { text: "Media and Entertainment", value: "Media and Entertainment" },
  {
    text: "Mobile Devices and Cell Phones",
    value: "Mobile Devices and Cell Phones"
  },
  { text: "Movers", value: "Movers" },
  { text: "Movie Theaters and Theatres", value: "Movie Theaters and Theatres" },
  { text: "Moving Services and Trucks", value: "Moving Services and Trucks" },
  { text: "Office Supplies", value: "Office Supplies" },
  { text: "Outdoor Recreation", value: "Outdoor Recreation" },
  { text: "Outdoors and Sporting Goods", value: "Outdoors and Sporting Goods" },
  { text: "Paint", value: "Paint" },
  { text: "Parental Status", value: "Parental Status" },
  { text: "Party Supplies", value: "Party Supplies" },
  { text: "Pet Food and Pet Care", value: "Pet Food and Pet Care" },
  { text: "Pharmacy (Drug Stores)", value: "Pharmacy (Drug Stores)" },
  {
    text: "Printing and Shipping (Couriers)",
    value: "Printing and Shipping (Couriers)"
  },
  {
    text: "Quick Serve, QSR and Fast Food",
    value: "Quick Serve, QSR and Fast Food"
  },
  { text: "Real Estate", value: "Real Estate" },
  { text: "Real Estate Agents", value: "Real Estate Agents" },
  { text: "Restaurants", value: "Restaurants" },
  { text: "Retail", value: "Retail" },
  { text: "Skin Care and Body Care", value: "Skin Care and Body Care" },
  {
    text: "Supermarkets and Grocery Stores (Groceries)",
    value: "Supermarkets and Grocery Stores (Groceries)"
  },
  { text: "Tax Preparation", value: "Tax Preparation" },
  { text: "Technology", value: "Technology" },
  { text: "Tourism", value: "Tourism" },
  { text: "Transportation", value: "Transportation" },
  { text: "Transportation Hubs", value: "Transportation Hubs" },
  { text: "Travel", value: "Travel" },
  { text: "US Congressional Districts", value: "US Congressional Districts" },
  { text: "Used Car Dealerships", value: "Used Car Dealerships" },
  { text: "Vitamins and Supplements", value: "Vitamins and Supplements" },
  { text: "Warehouse Club Stores", value: "Warehouse Club Stores" },
  {
    text: "Weight Loss and Weight Management",
    value: "Weight Loss and Weight Management"
  }
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
const platforms = [
  { text: "Centro", value: "centro" },
  { text: "Google", value: "google_id" },
  { text: "The Trade Desk", value: "ttd" }
];

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
        title: "ID",
        dataIndex: "segment_id",
        key: "segment_id",
        width: 80,
        sorter: (a, b) => a.segment_id.length - b.segment_id.length,
        defaultSortOrder: "ascend",
        render: text => <Text code>{text}</Text>
      },
      {
        title: "Segment",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <>
            <Text strong>{text}</Text>
            <br />
            <Text type="secondary">{record.description}</Text>
          </>
        )
      },
      {
        title: "Country",
        dataIndex: "country",
        key: "country",
        width: 100,
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
        width: 200,
        filters: verticals,
        onFilter: (value, record) => record.vertical.indexOf(value) === 0,
        render: (text, record) => <Text>{text}</Text>
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
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
        sorter: (a, b) => a.reach - b.reach,
        render: num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
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
                <Tooltip
                  title={
                    <>
                      <Text strong style={{ color: "white" }}>
                        ID:{" "}
                      </Text>
                      <Text copyable style={{ color: "white" }}>
                        {platform.google_id}
                      </Text>
                    </>
                  }
                >
                  <Tag color="green">Google</Tag>
                  <br />
                </Tooltip>
              )}

              {platform.centro && (
                <Tooltip
                  title={
                    <>
                      <Text strong style={{ color: "white" }}>
                        ID:{" "}
                      </Text>
                      <Text copyable style={{ color: "white" }}>
                        {platform.centro}
                      </Text>
                    </>
                  }
                >
                  <Tag color="orange">Centro</Tag>
                  <br />
                </Tooltip>
              )}

              {platform.ttd && (
                <Tooltip
                  title={
                    <>
                      <Text strong style={{ color: "white" }}>
                        ID:{" "}
                      </Text>
                      <Text copyable style={{ color: "white" }}>
                        {platform.ttd}
                      </Text>
                    </>
                  }
                >
                  <Tag color="blue">The Trade Desk</Tag>
                  <br />
                </Tooltip>
              )}
            </>
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
                  <Search
                    placeholder="Search via name, ID, etc"
                    style={{ width: 400 }}
                  />
                </Col>
              </Row>

              <Table
                size="middle"
                //bordered
                //rowSelection={this.rowSelection()}
                columns={columns}
                dataSource={segments}
                pagination={{ pageSize: 20, position: "both" }}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
