import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "Redux-Store/Orders/OrdersThunk";
import status from "Redux-Store/Constants";
import { Loader } from "Utils/helperFunctions";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";
import GridTableWithPagination from "../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";

import {
  ColumnLayout,
  ContentLayout,
  Button,
  Box
} from '@cloudscape-design/components';


const columns = [
  {
    field: "order_id",
    headerName: "Order Id",
    width: 150,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "customer_name",
    headerName: "Customer Name",
    width: 150,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "product",
    headerName: "Product Name",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "product_code",
    headerName: "Product Code",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "product_type",
    headerName: "Product Type",
    width: 250,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "package_type",
    headerName: "Package Type",
    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "order_date",
    headerName: "Order Date",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "due_date",
    headerName: "Due Date",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "order_value",
    headerName: "Order Value",
    width: 240,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "status",
    headerName: "Order Status",
    width: 240,
    renderCell: (data) => {
      return data.value;
    },
  },
];
class Orders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordersData: [],
      paginationDetails: { pageSize: 10, page: 0 },
    };
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.ordersData.status !== this.props.ordersData.status &&
      this.props.ordersData.status === status.SUCCESS &&
      this.props.ordersData?.data
    ) {
      this.manipulationData(
        this.props.ordersData?.data.data.finish_products || []
      );
    }
  }

  manipulationData(data, searchData = "") {
    let { ordersData } = this.state;
    ordersData = [];
    if (data?.length) {
      let orders = JSON.parse(JSON.stringify(data));
      if (searchData) {
        orders = data.filter((tableData) => {
          if (
            tableData?.customer_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.status
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.product_type
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.product_code
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.product
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.package_type
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.order_value
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.order_id
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.order_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) 
              ||
            tableData?.due_date.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return true;
          } else {
            return null;
          }
        });
      }

      orders.forEach((orders) => {
        ordersData.push({
          ...orders,
          statusClass: orders?.status?.toLowerCase()?.replace(" ", "_"),
        });
      });
    }
    this.setState({ ordersData, searchData });
  }

  render() {
    const {
      ordersData,
      paginationDetails: { page, pageSize },
      searchData,
    } = this.state;
    const startDataNo = page * pageSize + 1;
    const endDataNo = page * pageSize + pageSize;
    return (
               <ContentLayout
      
      headerVariant="high-contrast"
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "#components" },
            { text: "Orders", href: "#" },
           
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      header={<Header variant="h1" actions={
        <SpaceBetween direction="horizontal" size="xs">
        <Button>Export</Button>
        <Button iconName="calendar">Today</Button>
        <Button
          iconName="add-plus"
          variant="primary"
        >
          Create Order
        </Button>
        </SpaceBetween>

      }>Orders</Header>}
    >
    <Container className="top-container" style={{ marginBottom: '1rem' }}>
          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12, fontWeight: 'bold'}}>Total Orders</p></Box>
              <span style={{ fontSize: 34, fontWeight: '900', lineHeight: 1.3, color:'#1D4ED8' }}>55</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12, fontWeight: 'bold'}}>Orders Completed</p></Box>
            <span style={{ fontSize: 34, fontWeight: '900', lineHeight: 1.3, color:'#1D4ED8' }}>423</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12, fontWeight: 'bold'}}>Orders Confirmed</p></Box>
            <span style={{ fontSize: 34, fontWeight: '900', lineHeight: 1.3, color:'#1D4ED8' }}>123</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12, fontWeight: 'bold'}}>Order Cancelled</p></Box>
            <span style={{ fontSize: 34, fontWeight: '900', lineHeight: 1.3, color:'#1D4ED8' }}>128</span>
            </div>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12, fontWeight: 'bold'}}>Orders Refunded</p></Box>
              <span style={{ fontSize: 34, fontWeight: '900', lineHeight: 1.3, color:'#1D4ED8' }}>4</span>
              </div>
          </ColumnLayout>
        </Container>
   
        <Box className="qutations-container">
          <TablesHeaderFilters
            details={{
              filterLabel: "",
              btnLabel: "",
              dataLength: ordersData.length,
              searchData,
              isOnlySearchVisible: true,
          
            }}
            handleSearch={(searchData) => {
              this.manipulationData(
                this.props.ordersData?.data?.data?.finish_products || [],
                searchData
              );
            }}
          />

          {this.props.ordersData.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: ordersData,
                columns,
                checkboxSelection: false,
              }}
              handlePageChange={(paginationDetails) => {
                this.setState({ paginationDetails });
              }}
            />
          )}
        </Box>
        </ContentLayout>
    );
  }
}

function mapStateToProps(state) {
  const { ordersData } = state.orders;
  return { ordersData };
}

const mapDispatchToProps = { fetchOrders };

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
