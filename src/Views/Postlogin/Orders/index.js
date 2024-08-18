import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, fetchOrderStatus } from "Redux-Store/Orders/OrdersThunk";
import {
  Table,
  Pagination,
  TextFilter,
  ContentLayout,
  Container,
  ColumnLayout,
  BreadcrumbGroup,
  Header,
  Button,
  Box,
  SpaceBetween,
  Grid,
  Select,
} from "@cloudscape-design/components";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const orderStatus = useSelector((state) => state.orders.order_status);

  const { data = [] } = ordersData;
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const [activeButton, setActiveButton] = useState("All");
  const [filteringText, setFilteringText] = useState("");

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchOrderStatus());
  }, [dispatch]);

  const filteredOrders = data.items
    ? data.items.filter((item) => {
        const matchesStatus =
          activeButton === "All" ||
          (activeButton === "Confirmed" &&
            item.orderStatus === "order placed") ||
          item.orderStatus === activeButton;
        const matchesSearch = item.id
          .toLowerCase()
          .includes(filteringText.toLowerCase());
        return matchesStatus && matchesSearch;
      })
    : [];

  // const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  const handleSelectChange = ({ detail }) => {
    setActiveButton(detail.selectedOption.value);
    setSelectedItems([]);  // Reset selected items when changing filters
    setCurrentPage(1);
  };
  
  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
  };

  const selectOptions = [
    { label: "All", value: "All" }, //value is from the api
    { label: "Order Confirmed", value: "order placed" },
    { label: "Packed", value: "PLACED" },
    { label: "On the Way", value: "on the way" },
    { label: "Delivered", value: "delivered" },
  ];

  return (
    <ContentLayout
      headerVariant="high-contrast"
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/Dashboard" },
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
      <SpaceBetween direction="vertical" size="xl">
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
                {orderStatus?.data?.totalOrderCount || "N/A"}
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
                {orderStatus?.data?.completedOrderCount}
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
                {orderStatus?.data?.confirmedOrderCount}
              </span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12, fontWeight: "bold" }}>
                  Orders Cancelled
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
                {orderStatus?.data?.cancelledOrderCount}
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
                {orderStatus?.data?.refundedOrderCount}
              </span>
            </div>
          </ColumnLayout>
        </Container>

        <SpaceBetween direction="vertical" size="s">
          <Box>
          <Grid
  disableGutters
  gridDefinition={[
    { colspan: { default: 12, xxs: 6 } },
    { colspan: { default: 12, xxs: 6 } },
  ]}
>
  <div style={{ display: "flex", gap: "0.5rem" }}>
    <TextFilter
      filteringPlaceholder="Search"
      filteringText={filteringText}
      onChange={handleSearchChange}
    />
    <Select
      options={selectOptions}
      selectedOption={selectOptions.find(
        (option) => option.value === activeButton
      )}
      onChange={handleSelectChange}
      placeholder="Sort by Status"
    />
  </div>
  <div style={{ display: "flex", gap: "0.5rem", justifyContent:'flex-end' }}>
    {/* Conditionally render the Move to Packed button */}
    {activeButton === "order placed" && (
      <Button 
        disabled={selectedItems.length === 0}
        onClick={() => {/* Your logic to move to packed */}}
      >
        Move to Packed
      </Button>
    )}
    
    {/* Conditionally render the Assign Orders button */}
    {activeButton === "PLACED" && (
      <Button 
        disabled={selectedItems.length === 0}
        onClick={() => {/* Your logic to assign orders */}}
      >
        Assign Orders
      </Button>
    )}

    {/* Conditionally render the Move to Delivery button */}
    {activeButton === "on the way" && (
      <Button 
        disabled={selectedItems.length === 0}
        onClick={() => {/* Your logic to move to delivery */}}
      >
        Move to Delivered
      </Button>
    )}

    <Pagination
      currentPageIndex={currentPage - 1}
      onChange={({ detail }) =>
        handlePageChange(detail.currentPageIndex)
      }
      openEnd
      pagesCount={5}
    />
  </div>
</Grid>
          </Box>
          <Table
            renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
              `Displaying items ${
                firstIndex + 1
              } to ${lastIndex} of ${totalItemsCount}`
            }
            onSelectionChange={({ detail }) =>
              setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
              selectionGroupLabel: "Items selection",
              allItemsSelectionLabel: ({ selectedItems }) =>
                `${selectedItems.length} ${
                  selectedItems.length === 1 ? "item" : "items"
                } selected`,
              itemSelectionLabel: ({ selectedItems }, item) => item.name,
            }}
            items={currentOrders}
            columnDefinitions={[
              {
                id: "id",
                header: "Order ID",
                cell: (item) =>
                  item.id ? (
                    <Link to={`/app/order/orderdetail/${item.id}`}>
                      #{item.id}
                    </Link>
                  ) : (
                    "N/A"
                  ),
              },

              {
                id: "orderDate",
                header: "Order Date",
                cell: (item) => {
                  if (!item.orderDate) {
                    return "N/A";
                  }
                  const date = new Date(item.orderDate);
                  const options = {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  };
                  return date
                    .toLocaleDateString("en-GB", options)
                    .replace(/\//g, "-");
                },
              },
              {
                id: "customerName",
                header: "Customer Name",
                cell: (item) => {
                  if (
                    item.customerName &&
                    item.customerName &&
                    item.customerName
                  ) {
                    return item.customerName;
                  }
                  return "N/A";
                },
              },
              {
                id: "item",
                header: "Item",
                cell: (item) => {
                  if (item.items) {
                    const itemCount = item.items;
                    return itemCount === 1
                      ? `${itemCount} Item`
                      : `${itemCount} Items`;
                  }
                  return "N/A";
                },
              },
              {
                id: "paymentStatus",
                header: "Payment Status",
                cell: (item) => item.paymentStatus || "N/A",
              },
              {
                id: "orderStatus",
                header: "Order Status",
                cell: (item) => item.orderStatus || "N/A",
              },


              {
                id: "totalAmount",
                header: "Total Amount",
                cell: (item) =>
                  item.totalAmount ? `Rs. ${item.totalAmount}` : "N/A",
              },
              {
                id: "area",
                header: "Delivery Area",
                cell: (item) => item.area || "N/A",
              },
            ]}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="id"
            variant="borderless"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No Orders</b>
                </SpaceBetween>
              </Box>
            }
          />
        </SpaceBetween>
      </SpaceBetween>
    </ContentLayout>
  );
};

export default Orders;
