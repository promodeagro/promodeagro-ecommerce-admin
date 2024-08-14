import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import { Container, Icon, Box } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Refund from "./Refund";

const OrderDetail = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const events = [
    { step: "Step 1", title: "Order Confirmed" },
    { step: "Step 2", title: "In-progress" },
    { step: "Step 3", title: "Out for Delivery" },
    { step: "Step 4", title: "Delivered" },
  ];

  const timelineContainerStyle = {
    position: "relative",
    padding: "20px",
    margin: "20px 0",
  };

  const timelineItemStyle = {
    position: "relative",
    paddingLeft: "30px",
    marginBottom: "20px",
  };

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
    left: "2px", // Adjusted to align better
    width: "1px",
    backgroundColor: "#0073bb",
    zIndex: 0,
  };

  const timelineStepStyle = {
    color: "black",
    fontSize: "12px", // Adjust text size as needed
    marginBottom: "5px",
  };

  const timelineContentStyle = {
    background: "#ffffff",
  };

  const timelineTitleStyle = {
    color: "#0073bb", // Title color
    fontSize: "14px", // Title text size
    margin: "0", // Remove default margin
  };

  return (
    <div>
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
            <Button iconName="external" onClick={() => navigate("/app/order/orderdetail/refund")} 
            >Refund</Button>
            
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
        #1110
      </Header>
      <Box>
        <div style={timelineContainerStyle}>
          {events.map((event, index) => (
            <div key={index} style={timelineItemStyle}>
              {/* Render vertical line only for non-last items */}
              {index < events.length - 1 && (
                <div
                  style={{
                    ...timelineConnectorStyle,
                    height: "calc(120%)", // Adjust height as needed
                    top: "calc(12px)", // Center line to start from middle of step
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
    </div>
  );
};

export default OrderDetail;
