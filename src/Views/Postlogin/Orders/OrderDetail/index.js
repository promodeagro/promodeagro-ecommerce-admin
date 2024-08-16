import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ordersDetails } from "Redux-Store/Orders/OrdersThunk";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import {
  Container,
  Icon,
  Box,
  Grid,
  ColumnLayout,
  Table,
} from "@cloudscape-design/components";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get order details and all orders from Redux
  const orderDetail = useSelector((state) => state.orders.order_details.data);
  const allOrders = useSelector((state) => state.orders.ordersData.data.items); // Assuming this is where all orders are stored

  useEffect(() => {
    if (id) {
      dispatch(ordersDetails(id));
    } else {
      console.error("No order ID provided");
    }
  }, [id, dispatch]);

  const events = [
    { step: "Step 1", title: "Order Confirmed", status: "Order placed" },
    { step: "Step 2", title: "In-progress", status: "PLACED" },
    { step: "Step 3", title: "Out for Delivery", status: "Out for Delivery" },
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
    { header: "Unit per cost", cell: (item) => item.mrp },
    { header: "Total Cost", cell: (item) => `₹${item.price}` },
  ];

  const items = orderDetail?.items || [];
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);

  const currentIndex = allOrders.findIndex((order) => order.id === id);

  const handleNextOrder = () => {
    const nextIndex = (currentIndex + 1) % allOrders.length;
    const nextOrderId = allOrders[nextIndex].id;
    navigate(`/app/order/orderdetail/${nextOrderId}`);
  };

  const handlePreviousOrder = () => {
    const prevIndex = (currentIndex - 1 + allOrders.length) % allOrders.length;
    const prevOrderId = allOrders[prevIndex].id;
    navigate(`/app/order/orderdetail/${prevOrderId}`);
  };

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
        <Header
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                iconName="external"
                onClick={() => navigate("/app/order/orderdetail/refund")}
              >
                Refund
              </Button>
              <Button iconAlign="right" iconName="angle-down">
                Actions
              </Button>
              <button
                style={{
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={handlePreviousOrder}
                disabled={currentIndex === 0} // Disable when on the first order
              >
                <Icon name="angle-left" />
              </button>
              <button
                style={{
                  cursor:
                    currentIndex === allOrders.length - 1
                      ? "not-allowed"
                      : "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
                onClick={handleNextOrder}
                disabled={currentIndex === allOrders.length - 1} // Disable when on the last order
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
                backgroundColor: "#414D5C",
                padding: "0 0.5rem",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {orderDetail?.status || "N/A"}
            </div>
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
              {orderDetail?.paymentDetails?.paymentStatus || "N/A"} 
            </div>
          </SpaceBetween>
        </Header>

        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
          <Container>
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

          <Container>
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


        <Container header={<Header variant="h2">Items</Header>}>
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
                  <p style={{ fontWeight: "bold"}}>
                    ₹{subtotal}
                  </p>
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Shipping Charges&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  N/A
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Tax&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  N/A
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
 ₹{orderDetail?.paymentDetails?.totalAmount || 0}                </div>
              </ColumnLayout>
            </Grid>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </div>
  );
};

export default OrderDetail;
