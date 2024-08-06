import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "Redux-Store/Orders/OrdersThunk";
import status from "Redux-Store/Constants";
import { Loader } from "Utils/helperFunctions";
import { Link } from "react-router-dom";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Container from "@cloudscape-design/components/container";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import { ColumnLayout, ContentLayout } from "@cloudscape-design/components";

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
    renderCell: (data) => data.value,
  },
  {
    field: "product_code",
    headerName: "Product Code",
    width: 180,
    renderCell: (data) => data.value,
  },
  {
    field: "product_type",
    headerName: "Product Type",
    width: 250,
    renderCell: (data) => data.value,
  },
  {
    field: "package_type",
    headerName: "Package Type",
    width: 130,
    renderCell: (data) => data.value,
  },
  {
    field: "order_date",
    headerName: "Order Date",
    width: 180,
    renderCell: (data) => data.value,
  },
  {
    field: "due_date",
    headerName: "Due Date",
    width: 180,
    renderCell: (data) => data.value,
  },
  {
    field: "order_value",
    headerName: "Order Value",
    width: 240,
    renderCell: (data) => data.value,
  },
  {
    field: "status",
    headerName: "Order Status",
    width: 240,
    renderCell: (data) => data.value,
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const [paginationDetails, setPaginationDetails] = useState({
    pageSize: 10,
    page: 0,
  });
  const [searchData, setSearchData] = useState("");
  const [filteredOrdersData, setFilteredOrdersData] = useState([]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const manipulateData = useCallback((data, searchData = "") => {
    let orders = JSON.parse(JSON.stringify(data));
    if (searchData) {
      orders = data.filter((tableData) => {
        const lowerSearchData = searchData.toLowerCase();
        return (
          tableData?.customer_name?.toLowerCase().includes(lowerSearchData) ||
          tableData?.status?.toLowerCase().includes(lowerSearchData) ||
          tableData?.product_type?.toLowerCase().includes(lowerSearchData) ||
          tableData?.product_code?.toLowerCase().includes(lowerSearchData) ||
          tableData?.product?.toLowerCase().includes(lowerSearchData) ||
          tableData?.package_type?.toLowerCase().includes(lowerSearchData) ||
          tableData?.order_value?.toLowerCase().includes(lowerSearchData) ||
          tableData?.order_id?.toLowerCase().includes(lowerSearchData) ||
          tableData?.order_date?.toLowerCase().includes(lowerSearchData) ||
          tableData?.due_date?.toLowerCase().includes(lowerSearchData)
        );
      });
    }
    setFilteredOrdersData(
      orders.map((order) => ({
        ...order,
        statusClass: order?.status?.toLowerCase()?.replace(" ", "_"),
      }))
    );
  }, []);

  useEffect(() => {
    if (ordersData.status === status.SUCCESS && ordersData?.data) {
      manipulateData(ordersData?.data.data.finish_products || [], searchData);
    }
  }, [ordersData, searchData, manipulateData]);

  const handleSearchChange = (e) => {
    const searchText = e.detail.filteringText;
    setSearchData(searchText);
    manipulateData(ordersData?.data?.data?.finish_products || [], searchText);
  };

  const {
    page,
    pageSize,
  } = paginationDetails;
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
      header={
        <Header
          variant="h1"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button>Export</Button>
              <Button iconName="calendar">Today</Button>
            </SpaceBetween>
          }
        >
          Orders
        </Header>
      }
    >
      <Container className="top-container" style={{ marginBottom: "1rem" }}>
        <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
          <div>
            <Box variant="awsui-key-label">
              <p style={{ fontSize: 12, fontWeight: "bold" }}>Total Orders</p>
            </Box>
            <span
              style={{
                fontSize: 34,
                fontWeight: "900",
                lineHeight: 1.3,
                color: "#1D4ED8",
              }}
            >
              55
            </span>
          </div>
          <div>
            <Box variant="awsui-key-label">
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                Orders Completed
              </p>
            </Box>
            <span
              style={{
                fontSize: 34,
                fontWeight: "900",
                lineHeight: 1.3,
                color: "#1D4ED8",
              }}
            >
              423
            </span>
          </div>
          <div>
            <Box variant="awsui-key-label">
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                Orders Confirmed
              </p>
            </Box>
            <span
              style={{
                fontSize: 34,
                fontWeight: "900",
                lineHeight: 1.3,
                color: "#1D4ED8",
              }}
            >
              123
            </span>
          </div>
          <div>
            <Box variant="awsui-key-label">
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                Order Cancelled
              </p>
            </Box>
            <span
              style={{
                fontSize: 34,
                fontWeight: "900",
                lineHeight: 1.3,
                color: "#1D4ED8",
              }}
            >
              128
            </span>
          </div>
          <div>
            <Box variant="awsui-key-label">
              <p style={{ fontSize: 12, fontWeight: "bold" }}>
                Orders Refunded
              </p>
            </Box>
            <span
              style={{
                fontSize: 34,
                fontWeight: "900",
                lineHeight: 1.3,
                color: "#1D4ED8",
              }}
            >
              4
            </span>
          </div>
        </ColumnLayout>
      </Container>

      <Box className="qutations-container">
        <TextFilter
          filteringPlaceholder="Search Orders"
          onChange={handleSearchChange}
        />

        <Pagination
          currentPageIndex={page + 1}
          pagesCount={Math.ceil(filteredOrdersData.length / pageSize)}
          onChange={({ detail }) => {
            setPaginationDetails((prevDetails) => ({
              ...prevDetails,
              page: detail.currentPageIndex - 1,
            }));
          }}
        />

        {ordersData.status === status.IN_PROGRESS ? (
          Loader.commonLoader()
        ) : (
          <Table
            columnDefinitions={columns.map((col) => ({
              id: col.field,
              header: col.headerName,
              cell: (e) => col.renderCell({ value: e[col.field] }),
              width: col.width,
            }))}
            items={filteredOrdersData.slice(startDataNo - 1, endDataNo)}
            resizableColumns
            variant="borderless"
          />
        )}
      </Box>
    </ContentLayout>
  );
};

export default Orders;
