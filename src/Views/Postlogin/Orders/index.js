import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "Redux-Store/Orders/OrdersThunk";
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
} from "@cloudscape-design/components";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const { data = [] } = ordersData;
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const [activeButton, setActiveButton] = useState("All");
  const [filteringText, setFilteringText] = useState("");

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const filteredOrders = data.items
    ? data.items.filter((item) => {
        const matchesStatus =
          activeButton === "All" || item.status === activeButton;
        const matchesSearch = item.id
          .toLowerCase()
          .includes(filteringText.toLowerCase());
        return matchesStatus && matchesSearch;
      })
    : [];

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
  };

  const buttons = ["All", "Confirmed", "Open", "Completed"];

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
                114
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

        <SpaceBetween direction="vertical" size="s">
          <Box>
            <Grid
              gridDefinition={[
                { colspan: { default: 14, xxs: 4 } },
                { colspan: { default: 12, xxs: 8 } },
              ]}
            >
              <div style={{ display: "flex" }}>
                {buttons.map((button) => (
                  <button
                    key={button}
                    onClick={() => handleButtonClick(button)}
                    style={{
                      border:
                        activeButton === button ? "2px solid black" : "none",
                      color: activeButton === button ? "black" : "gray",
                      backgroundColor:
                        activeButton === button ? "white" : "transparent",
                      fontWeight: activeButton === button ? "bolder" : "normal",
                      padding: "4px 12px",
                      cursor: "pointer",
                      borderRadius: "32px",
                    }}
                  >
                    {button}
                  </button>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ width: "40%" }}>
                  <TextFilter
                    filteringPlaceholder="Search"
                    filteringText={filteringText}
                    onChange={handleSearchChange}
                  />
                </div>
                <Pagination
                  currentPageIndex={currentPage - 1}
                  pagesCount={totalPages}
                  openEnd
                  onChange={({ detail }) =>
                    handlePageChange(detail.currentPageIndex)
                  }
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
                    <Link to={`/app/order/orderdetail`}>#{item.id}</Link>
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
