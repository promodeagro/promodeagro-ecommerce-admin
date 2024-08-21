import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ordersDetails, fetchOrders } from "Redux-Store/Orders/OrdersThunk";
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
} from "@cloudscape-design/components";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Button from "@cloudscape-design/components/button";
import Modal from "@cloudscape-design/components/modal";
import { useLocation } from "react-router-dom";


const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders.ordersData.data?.items || []);
  const orderDetail = useSelector(
    (state) => state.orders.order_details.data || {}
  );

  useEffect(() => {
    if (id) {
      dispatch(ordersDetails(id));
    }
  }, [id]);
  

  const events = [
    { step: "Step 1", title: "Order Confirmed", status: "order placed" },
    { step: "Step 2", title: "Packed", status: "Packed" },
    { step: "Step 3", title: "On the Way", status: "Out for Delivery" },
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
    }
  };

  const [visible, setVisible] = React.useState(false);
  const openModal = () => setVisible(true);
  
  const isAtFirstProduct = orderIds.indexOf(currentOrderId) === 0;
  const isAtLastProduct = orderIds.indexOf(currentOrderId) ===
  orderIds.length - 1;

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
      <Button onClick={openModal} iconName="angle-right-double" iconAlign="right">
        Move to Packed
      </Button>
      <Modal
        onDismiss={() => setVisible(false)}
        visible={visible}
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setVisible(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setVisible(false)}>
                Confirm
              </Button>
            </SpaceBetween>
          </Box>
        }
        header="Move to Packed Stage"
      >
        Are you sure you want to move this order to the 'Packed Orders' stage?
      </Modal>
      <ButtonDropdown
        items={[
          { text: "Cancel Order", id: "cancel", href: "/cancel-order" },
          { text: "Refund Order", id: "refund" },
          { text: "View Invoice", id: "invoice", href: "/view-invoice" },
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
          <Container
          variant="borderless"
                        className="container-box-shadow"
>
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

          <Container
          variant="borderless"
          className="container-box-shadow"
          >
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

        <Container header={<Header variant="h2">Items</Header>} variant="borderless"
                        className="container-box-shadow">
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
                  <p style={{ fontWeight: "bold" }}>₹{subtotal}</p>
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Shipping Charges&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>N/A</div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Tax&nbsp;:
                </div>
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>N/A</div>
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
                  ₹{orderDetail?.paymentDetails?.totalAmount || 0}
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
