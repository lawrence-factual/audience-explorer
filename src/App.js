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
        title: "Tags",
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
