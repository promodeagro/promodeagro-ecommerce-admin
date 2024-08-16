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
  const orderDetail = useSelector((state) => state.orders.order_details.data);

  useEffect(() => {
    if (id) {
      dispatch(ordersDetails(id));
    } else {
      console.error("No order ID provided");
    }
  }, [id, dispatch]);

  const events = [
    { step: "Step 1", title: "Order Confirmed" },
    { step: "Step 2", title: "In-progress" },
    { step: "Step 3", title: "Out for Delivery" },
    { step: "Step 4", title: "Delivered" },
  ];

  const timelineContainerStyle = {
    position: "relative",
    margin: "0",
  };

  const timelineItemStyle = (isLast) => ({
    position: "relative",
    paddingLeft: "30px",
    marginBottom: isLast ? "0" : "20px",
  });

  const timelineItemBeforeStyle = {
    content: '""',
    position: "absolute",
    left: "-5px",
    top: "0",
    width: "16px",
    height: "16px",
    backgroundColor: "#0073bb",
    borderRadius: "50%",
    border: "2px solid #0073bb",
  };

  const timelineConnectorStyle = {
    position: "absolute",
    left: "2px",
    width: "1px",
    backgroundColor: "#0073bb",
    zIndex: 0,
  };

  const timelineStepStyle = {
    color: "black",
    fontSize: "12px",
    marginBottom: "5px",
  };

  const timelineContentStyle = {
    background: "#ffffff",
  };

  const timelineTitleStyle = {
    color: "#0073bb",
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
                  cursor: "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Icon name="angle-left" />
              </button>
              <button
                style={{
                  cursor: "pointer",
                  borderRadius: "1rem",
                  width: "46px",
                  height: "30px",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <Icon name="angle-right" />
              </button>
            </SpaceBetween>
          }
        >
          #{id}
        </Header>

        <Grid gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}>
          <Container>
            <Box padding={{ top: 0, bottom: 0 }}>
              <div style={timelineContainerStyle}>
                {events.map((event, index) => (
                  <div
                    key={index}
                    style={timelineItemStyle(index === events.length - 1)}
                  >
                    {index < events.length - 1 && (
                      <div
                        style={{
                          ...timelineConnectorStyle,
                          height: "calc(120%)",
                          top: "calc(12px)",
                        }}
                      ></div>
                    )}
                    <div style={timelineItemBeforeStyle}></div>
                    <div style={timelineStepStyle}>{event.step}</div>
                    <div style={timelineContentStyle}>
                      <h3 style={timelineTitleStyle}>{event.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Box>
          </Container>

          <Container header={<Header variant="h2">Order Overview</Header>}>
            <ColumnLayout columns={4} variant="text-grid">
              <Box>
                <h3>Customer Information</h3>
                <p style={{ color: "#0073bb", fontWeight: "bold" }}>
                  {orderDetail?.userInfo?.name || "N/A"}
                </p>
                <p>+91 {orderDetail?.userInfo?.number || "N/A"}</p>
              </Box>
              <Box>
                <h3>Billing Details</h3>
              </Box>
              <Box>
                <h3>Payment Details</h3>
              </Box>
              <Box>
                <h3>Shipping Details</h3>
              </Box>
            </ColumnLayout>
          </Container>
        </Grid>

        <Container header={<Header variant="h2">Items</Header>}>
          <Table
            columnDefinitions={columnDefinitions}
            variant="borderless"
            items={items}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "6rem",
                width: "40%",
                justifyContent: "center",
                padding: "0.5rem",
              }}
            >
              <p>Subtotal:</p>
              <p style={{ fontWeight: "bold" }}>₹{subtotal}</p>
            </div>
          </div>
        </Container>
      </SpaceBetween>
    </div>
  );
};

export default OrderDetail;
