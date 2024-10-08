import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { ColumnLayout, Select } from "@cloudscape-design/components";
import { fetchProducts } from "Redux-Store/Inventory/inventoryThunk";
import Grid from "@cloudscape-design/components/grid";

const Inventory = () => {
  const [filteringText, setFilteringText] = React.useState("");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [activeTabId, setActiveTabId] = React.useState("first");
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = React.useState(null);


  const products = useSelector((state) => state.items.products);

  const dispatch = useDispatch();
  // console.log("pro",products)
  const { data = [], status } = products;
  console.log("data", data);
  // Fetch products when component mounts
  useEffect(() => {
    dispatch(
      fetchProducts({
        category: selectedCategory?.value || "",
        search: filteringText,
        subCategory: selectedSubCategory?.value || "",
      })
    );
  }, [dispatch, selectedCategory, filteringText, selectedSubCategory]);

  const handleCategoryChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption);


  };
  const handleSearchChange = ({ detail }) => {
    setFilteringText(detail.filteringText);
  };
  const handleSubCategoryChange = ({ detail }) => {
    setSelectedSubCategory(detail.selectedOption);
  };

  // Filter products based on the filteringText
  const filteredProducts = Array.isArray(data?.items)
    ? data.items.filter((product) =>
        product.name.toLowerCase().includes(filteringText.toLowerCase())
      )
    : [];

  const ITEMS_PER_PAGE = 50;
  // Calculate the items for the current page
  const startIndex = (currentPageIndex - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

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

  const subcategoryOptions = {
    "Fresh Vegetables": [
      { label: "Daily Vegetables", value: "Daily Vegetables" },
      { label: "Leafy Vegetables", value: "Leafy Vegetables" },
      { label: "Exotic Vegetables", value: "Exotic Vegetables" },
    ],
    "Fresh Fruits": [
      { label: "Daily Fruits", value: "Daily Fruits" },
      { label: "Exotic Fruits", value: "Exotic Fruits" },
      { label: "Dry Fruits", value: "Dry Fruits" },
    ],
    Dairy: [
      { label: "Milk", value: "Milk" },
      { label: "Butter & Ghee", value: "Butter & Ghee" },
      { label: "Paneer & Khowa", value: "Paneer & Khowa" },
    ],
    Groceries: [
      { label: "Cooking Oil", value: "Cooking Oil" },
      { label: "Rice", value: "Rice" },
      { label: "Daal", value: "Daal" },
      { label: "Spices", value: "Spices" },
      { label: "Snacks", value: "Snacks" },
    ],
    "Bengali Special": [
      { label: "Bengali Vegetables", value: "Bengali Vegetables" },
      { label: "Bengali Groceries", value: "Bengali Groceries" },
      { label: "Bengali Home Needs", value: "Bengali Home Needs" },
    ],
    "Eggs Meat & Fish": [
      { label: "Eggs", value: "Eggs" },
      { label: "Fish", value: "Fish" },
      { label: "Chicken", value: "Chicken" },
      { label: "Mutton", value: "Mutton" },
    ],
  };



  return (
    <div className="flex-col gap-3">
      <div className="flex flex-col gap-3">
        <ContentLayout
          headerVariant="high-contrast"
          // defaultPadding
          breadcrumbs={
            <BreadcrumbGroup
              items={[
                { text: "Dashboard", href: "/app/dashboard" },
                { text: "Inventory", href: "#components" },
              ]}
              ariaLabel="Breadcrumbs"
            />
          }
          header={<Header variant="h1">Inventory</Header>}
        >
          <Container>
            
            <ColumnLayout columns={5} variant="default" minColumnWidth={150}>
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
                  {data.count}
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


          </div>
      
      <div style={{ marginTop: "15px"}}>
        <Table
                  header={
<>
                    <SpaceBetween size="xs" direction="horizontal">
                    <TextFilter
                      size="3xs"
                      filteringPlaceholder="Search"
                      filteringText={filteringText}
                      onChange={handleSearchChange}
                    /> 
                    <Select
                      required
                      selectedOption={selectedCategory}
                      onChange={handleCategoryChange}
                      options={[
                        { label: "All", value: "" },
                        {
                          label: "Fresh Vegetables",
                          value: "Fresh Vegetables",
                        },
                        {
                          label: "Fresh Fruits",
                          value: "Fresh Fruits",
                        },
                        {
                          label: "Dairy",
                          value: "Dairy",
                        },
                        {
                          label: "Groceries",
                          value: "Groceries",
                        },
                        { label: "Bengali Special", value: "Bengali Special" },
                        { label: "Eggs Meat & Fish", value: "Eggs Meat & Fish" },
                      ]}
              placeholder="Select Category"
                    />
                                      <Select
                              required
                              selectedOption={selectedSubCategory}
                              onChange={handleSubCategoryChange}
                              placeholder="Select Sub Category"
                              options={
                                selectedCategory
                                  ? subcategoryOptions[selectedCategory?.value] || []
                                  : []
                              }
                            />
                            </SpaceBetween>
          <Box float="right">
                    <Pagination
                      currentPageIndex={currentPageIndex}
                      onChange={({ detail }) =>
                        setCurrentPageIndex(detail.currentPageIndex)
                      }
                      pagesCount={5}
                    />
                    </Box>
                  
                  
                    </>
            
                  }
        
          variant="borderless"
          columnDefinitions={[
            {
              id: "itemCode",
              header: "Item Code",
              cell: (e) => `#${e.itemCode}`,
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
                    src={e.image}
                    // alt={e.name}
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
              id: "subCategory",
              sortingField: "subCategory",
              header: "Sub Category",
              cell: (e) => e.subCategory,
            },

            {
              sortingField: "quantityOnHand",
              id: "quantityOnHand",
              header: "Quantity on Hand",
              cell: (e) => (
                <Box textAlign="center">
                  {e.stockQuantity} {e.units}
                </Box>
              ),
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
              cell: (e) => `Rs. ${e.purchasingPrice}`,
            },
            {
              sortingField: "msp",
              id: "msp",
              header: "MSP",
              cell: (e) => `Rs. ${e.msp}`,
            },
          ]}
          // columnDisplay={[
          //   { id: "itemCode", visible: true },
          //   { id: "name", visible: true },
          //   { id: "category", visible: true },
          //   { id: "quantityOnHand", visible: true },
          //   { id: "stockAlert", visible: true },
          //   { id: "purchasingPrice", visible: true },
          //   { id: "msp", visible: true },
          //   { id: "status", visible: true },
          // ]}
          enableKeyboardNavigation
          items={paginatedProducts}
          loadingText="Loading resources"
          trackBy="itemCode"
          empty={
            <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
              <SpaceBetween size="m">
                <b>No Products</b>
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
            padding={{ left: "m", right: "m", top: "s" }}
            display="flex"
            // alignItems="center"
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
                // alignItems: "center",
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
                  Stock: {selectedProduct.stockQuantity}Kg&nbsp;&nbsp;
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
          <div>
            <Tabs
              variant="borderless"
              onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
              activeTabId={activeTabId}
              tabs={[
                {
                  size: "xs",
                  label: "Overview",
                  id: "first",
                  content: <Overview selectedProduct={selectedProduct} />,
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Inventory;
