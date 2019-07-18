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

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
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
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
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

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
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
        render: text => <Text code>{text}</Text>,
        ...this.getColumnSearchProps("segment_id")
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
        ),
        ...this.getColumnSearchProps("name")
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
        render: (text, record) => <Text strong>{text}</Text>
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

              {platform.centro && (
                <>
                  <Tag color="orange">
                    Centro: <Text copyable>{platform.centro}</Text>
                  </Tag>
                  <br />
                </>
              )}

              {platform.ttd && (
                <>
                  <Tag color="blue">
                    TTD: <Text copyable>{platform.ttd}</Text>
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
        <Layout>
          <Header>
            <Text strong style={{ color: "white" }}>
              Factual
            </Text>
          </Header>
          <Layout>
            <Content>
              <div id="title">
                <Title level={2}>Factual Data Dictionary</Title>
              </div>

              <Table
                size="large"
                //bordered
                //rowSelection={this.rowSelection()}
                scroll={{ y: 800 }}
                columns={columns}
                dataSource={segments}
                pagination={{ pageSize: 50, position: "top" }}
              />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
