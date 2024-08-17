import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
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
import Tabs from "@cloudscape-design/components/tabs";
import Overview from "./drawerTabs/overview";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import { ColumnLayout } from "@cloudscape-design/components";
import { fetchProducts } from "Redux-Store/Inventory/inventoryThunk";
const Inventory = () => {
  const [filteringText, setFilteringText] = React.useState("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [activeTabId, setActiveTabId] = React.useState("first");
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.items.products);

  const dispatch = useDispatch();
  console.log("pro",products)
  const { data = []} = products;
  console.log("data",data)
   // Fetch products when component mounts
   useEffect(() => {
     dispatch(fetchProducts()
   );
   }, [dispatch]);
  // Check if products is an array and has elements

  const ordersPerPage = 10;

  // Filter products based on the filteringText
  const filteredProducts = data.items.filter((product) =>
    product.name.toLowerCase().includes(filteringText.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / ordersPerPage);

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

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 1); // Pagination component uses 0-based index
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
    setCurrentPage(1); // Reset to the first page on search text change
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
                { text: "Dashboard", href: "/app/dashboard" },
                { text: "Inventory", href: "#components" },
              ]}
              ariaLabel="Breadcrumbs"
            />
          }
          header={
            <Header
              variant="h1"
            >
              Inventory
            </Header>
          }
        >
          <Container>
            <ColumnLayout columns={5} variant="default" minColumnWidth={120}>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>All Products</p>
                </Box>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "1000",
                    lineHeight: 1.3,
                    color: "#037F0C",
                  }}
                >
                  924
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Published Stock</p>
                </Box>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "1000",
                    lineHeight: 1.3,
                    color: "#602400",
                  }}
                >
                  423
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Low Stock Alert</p>
                </Box>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "1000",
                    lineHeight: 1.3,
                    color: "#2EA597",
                  }}
                >
                  123
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Expired</p>
                </Box>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "1000",
                    lineHeight: 1.3,
                    color: "#56CCF2",
                  }}
                >
                  128
                </span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Categories</p>
                </Box>
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: "1000",
                    lineHeight: 1.3,
                    color: "#EB5757",
                  }}
                >
                  4
                </span>
              </div>
            </ColumnLayout>
          </Container>
        </ContentLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "25px",
            paddingLeft: "25px",
            paddingTop: "15px",
          }}
        >
          <div style={{ width: "60%" }}>
            <TextFilter
              size="3xs"
              filteringPlaceholder="Search"
              filteringText={filteringText}
              onChange={handleSearchChange}
            />
          </div>

          <Pagination
            currentPageIndex={currentPage - 1}
            pagesCount={totalPages}
            openEnd
            onChange={({ detail }) => handlePageChange(detail.currentPageIndex)}
          />
        </div>
      </div>
      <div style={{ marginTop: "15px", padding: "0 25px 0 25px" }}>
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
                    src={e.images}
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
              cell: (e) => e.stockQuantity,
            },
            {
              sortingField: "stockAlert",
              id: "stockAlert",
              header: "Stock Alert",
              cell: (e) => (
                <span style={{ color: getStockAlertColor("Available") }}>
              "Available"
                 
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
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                iconName="close"
                variant="icon"
                onClick={handleCloseDrawer}
              />
            </div>
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
                <p
                  style={{
                    color: "black",
                    fontSize: "large",
                    paddingTop: "15px",
                  }}
                >
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
            </div>
          </Box>
          <Tabs
          variant="borderless"
            onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
            activeTabId={activeTabId}
            tabs={[
              {
                label: "Overview",
                id: "first",
                content: <Overview selectedProduct={selectedProduct} />,
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default Inventory;
