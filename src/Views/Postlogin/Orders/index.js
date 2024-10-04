import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  fetchOrderStatus,
  // updateOrderStatus,
  // assignDeliveryBoyAndMoveToOnTheWay,
} from "Redux-Store/Orders/OrdersThunk";
import {
  Table,
  Pagination,
  TextFilter,
  ContentLayout,
  Container,
  ColumnLayout,
  BreadcrumbGroup,
  Header,
  // Button,
  Box,
  SpaceBetween,
  Grid,
  Icon,
  Select,
} from "@cloudscape-design/components";
import { Link } from "react-router-dom";
// import Modal from "@cloudscape-design/components/modal";

const Orders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const orderStatus = useSelector((state) => state.orders.order_status);
  const data = ordersData?.data || {};
  const items = React.useMemo(() => data.items || [], [data.items]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState("delivered");
  const [filteringText, setFilteringText] = useState("");
  // const [selectedAssignee, setSelectedAssignee] = useState(null);
  // const [isAssignOrdersModalVisible, setIsAssignOrdersModalVisible] =
  //   useState(false);
  // const [isMoveToPackedModalVisible, setIsMoveToPackedModalVisible] =
  //   useState(false);
  // const [isMoveToDeliveredModalVisible, setIsMoveToDeliveredModalVisible] =
  //   useState(false);
  const [filteredOrders, setFilteredOrders] = useState([]);
  // const [isFormSubmittedWithoutSelection, setIsFormSubmittedWithoutSelection] =
  //   useState(false);
  const [selectedOption, setSelectedOption] = React.useState({
    label: "7 Days Old",
    value: "7",
  });

  useEffect(() => {
    dispatch(
      fetchOrders({
        search: filteringText,
        status: activeButton,
        date: activeButton === "delivered" ? selectedOption?.value : "",
      })
    );
  }, [dispatch, filteringText, activeButton, selectedOption]);

  useEffect(() => {
    dispatch(fetchOrderStatus());
  }, [dispatch]);

  useEffect(() => {
    const applyFilter = () => {
      let filtered = items;
      if (activeButton) {
        filtered = items.filter((order) => order.orderStatus === activeButton);
      }
      setFilteredOrders((prevFilteredOrders) => {
        if (JSON.stringify(prevFilteredOrders) !== JSON.stringify(filtered)) {
          return filtered;
        }
        return prevFilteredOrders;
      });
    };

    applyFilter();
  }, [activeButton, items]);

  const handlePageChange = async (pageIndex) => {
    setCurrentPage(pageIndex);
    await dispatch(
      fetchOrders({ search: filteringText, status: activeButton })
    );
  };

  const handleSelectChange = async ({ detail }) => {
    const newStatus = detail.selectedOption.value;
    setActiveButton(newStatus);
    setSelectedItems([]);
    setCurrentPage(1);
    await dispatch(
      fetchOrders({
        search: filteringText,
        status: newStatus,
        date: newStatus === "delivered" ? selectedOption?.value : "",
      })
    );
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
    setCurrentPage(1);
  };

  const selectOptions = [
    // { label: "Order Confirmed", value: "order placed" },
    // { label: "Packed", value: "packed" },
    // { label: "On The Way", value: "on the way" },
    { label: "Delivered", value: "delivered" },
  ];

  // const handleMoveToPackedClick = () => {
  //   setIsMoveToPackedModalVisible(true);
  // };

  // const handleMoveToPackedModalCancel = () => {
  //   setIsMoveToPackedModalVisible(false);
  // };

  // const handleMoveToPackedModalConfirm = async () => {
  //   try {
  //     if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
  //       throw new Error("No items selected or invalid selection.");
  //     }
  //     const orderIds = selectedItems.map((item) => item.id);
  //     const result = await dispatch(
  //       updateOrderStatus({ ids: orderIds, status: "Packed" })
  //     ).unwrap();
  //     if (result.message === "success") {
  //       console.log("Order status updated successfully:", result);
  //       await dispatch(fetchOrders());
  //     } else {
  //       throw new Error("Failed to update order status");
  //     }
  //     window.location.reload();
  //     setIsMoveToPackedModalVisible(false);
  //   } catch (error) {
  //     console.error("Error updating order status:", error);
  //   }
  // };

  // const handleAssignOrdersModalConfirm = async () => {
  //   try {
  //     if (!selectedAssignee) {
  //       setIsFormSubmittedWithoutSelection(true);
  //       return;
  //     }

  //     setIsFormSubmittedWithoutSelection(false);

  //     if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
  //       throw new Error("No items selected or invalid selection.");
  //     }

  //     const orderIds = selectedItems.map((item) => item.id);
  //     const assignee = selectedAssignee.value;

  //     if (!Array.isArray(orderIds) || orderIds.length === 0) {
  //       throw new Error("Invalid order IDs.");
  //     }

  //     const result = await dispatch(
  //       assignDeliveryBoyAndMoveToOnTheWay({
  //         orderIds,
  //         assignee,
  //         status: "On The Way",
  //       })
  //     ).unwrap();

  //     if (result.message === "success") {
  //       console.log("Orders assigned and status updated successfully:", result);
  //       await dispatch(fetchOrders());
  //     } else {
  //       throw new Error(
  //         "Failed to assign delivery boy and update order status"
  //       );
  //     }

  //     window.location.reload();
  //     setIsAssignOrdersModalVisible(false);
  //   } catch (error) {
  //     console.error(
  //       "Error assigning delivery boy and updating order status:",
  //       error
  //     );
  //   }
  // };

  // const handleSelectAssigneeChange = ({ detail }) => {
  //   setSelectedAssignee(detail.selectedOption);
  // };
  // const handleAssignOrdersModalCancel = () => {
  //   setIsAssignOrdersModalVisible(false);
  // };
  // const handleAssignOrdersClick = () => {
  //   setIsAssignOrdersModalVisible(true);
  // };

  // const randomNames = [
  //   { label: "sohail", value: "sohail" },
  //   { label: "Jane Smith", value: "jane_smith" },
  //   { label: "Alice Johnson", value: "alice_johnson" },
  // ];

  // const handleMoveToDeliveredClick = () => {
  //   setIsMoveToDeliveredModalVisible(true);
  // };

  // const handleMoveToDeliveredModalCancel = () => {
  //   setIsMoveToDeliveredModalVisible(false);
  // };

  // const handleMoveToDeliveredModalConfirm = async () => {
  //   try {
  //     if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
  //       throw new Error("No items selected or invalid selection.");
  //     }
  //     const orderIds = selectedItems.map((item) => item.id);
  //     const result = await dispatch(
  //       updateOrderStatus({ ids: orderIds, status: "Delivered" })
  //     ).unwrap();
  //     if (result.message === "success") {
  //       console.log("Order status updated to delivered successfully:", result);
  //       await dispatch(fetchOrders());
  //     } else {
  //       throw new Error("Failed to update order status");
  //     }
  //     window.location.reload();
  //     setIsMoveToDeliveredModalVisible(false);
  //   } catch (error) {
  //     console.error("Error updating order status:", error);
  //   }
  // };

  const getOrderStatusWithIcon = (orderStatus) => {
    switch (orderStatus.toLowerCase()) {
      // case "order placed":
      //   return (
      //     <>
      //       <Icon name="status-in-progress" variant="subtle" />
      //       <span
      //         style={{ marginLeft: "6px", color: "#5F6B7A", fontWeight: "400" }}
      //       >
      //         Order Confirmed
      //       </span>
      //     </>
      //   );
      // case "packed":
      //   return (
      //     <>
      //       <Icon name="status-info" variant="link" />
      //       <span
      //         style={{ marginLeft: "6px", color: "#0972D3", fontWeight: "400" }}
      //       >
      //         Packed
      //       </span>
      //     </>
      //   );
      // case "on the way":
      //   return (
      //     <>
      //       <Icon name="status-info" variant="link" />
      //       <span
      //         style={{ marginLeft: "6px", color: "#0972D3", fontWeight: "400" }}
      //       >
      //         On The Way
      //       </span>
      //     </>
      //   );
      case "delivered":
        return (
          <>
            <Icon name="status-positive" variant="success" />
            <span
              style={{ marginLeft: "6px", color: "#037F0C", fontWeight: "400" }}
            >
              Delivered
            </span>
          </>
        );
      default:
        return <span>{orderStatus}</span>;
    }
  };

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
      header={<Header variant="h1">Orders</Header>}
    >
      <SpaceBetween direction="vertical" size="xl">
        <Container className="top-container" style={{ marginBottom: "1rem" }}>
          <ColumnLayout columns={5} variant="default" minColumnWidth={150}>
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
              <div style={{ display: "flex", gap: "0.4rem" }}>
                <TextFilter
                  filteringPlaceholder="Search"
                  filteringText={filteringText}
                  onChange={handleSearchChange}
                />
                <Select
                  options={selectOptions}
                  selectedOption={
                    selectOptions.find(
                      (option) => option.value === activeButton
                    )
                      ? {
                          label:
                            // activeButton === "order placed"
                            //   ? "Sort By Status"
                            //   : activeButton === "packed"
                            //   ? "Sort By Pack"
                            //   : activeButton === "on the way"
                            //   ? "Sort By On The Way"
                               activeButton === "delivered"
                              ? "Sort By Delivered"
                              : "Sort By Status",
                          value: activeButton,
                        }
                      : null
                  }
                  onChange={handleSelectChange}
                />

                {activeButton === "delivered" && (
                  <Select
                    selectedOption={selectedOption}
                    onChange={({ detail }) =>
                      setSelectedOption(detail.selectedOption)
                    }
                    options={[
                      { label: "7 Days Old", value: "7" },
                      { label: "14 Days Old", value: "14" },
                      { label: "1 Month Old", value: "1m" },
                      { label: "2 Month Old", value: "2m" },
                      { label: "Old Orders", value: "older" },
                    ]}
                    placeholder="Completed Order"
                  />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* {activeButton === "order placed" && (
                  <Button
                    disabled={selectedItems.length === 0}
                    onClick={handleMoveToPackedClick}
                  >
                    Move to Packed
                  </Button>
                )}

                {/* Conditionally render the Assign Orders button */}
                {/* {activeButton === "packed" && (
                  <Button
                    disabled={selectedItems.length === 0}
                    onClick={handleAssignOrdersClick}
                  >
                    Assign Orders
                  </Button>
                )} */}

                {/* {activeButton === "on the way" && (
                  <Button
                    disabled={selectedItems.length === 0}
                    onClick={handleMoveToDeliveredClick}
                  >
                    Move to Delivered
                  </Button>
                )} */} 

                <Pagination
                  currentPageIndex={currentPage}
                  onChange={({ detail }) =>
                    handlePageChange(detail.currentPageIndex)
                  }
                  openEnd
                  pagesCount={5}
                />
              </div>
            </Grid>
          </Box>

          {/* <Modal
            onDismiss={handleMoveToPackedModalCancel}
            visible={isMoveToPackedModalVisible}
            footer={
              <Box float="right">
                <SpaceBetween direction="horizontal" size="xs">
                  <Button
                    variant="link"
                    onClick={handleMoveToPackedModalCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleMoveToPackedModalConfirm}
                  >
                    Confirm
                  </Button>
                </SpaceBetween>
              </Box>
            }
            header="Move to Packed Orders"
          >
            Are you sure you want to move the selected orders to the 'Packed
            Orders' stage?
          </Modal>

          {/* Assign Orders Modal */}
          {/* <Modal
            onDismiss={handleAssignOrdersModalCancel}
            visible={isAssignOrdersModalVisible}
            footer={
              <Box float="right">
                <SpaceBetween direction="horizontal" size="xs">
                  <Button
                    variant="link"
                    onClick={handleAssignOrdersModalCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleAssignOrdersModalConfirm}
                  >
                    Assign
                  </Button>
                </SpaceBetween>
              </Box>
            }
            header="Assign Orders"
          >
            <h3 style={{ marginBottom: "0.5em" }}>Select Assignee</h3>
            <Select
              options={randomNames}
              selectedOption={selectedAssignee}
              onChange={handleSelectAssigneeChange}
              placeholder="Select Assignee"
              invalid={isFormSubmittedWithoutSelection && !selectedAssignee}
            />
          </Modal>
          <Modal
            onDismiss={handleMoveToDeliveredModalCancel}
            visible={isMoveToDeliveredModalVisible}
            footer={
              <Box float="right">
                <SpaceBetween direction="horizontal" size="xs">
                  <Button
                    variant="link"
                    onClick={handleMoveToDeliveredModalCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleMoveToDeliveredModalConfirm}
                  >
                    Confirm
                  </Button>
                </SpaceBetween>
              </Box>
            }
            header="Move to Delivered"
          >
            Are you sure you want to move the selected orders to the Delivered
            Orders stage?
          </Modal>  */}

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
            items={filteredOrders}
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

                cell: (item) =>
                  getOrderStatusWithIcon(item.orderStatus) || "N/A",
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
              ...(activeButton === "on the way" || activeButton === "delivered"
                ? [
                    {
                      id: "assignee",
                      header: "Assignee",
                      cell: (item) => item.assignee || "N/A",
                    },
                  ]
                : []),
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
