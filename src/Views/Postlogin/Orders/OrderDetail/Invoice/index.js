import React, { useEffect, useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import Button from "@cloudscape-design/components/button";
import {
  SpaceBetween,
  BreadcrumbGroup,
  Header,
} from "@cloudscape-design/components";
import invoiceImage from "../../../../../assets/img/Promode Agro Farms Logo 1.jpg";
import invoiceImage1 from "../../../../../assets/img/Promode Agro Farms Logo 2.jpg";
import { ordersDetails } from "Redux-Store/Orders/OrdersThunk";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Invoice = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const [orderDetails, setOrderDetails] = useState(null);
  const printRef = useRef();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const actionResult = await dispatch(ordersDetails(id)); // Dispatch the thunk action
        // Assuming `ordersDetails` returns the details from the action result
        setOrderDetails(actionResult.payload); // Adjust based on your actual action result
      } catch (error) {
        console.error("Failed to fetch order details:", error);
      }
    };

    getOrderDetails();
  }, [dispatch, id]);

  const handleDownloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin: [0, 0, 0, 0],
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.75 },
      html2canvas: { scale: 2 }, // Increase the scale for better resolution
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .outputPdf("bloburl")
      .then((blobUrl) => {
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "invoice.pdf";
        link.click();
        link.remove();
      })
      .catch((err) => console.error("Error generating PDF:", err));
  };
  const handlePrint = () => {
    const element = printRef.current;

    if (element) {
      const printWindow = window.open("", "", "height=600,width=800");
      printWindow.document.write(
        "<html><head><title>Print Invoice</title></head><body >"
      );
      printWindow.document.write(element.innerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    } else {
      console.error("Print reference is not set.");
    }
  };

  if (!orderDetails) return <p>Loading...</p>; // Handle loading state

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const today = new Date(); // Gets the current date
  const formattedDate = formatDate(today);

  return (
    <SpaceBetween size="l">
      <BreadcrumbGroup
        items={[
          { text: "Dashboard", href: "/app/dashboard" },
          { text: "Order", href: "/app/orders" },
          { text: "Order Detail", href: "#" },
          { text: "View Invoice", href: "#" },
        ]}
        ariaLabel="Breadcrumbs"
      />

      <SpaceBetween>
        <Header
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button iconName="download" onClick={handleDownloadPDF}>
                Download
              </Button>
              {/* <Button iconName="share">Share</Button> */}
              <Button iconName="view-horizontal" onClick={handlePrint}>
                Print
              </Button>
            </SpaceBetween>
          }
        >
          <SpaceBetween size="s" direction="horizontal">
            <Header variant="h1">#{id}</Header>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "red",
                // padding: "0 0.5rem",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {orderDetails?.paymentDetails?.paymentStatus || "N/A"}
            </div>
            <div
              style={{
                display: "inline-block",
                backgroundColor:
                  orderDetails?.status === "order placed"
                    ? "#414D5C"
                    : orderDetails?.status === "packed"
                    ? "#0972D3"
                    : orderDetails?.status === "on the way"
                    ? "#0972D3"
                    : orderDetails?.status === "delivered"
                    ? "#0972D3"
                    : "#6C757D",
                // padding: "0 0.5rem",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {orderDetails?.status === "Order Confirmed"
                ? "Order Confirmed"
                : orderDetails?.status === "packed"
                ? "Packed"
                : orderDetails?.status === "on the way"
                ? "On The Way"
                : orderDetails?.status === "delivered"
                ? "Delivered"
                : orderDetails?.status || "N/A"}
            </div>
          </SpaceBetween>
        </Header>
      </SpaceBetween>
      <div
        style={{
          height: "60%",
          width: "100%", // Changed width from 60% to 100% for responsiveness
          display: "flex",
          flexDirection: "column", // Stack on smaller screens
          alignItems: "center", // Center content
        }}
      >
        <div
          ref={printRef}
          style={{
            padding: "2rem",
            backgroundColor: "#F9FAFC",
            maxWidth: "100%",
            minHeight: "11in",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          
            <div style={{ display: "flex", gap: "1rem" }}>
              <img
                src={invoiceImage}
                alt="Invoice"
                style={{
                  width: "4rem",
                  height: "4rem",
                  display: "block",
                }}
              />
              <div>
                <h3>PROMODE AGRO FARMS</h3>
                <p style={{ fontSize: "14px" }}>sales@promodeagrofarms.com</p>
                <p style={{ fontSize: "14px", fontWeight: "600" }}>
                  +91 9701610033
                </p>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: "38px",
                    fontWeight: "600",
                    color: "#B2B7C2",
                    margin: "0",
                  }}
                >
                  Invoice
                </p>
                <p>#{orderDetails?.orderId || "N/A"}</p>
              </div>


          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack vertically on small screens
              gap: "18px",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "14px",
              "@media (minWidth: 768px)": {
                flexDirection: "row", // Switch to horizontal on larger screens
              },
            }}
          >
            <div
              style={{
                display: "flex",
                height: "auto", // Changed to adapt to screen height
                width: "100%", // Flex to full width
                gap: "16px",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  flexBasis: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>BILLED TO</p>
                <p></p>
              </div>

              <div
                style={{
                  flexGrow: 1,
                  flexBasis: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>SHIP TO</p>
                <span style={{ marginTop: "0.8rem" }}>
                  <p style={{ fontWeight: "600" }}>
                    {orderDetails?.userInfo?.name || "N/A"},
                  </p>
                  <p>{orderDetails?.shippingDetails?.address || "N/A"},</p>
                  <p>{orderDetails?.shippingDetails?.zipcode || "N/A"},</p>
                  <p>{orderDetails?.userInfo?.number || "N/A"}</p>
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "right",
              alignItems: "right",
              textAlign: "right",
            }}
          >
            <p>AMOUNT TO BE PAID</p>

            <div
              style={{
                backgroundColor: "#E3FA7D",
                marginLeft: "auto",
                padding: "6px 50px 6px 12px",
                width: "100%", // Full width for smaller screens
                maxWidth: "10rem", // Cap max width
                marginTop: "10px",
                fontSize: "20px",
                color: "#6735F4",
                fontWeight: "600",
              }}
            >
              Rs.{orderDetails?.paymentDetails?.amount || "N/A"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column", // Stack vertically on small screens
              gap: "18px",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "14px",
              "@media (min-width: 768px)": {
                flexDirection: "row", // Switch to horizontal on larger screens
              },
            }}
          >
            <div
              style={{
                display: "flex",
                height: "auto", // Changed to adapt to screen height
                width: "100%", // Flex to full width
                gap: "16px",
              }}
            >
            <div
              style={{
                flexGrow: 1,
                flexBasis: 0,
                display: "flex",
                flexDirection: "column",
                gap: '0.5rem',
              "@media (min-width: 768px)": {
                },
              }}
            >
              <p>ORDER ID : {orderDetails?.orderId || "N/A"}</p>
              <p>
                PAYMENT METHOD : {orderDetails?.paymentDetails?.method || "N/A"}
              </p>
              <p>TOTAL ITEMS : {orderDetails?.items?.length || "N/A"}</p>
            </div>

            <div
              style={{
                display: "flex",
                flexGrow: 1,
                flexBasis: 0,
                flexDirection: "column", // Stack on small screens
                 gap: '0.5rem',

                "@media (min-width: 768px)": {
                },
              }}
            >
              <p>
                ORDER DATE :{" "}
                {orderDetails?.createdAt
                  ? new Date(orderDetails.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")
                  : "N/A"}
              </p>
              <p>INVOICE DATE : {formattedDate}</p>
            </div>
          </div>
          </div>

          

          <div style={{ width: "100%", overflowX: "auto" }}>
            <p style={{ fontWeight: "600" }}>ITEMS</p>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Item Name
                  </th>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Quantity
                  </th>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Units
                  </th>
                  <th
                    style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                  >
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderDetails?.items?.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                    >
                      {item?.productName || "N/A"}
                    </td>
                    <td
                      style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                    >
                      {item?.quantity || 0}
                    </td>
                    <td
                      style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                    >
                      {/* {item?.price || 0} */}
                    </td>
                    <td
                      style={{ borderBottom: "1px solid #ddd", padding: "8px" }}
                    >
                      Rs.{item?.price * item?.quantity || 0}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // marginRight: "42px",
            }}
          >
            <p>Total</p>
            <p> Rs. {orderDetails?.paymentDetails?.amount}</p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <img
              src={invoiceImage1}
              alt="Invoice"
              style={{
                width: "20%",
                height: "20%",
                display: "block",
              }}
            />
            <div>
              <p>Thank you for the Business!</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              // marginRight: '42px'
            }}
          >
            <p
              style={{
                margin: 0,
                marginRight: "1rem",
                fontWeight: "600",
                color: "#B2B7C2",
              }}
            >
              Payment Info
            </p>
            <div
              style={{
                flexGrow: 1,
                height: "0.5px",
                backgroundColor: "#B2B7C2",
              }}
            ></div>
          </div>

          <div style={{ width: "100%", maxWidth: "26rem" }}>
            <p style={{ fontWeight: "600" }}>Return Policy</p>
            <p style={{ fontSize: "12px", marginTop: "4px" }}>
              If the item is defective or not as described, you may return it
              during delivery directly or you may request for return within 01
              hour of delivery for items that are defective or are different
              from what you ordered. Items must be complete (including
              freebies), free from damages and for items returned for being
              different from what you ordered, they must be unopened as well.
            </p>
          </div>
        </div>
      </div>
    </SpaceBetween>
  );
};

export default Invoice;
