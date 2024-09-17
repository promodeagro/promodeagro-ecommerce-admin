import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ordersDetails,
  fetchOrders,
  updateSingleOrderStatus,
  assignDeliveryBoyAndMoveToOnTheWayforsingleorder,
} from "Redux-Store/Orders/OrdersThunk";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import {
  Container,
  Icon,
  Box,
  Grid,
  ColumnLayout,
  Table,
  Select,
} from "@cloudscape-design/components";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Button from "@cloudscape-design/components/button";
import Modal from "@cloudscape-design/components/modal";
import { useLocation } from "react-router-dom";
import Flashbar from "@cloudscape-design/components/flashbar";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allOrders = useSelector(
    (state) => state.orders.ordersData.data?.items || []
  );
  const orderDetail = useSelector(
    (state) => state.orders.order_details.data || {}
  );
  const [isMoveToPackedModalVisible, setIsMoveToPackedModalVisible] =
    useState(false);
  const [isDeliveredModalVisible, setIsDeliveredModalVisible] = useState(false);
  const [isAssignModalVisible, setIsAssignModalVisible] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState("");
  const [flashMessages, setFlashMessages] = useState([]);
  const [isFormSubmittedWithoutSelection, setIsFormSubmittedWithoutSelection] =
    useState(false);

    useEffect(() => {
      if (id) {
        dispatch(ordersDetails(id));
      }
    }, [id, dispatch]);
    
  const events = [
    { step: "Step 1", title: "Order Confirmed", status: "Order Confirmed" },
    { step: "Step 2", title: "Packed", status: "packed" },
    { step: "Step 3", title: "On the Way", status: "on the way" },
    { step: "Step 4", title: "Delivered", status: "delivered" },
  ];

  const getCurrentStep = (status) => {
    return events.findIndex((event) => event.status === status);
  };

  const currentStepIndex = getCurrentStep(orderDetail?.status);

  const timelineContainerStyle = {
    position: "relative",
    margin: "0",
  };

  const timelineItemStyle = (index, isLast) => ({
    position: "relative",
    paddingLeft: "30px",
    marginBottom: isLast ? "0" : "15px",
    color: index <= currentStepIndex ? "#0073bb" : "#A9A9A9",
  });

  const timelineItemBeforeStyle = (index) => ({
    content: '""',
    position: "absolute",
    left: "-1px",
    top: "0",
    width: "16px",
    height: "16px",
    backgroundColor: index <= currentStepIndex ? "#0073bb" : "#A9A9A9",
    borderRadius: "50%",
    border: `2px solid ${index <= currentStepIndex ? "#0073bb" : "#A9A9A9"}`,
  });

  const timelineConnectorStyle = (index) => ({
    position: "absolute",
    left: "6px",
    width: "1px",
    backgroundColor: index < currentStepIndex ? "#0073bb" : "#A9A9A9",
    zIndex: 0,
  });

  const timelineStepStyle = {
    fontSize: "12px",
  };

  const timelineTitleStyle = {
    fontSize: "14px",
    margin: "0",
  };

  const columnDefinitions = [
    { header: "Item Code", cell: (item) => item.productId },
    { header: "Item", cell: (item) => item.productName },
    { header: "Quantity", cell: (item) => item.quantity },
    { header: "Product Category", cell: (item) => item.category },
    {
      header: "Unit per cost",
      cell: (item) =>
        `₹${(item.price / item.quantityUnits).toFixed(2)}/ ${item.units}`,
    },
    { header: "Total Cost", cell: (item) => `₹${item.total}` },
  ];

  const items = orderDetail?.items || [];
  const [orderIds, setOrderIds] = useState([]);
  const [currentOrderId, setCurrentOrderId] = useState(id);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    if (allOrders.length > 0) {
      const ids = allOrders.map((order) => order.id);
      setOrderIds(ids);
    }
  }, [allOrders, location.pathname]);

  const displayFlashMessage = (type, header, content, id) => {
    const message = {
      type,
      header,
      content,
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () =>
        setFlashMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== id)
        ),
      id,
    };
    setFlashMessages([message]);
    setTimeout(() => {
      setFlashMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );
    }, 3000);
  };

  const goToNextOrder = () => {
    const currentIndex = orderIds.indexOf(currentOrderId);
    if (currentIndex < orderIds.length - 1) {
      const nextId = orderIds[currentIndex + 1];
      setCurrentOrderId(nextId);

      navigate(`/app/order/orderdetail/${nextId}`);
    }
  };

  const goToPreviousOrder = () => {
    const currentIndex = orderIds.indexOf(currentOrderId); // use currentOrderId instead of setCurrentOrderId
    if (currentIndex > 0) {
      const prevId = orderIds[currentIndex - 1];
      setCurrentOrderId(prevId);
      navigate(`/app/order/orderdetail/${prevId}`);
    }
  };

  const handleItemClick = (event) => {
    if (event.detail.id === "refund") {
      navigate("/app/order/orderdetail/refund");
    } else if (event.detail.id === "invoice") {
      navigate(`/app/order/invoice/${id}`); // Navigate to the invoice page with the Order ID
    }
  };

  const isAtFirstProduct = orderIds.indexOf(currentOrderId) === 0;
  const isAtLastProduct =
    orderIds.indexOf(currentOrderId) === orderIds.length - 1;

  const handleMoveToPackedModalConfirm = async () => {
    try {
      if (!currentOrderId) {
        throw new Error("No order ID available.");
      }
      const result = await dispatch(
        updateSingleOrderStatus({ ids: [currentOrderId], status: "packed" })
      ).unwrap();
      if (result.message === "success") {
        console.log("Order status updated successfully:", result);
        displayFlashMessage(
          "success",
          "Order Status Updated",
          "Your order has been successfully moved to the Packed Stage.",
          "packed_message"
        );
        await dispatch(fetchOrders());
      } else {
        throw new Error("Failed to update order status");
      }
      setIsMoveToPackedModalVisible(false);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleDeliveredModalConfirm = async () => {
    try {
      if (!currentOrderId) {
        throw new Error("No order ID available.");
      }
      const result = await dispatch(
        updateSingleOrderStatus({ ids: [currentOrderId], status: "delivered" })
      ).unwrap();
      if (result.message === "success") {
        console.log("Order status updated successfully:", result);
        displayFlashMessage(
          "success",
          "Order Status Updated",
          "Your order has been Delivered to the Customer.",
          "delivered_message"
        );
        await dispatch(fetchOrders());
        setSelectedAssignee(""); // Reset the selected assignee
      } else {
        throw new Error("Failed to update order status");
      }
      setIsDeliveredModalVisible(false);
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const handleAssignModalConfirm = async () => {
    try {
      if (!selectedAssignee) {
        setIsFormSubmittedWithoutSelection(true);
        return;
      }
      setIsFormSubmittedWithoutSelection(false);
      if (!currentOrderId || !selectedAssignee) {
        throw new Error("No order ID or assignee available.");
      }
      console.log("Assigning delivery boy to order ID:", currentOrderId);
      console.log("Selected assignee:", selectedAssignee);
      const payload = {
        ids: [currentOrderId],
        assignee: selectedAssignee,
        status: "on the way",
      };
      console.log("Payload:", payload);
      const result = await dispatch(
        assignDeliveryBoyAndMoveToOnTheWayforsingleorder(payload)
      ).unwrap();
      if (result.message === "success") {
        console.log("Order assigned and status updated successfully:", result);
        displayFlashMessage(
          "success",
          "Order Status Updated",
          `Order Assigned to ${selectedAssignee} for Delivery.`,
          "ontheway_message"
        );
        await dispatch(fetchOrders());
      } else {
        throw new Error(
          "Failed to assign delivery boy and update order status"
        );
      }
      setIsAssignModalVisible(false);
    } catch (error) {
      console.error(
        "Error assigning delivery boy and updating order status:",
        error
      );
    }
  };

  const randomNames = [
    { label: "sohail", value: "sohail" },
    { label: "Jane Smith", value: "jane_smith" },
    { label: "Alice Johnson", value: "alice_johnson" },
  ];

  return (
    <div>
      <SpaceBetween size="m">
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Order", href: "/app/orders" },
            { text: "Order Detail", href: "#" },
          ]}
          ariaLabel="Breadcrumbs"
        />
        <Flashbar items={flashMessages} />
        <Header
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              {orderDetail?.status === "Order Confirmed" && (
                <Button
                  onClick={() => setIsMoveToPackedModalVisible(true)}
                  iconName="angle-right-double"
                  iconAlign="right"
                >
                  Move to Packed
                </Button>
              )}
              {orderDetail?.status === "packed" && (
                <Button
                  onClick={() => setIsAssignModalVisible(true)}
                  iconName="add-plus"
                  iconAlign="left"
                >
                  Assign Order
                </Button>
              )}
              {orderDetail?.status === "on the way" && (
                <Button
                  onClick={() => setIsDeliveredModalVisible(true)}
                  iconName="angle-right-double"
                  iconAlign="right"
                >
                  Mark as Delivered
                </Button>
              )}
              <Modal
                onDismiss={() => setIsMoveToPackedModalVisible(false)}
                visible={isMoveToPackedModalVisible}
                footer={
                  <Box float="right">
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button
                        variant="link"
                        onClick={() => setIsMoveToPackedModalVisible(false)}
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
                header="Move to Packed Stage"
              >
                Are you sure you want to move this order to the 'Packed Orders'
                stage?
              </Modal>
              <Modal
                onDismiss={() => setIsDeliveredModalVisible(false)}
                visible={isDeliveredModalVisible}
                footer={
                  <Box float="right">
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button
                        variant="link"
                        onClick={() => setIsDeliveredModalVisible(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleDeliveredModalConfirm}
                      >
                        Confirm
                      </Button>
                    </SpaceBetween>
                  </Box>
                }
                header="Mark as Delivered"
              >
                Are you sure you want to mark this order as 'Delivered'?
              </Modal>
              <Modal
                onDismiss={() => setIsAssignModalVisible(false)}
                visible={isAssignModalVisible}
                footer={
                  <Box float="right">
                    <SpaceBetween direction="horizontal" size="xs">
                      <Button
                        variant="link"
                        onClick={() => setIsAssignModalVisible(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={handleAssignModalConfirm}
                      >
                        Assign
                      </Button>
                    </SpaceBetween>
                  </Box>
                }
                header="Assign Order"
              >
                <h3 style={{ marginBottom: "0.5em" }}>Select Assignee</h3>
                <Select
                  options={randomNames}
                  selectedOption={randomNames.find(
                    (name) => name.value === selectedAssignee
                  )}
                  onChange={({ detail }) =>
                    setSelectedAssignee(detail.selectedOption.value)
                  }
                  placeholder="Select Assignee"
                  invalid={isFormSubmittedWithoutSelection && !selectedAssignee}
                />
              </Modal>
              <ButtonDropdown
                items={[
                  { text: "Cancel Order", id: "cancel", href: "/cancel-order" },
                  { text: "Refund Order", id: "refund" },
                  {
                    text: "View Invoice",
                    id: "invoice",
                    href: `/app/order/orderdetail/invoice/${id}`,
                  },
                ]}
                onItemClick={handleItemClick}
              >
                Actions
              </ButtonDropdown>
              <button
                style={{
                  cursor: isAtFirstProduct ? "not-allowed" : "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={goToPreviousOrder}
                disabled={isAtFirstProduct}
              >
                <Icon name="angle-left" />
              </button>
              <button
                style={{
                  cursor: isAtLastProduct ? "not-allowed" : "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={goToNextOrder}
                disabled={isAtLastProduct}
              >
                <Icon name="angle-right" />
              </button>
            </SpaceBetween>
          }
        >
          <SpaceBetween direction="horizontal" size="xs">
            <Header variant="h1">#{id}</Header>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "red",
                padding: "0 0.5rem",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {orderDetail?.paymentDetails?.status || "N/A"}
            </div>
            <div
              style={{
                display: "inline-block",
                backgroundColor:
                  orderDetail?.status === "Order Confirmed"
                    ? "#414D5C" // Dark grey color for 'Order Confirmed'
                    : orderDetail?.status === "packed"
                    ? "#0972D3" // Blue color for 'Packed'
                    : orderDetail?.status === "on the way"
                    ? "#0972D3" // Teal color for 'On The Way'
                    : orderDetail?.status === "delivered"
                    ? "#0972D3" // Green color for 'Delivered'
                    : "#6C757D", // Default color for unknown statuses
                padding: "0 0.5rem",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {orderDetail?.status === "Order Confirmed"
                ? "Order Confirmed"
                : orderDetail?.status === "packed"
                ? "Packed"
                : orderDetail?.status === "on the way"
                ? "On The Way"
                : orderDetail?.status === "delivered"
                ? "Delivered"
                : orderDetail?.status || "N/A"}
            </div>
          </SpaceBetween>
        </Header>
        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
          <Container variant="borderless" className="container-box-shadow">
            <Box padding={{ top: 0, bottom: 0 }}>
              <div style={timelineContainerStyle}>
                {events.map((event, index) => (
                  <div
                    key={index}
                    style={timelineItemStyle(
                      index,
                      index === events.length - 1
                    )}
                  >
                    {index < events.length - 1 && (
                      <div
                        style={{
                          ...timelineConnectorStyle(index),
                          height: "calc(120%)",
                          top: "calc(12px)",
                        }}
                      ></div>
                    )}
                    <div style={timelineItemBeforeStyle(index)}></div>
                    <div style={timelineStepStyle}>{event.step}</div>
                    <div>
                      <h3 style={timelineTitleStyle}>{event.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </Container>

          <Container variant="borderless" className="container-box-shadow">
            <SpaceBetween size="m">
              <SpaceBetween size="m" direction="horizontal">
                <Header variant="h2">Order Overview</Header>
                <div
                  style={{
                    backgroundColor: "#414D5C",
                    padding: "0 0.5rem",
                    borderRadius: "4px",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "4px",
                    color: "white",
                  }}
                >
                  <p>
                    Delivery Slot : &nbsp;{orderDetail?.deliverySlot?.startTime}{" "}
                    - {orderDetail?.deliverySlot?.endTime}
                  </p>
                </div>
                <div
                  style={{
                    display:
                      orderDetail?.status === "on the way" ||
                      orderDetail?.status === "delivered"
                        ? "inline-block"
                        : "none",
                    backgroundColor: "#004d00",
                    padding: "0 0.5rem",
                    borderRadius: "4px",
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "4px",
                    color: "white",
                  }}
                >
                  <p>
                    {orderDetail?.status === "on the way"
                      ? `Order Delivery By ${orderDetail?.assignedTo}`
                      : orderDetail?.status === "delivered"
                      ? `Order Delivered By ${orderDetail?.assignedTo}`
                      : ""}
                  </p>
                </div>
              </SpaceBetween>

              <ColumnLayout columns={4} variant="text-grid">
                <Box>
                  <SpaceBetween size="xs">
                    <h3>Customer Details</h3>
                    <div>
                      <p style={{ color: "#0073bb", fontWeight: "bold" }}>
                        {orderDetail?.userInfo?.name || "N/A"}
                      </p>
                      <p>+91 {orderDetail?.userInfo?.number || "N/A"}</p>
                    </div>
                  </SpaceBetween>
                </Box>
                <Box>
                  <h3>Billing Details</h3>
                </Box>
                <Box>
                  <SpaceBetween size="xs">
                    <h3>Payment Details</h3>
                    <div>
                      <p style={{ fontWeight: "bold" }}>
                        ID&nbsp;: &nbsp;
                        {orderDetail?.paymentDetails?.transactionId || "N/A"}
                      </p>
                      <p>
                        Payment Method&nbsp;: &nbsp;
                        <span style={{ color: "#0073bb", fontWeight: "bold" }}>
                          {orderDetail?.paymentDetails?.method || "N/A"}
                        </span>
                      </p>
                    </div>
                  </SpaceBetween>
                </Box>
                <Box>
                  <SpaceBetween size="xs">
                    <h3>Shipping Details</h3>
                    <div>
                      <p>{orderDetail?.shippingDetails?.address || "N/A"}</p>
                      <p>{orderDetail?.shippingDetails?.zipcode || "N/A"}</p>
                    </div>
                  </SpaceBetween>
                </Box>
              </ColumnLayout>
            </SpaceBetween>
          </Container>
        </Grid>
        <Container
          header={<Header variant="h2">Items</Header>}
          variant="borderless"
          className="container-box-shadow"
        >
          <SpaceBetween size="s">
            <Table
              columnDefinitions={columnDefinitions}
              variant="borderless"
              items={items}
            />
            <Grid gridDefinition={[{ colspan: 5, offset: { xxs: 8 } }]}>
              <ColumnLayout columns={2} minColumnWidth={100}>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  <p>Subtotal &nbsp;:</p>
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  <p style={{ fontWeight: "bold" }}>₹{orderDetail?.subTotal}</p>
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Shipping Charges&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {orderDetail?.deliveryCharges || 0}
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Tax&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {orderDetail?.tax || 0}
                </div>
                <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Total Price&nbsp;:
                </div>
                <div
                  style={{
                    color: "#037F0C",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{orderDetail?.totalPrice || "N/A"}
                </div>
              </ColumnLayout>
            </Grid>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </div>
  );
};

export default OrderDetail;
