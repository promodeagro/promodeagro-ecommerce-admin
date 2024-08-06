import React from "react";
import { useSelector } from "react-redux";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Pagination from "@cloudscape-design/components/pagination";
import ContentLayout from "@cloudscape-design/components/content-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import Badge from "@cloudscape-design/components/badge";
import Tabs from "@cloudscape-design/components/tabs";
import Overview from "./drawerTabs/overview";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import { ColumnLayout } from "@cloudscape-design/components";

const Inventory = () => {
  const [filteringText, setFilteringText] = React.useState("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [activeTabId, setActiveTabId] = React.useState("first");
  // Fetch products data from Redux store
  const products = useSelector((state) => state.items.items.data);

  // Check if products is an array and has elements
  if (!Array.isArray(products)) {
    return (
      <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
        <Header>No data available</Header>
      </Box>
    );
  }

  // Filter products based on the filteringText
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filteringText.toLowerCase())
  );

  // Determine the color based on the stock alert value
  const getStockAlertColor = (stockAlert) => {
    return stockAlert.toLowerCase().includes("low") ? "red" : "#0492C2";
  };

  // Open drawer with product details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  // Close drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex-col gap-3">
      <div className="flex flex-col gap-3">
      <ContentLayout
      headerVariant="high-contrast"
      defaultPadding
      breadcrumbs={
        <BreadcrumbGroup
        items={[
          { text: "Dashboard", href: "#" },
          { text: "Inventory", href: "#components" },
        ]}
        ariaLabel="Breadcrumbs"
      />
      }
      header={
        <Header
          variant="h1"
          actions={
            <div>
            <Button
      iconName="add-plus"
      variant="primary"
      wrapText={false}
    >
      Add Item
    </Button>
            </div>
          }
        >
          Inventory
        </Header>
      }
    >
      <Container
      >
       <ColumnLayout columns={5} variant="default" minColumnWidth={120}>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>All Products</p></Box>
              <span style={{ fontSize: 40, fontWeight: '1000', lineHeight: 1.3,color:"#037F0C"}}>924</span>
            </div>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Published Stock</p></Box>
              <span style={{ fontSize: 40, fontWeight: '1000', lineHeight: 1.3, color:"#602400"}}>423</span>
            </div>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Low Stock Alert</p></Box>
              <span style={{ fontSize: 40, fontWeight: '1000', lineHeight: 1.3,color:"#2EA597" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Expired</p></Box>
              <span style={{ fontSize: 40, fontWeight: '1000', lineHeight: 1.3,color:"#56CCF2" }}>128</span>
            </div>
            <div>
              <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Categories</p></Box>
              <span style={{ fontSize: 40, fontWeight: '1000', lineHeight: 1.3,color:"#EB5757" }}>4</span>
            </div>
          </ColumnLayout>
      </Container>
    </ContentLayout>
    
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "10px",
            alignItems: "center",
            marginTop: "12px",
          }}
        >
          <TextFilter
            filteringText={filteringText}
            filteringPlaceholder="Search"
            filteringAriaLabel="Filter instances"
            onChange={({ detail }) => setFilteringText(detail.filteringText)}
          />
          {
        <Pagination currentPageIndex={1} pagesCount={5} />
      }
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
            }}
          >
            <Container
              variant="borderless"
              size="xs"
              header={<Header variant="h2">1921</Header>}
            >
              <b>All Products</b>
            </Container>
          </div>
          <div
            style={{
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
            }}
          >
            <Container
              variant="borderless"
              size="xs"
              header={<Header variant="h2">421</Header>}
            >
              <b>Published Stock</b>
            </Container>
          </div>
          <div
            style={{
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
            }}
          >
            <Container
              variant="borderless"
              size="xs"
              header={<Header variant="h2">212</Header>}
            >
              <b>Low Stock Alert</b>
            </Container>
          </div>
          <div
            style={{
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
              borderRadius: "15px",
            }}
          >
            <Container
              variant="borderless"
              size="xs"
              header={<Header variant="h2">223</Header>}
            >
              <b>Expired</b>
            </Container>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Table
          variant="borderless"
          columnDefinitions={[
            {
              id: "itemCode",
              header: "Item Code",
              cell: (e) => e.itemCode,
              isRowHeader: true,
            },
            {
              id: "name",
              header: "Name",
              cell: (e) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleProductClick(e)}
                >
                  <img
                    src={e.imageUrl}
                    alt={e.name}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  {e.name}
                </div>
              ),
            },
            {
              id: "category",
              sortingField: "category",
              header: "Category",
              cell: (e) => e.category,
            },
            {
              sortingField: "quantityOnHand",
              id: "quantityOnHand",
              header: "Quantity on Hand",
              cell: (e) => e.quantityOnHand,
            },
            {
              sortingField: "stockAlert",
              id: "stockAlert",
              header: "Stock Alert",
              cell: (e) => (
                <span style={{ color: getStockAlertColor(e.stockAlert) }}>
                  {e.stockAlert}
                </span>
              ),
            },
            {
              sortingField: "purchasingPrice",
              id: "purchasingPrice",
              header: "Purchasing Price",
              cell: (e) => e.purchasingPrice,
            },
            {
              sortingField: "msp",
              id: "msp",
              header: "MSP",
              cell: (e) => e.msp,
            },
            {
              sortingField: "status",
              id: "status",
              header: "Status",
              cell: (e) => (
                <Badge color={e.status === "Published" ? "green" : "red"}>
                  {e.status}
                </Badge>
              ),
            },
          ]}
          columnDisplay={[
            { id: "itemCode", visible: true },
            { id: "name", visible: true },
            { id: "category", visible: true },
            { id: "quantityOnHand", visible: true },
            { id: "stockAlert", visible: true },
            { id: "purchasingPrice", visible: true },
            { id: "msp", visible: true },
            { id: "status", visible: true },
          ]}
          enableKeyboardNavigation
          items={filteredProducts}
          loadingText="Loading resources"
          trackBy="itemCode"
          empty={
            <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
              <SpaceBetween size="m">
                <b>No resources</b>
                <Button>Create resource</Button>
              </SpaceBetween>
            </Box>
          }
        />
      </div>
      {isDrawerOpen && selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            height: "100%",
            width: "65%",
            backgroundColor: "white",
            boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            overflowY: "auto",
          }}
        >
          <Box
            padding={{ left: "m", right: "m", top: "s", bottom: "s" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="lightgrey"
          >
           <div style={{display:"flex",justifyContent:"end"}}>
           <Button
          iconName="close"
          variant="icon"
          onClick={handleCloseDrawer}
        /></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ color: "#0972D3" }}>
                {selectedProduct.name}
                <br />
                <p style={{ color: "black", fontSize: "large", paddingTop: "15px" }}>
                  Stock: {selectedProduct.quantityOnHand}Kg&nbsp;&nbsp;
                  <span style={{ fontSize: "10px" }}>
                    {selectedProduct.stockAlert === "Low Stock" ? (
                      <StatusIndicator type="warning" size="small">
                        {selectedProduct.stockAlert}
                      </StatusIndicator>
                    ) : (
                      <span style={{ fontSize: "medium", color: "#0972D3" }}>
                        {selectedProduct.stockAlert}
                      </span>
                    )}
                  </span>
                </p>
              </h1>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
          
                <Button
                  size="xs"
                  variant="primary"
                >
                  Publish
                </Button>
              </div>
            </div>
          </Box>
          <Tabs
            onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
            activeTabId={activeTabId}
            tabs={[
              {
                label: "Overview",
                id: "first",
                content: <Overview selectedProduct={selectedProduct} />,
              },
              {
                label: "Order History",
                id: "second",
                content: "Second tab content area",
              },
              {
                label: "Movement History",
                id: "third",
                content: "Third tab content area",
              },
              {
                label: "Item-Vendor",
                id: "fourth",
                content: "Third tab content area",
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Inventory;