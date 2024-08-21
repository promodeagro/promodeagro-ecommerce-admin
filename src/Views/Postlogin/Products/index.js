import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Header,
  SpaceBetween,
  ContentLayout,
  Table,
  BreadcrumbGroup,
  Toggle,
  TextFilter,
  Select,
  Pagination,
  Input,
  Modal,
  Flashbar,
  FormField,
} from "@cloudscape-design/components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  PutToggle,
  putPricingById,
} from "Redux-Store/Products/ProductThunk";
import "../../../assets/styles/CloudscapeGlobalstyle.css";
import Numbers from "./Numbers";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { data = [] } = products;

  const [activeButton, setActiveButton] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [editedProducts, setEditedProducts] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBulkModifySuccess, setBulkModifySuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [priceError, setPriceError] = useState("");
  const [compareAtError, setCompareAtError] = useState("");
  useEffect(() => {
    dispatch(fetchProducts());
    setCurrentPage(1);
    // setCurrentPage(1);
  }, [dispatch]);

  const handleInputChange = (id, field, value) => {
    setEditedProducts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  
    // Validate the current field and update errors
    const osp = value; // Updated price value
    const cp = field === "compareAt" ? value : editedProducts[id]?.compareAt ?? "";
  
    let errors = {};
  
    if (field === "onlineStorePrice" && !osp) {
      errors.onlineStorePrice = "Required!";
    }
  
    if (field === "compareAt") {
      if (!cp) {
        errors.compareAt = "Required!";
      } else if (parseFloat(cp) < parseFloat(osp)) {
        errors.compareAt = "CP must be greater than OSP";
      }
    }
  
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [id]: errors,
    }));
  };
  


  const getStockAlertStyle = (stockQuantity) => {
    if (stockQuantity === 0) {
      return { color: "gray", textAlign: "center" };
    } else if (stockQuantity > 5) {
      return { color: "#0972D3", textAlign: "center" };
    } else {
      return { color: "red", textAlign: "center" };
    }
  };

  const handleToggleChange = (item) => {
    const newStatus = !item.active;

    dispatch(PutToggle({ id: item.id, active: newStatus })).then((response) => {
      if (
        response.meta.requestStatus === "fulfilled" &&
        response.payload.status === 200
      ) {
        dispatch(fetchProducts());
      } else {
        dispatch(fetchProducts());
      }
    });
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};
  
    selectedItems.forEach((item) => {
      const editedProduct = editedProducts[item.id] || {};
      const osp = editedProduct.onlineStorePrice !== undefined ? editedProduct.onlineStorePrice : item.onlineStorePrice;
      const cp = editedProduct.compareAt !== undefined ? editedProduct.compareAt : item.compareAt;
  
      let itemErrors = {};
  
      if (editedProduct.onlineStorePrice !== undefined && osp === "") {
        valid = false;
        itemErrors.onlineStorePrice = "Required!";
      }
  
      if (editedProduct.compareAt !== undefined && cp === "") {
        valid = false;
        itemErrors.compareAt = "Required!";
      } else if (parseFloat(cp) < parseFloat(osp)) {
        valid = false;
        itemErrors.compareAt = "CP must be greater than OSP";
      }
  
      if (Object.keys(itemErrors).length > 0) {
        errors[item.id] = itemErrors;
      }
    });
  
    setValidationErrors(errors);
    return valid;
  };
  


  const filteredProducts = data
    ? data.filter((item) => {
        const matchesStatus =
          activeButton === "All" || item.active === (activeButton === "Active");
        const matchesSearch =
          item.itemCode.toLowerCase().includes(filteringText.toLowerCase()) ||
          item.name.toLowerCase().includes(filteringText.toLowerCase()) ||
          (item.active ? "active" : "inactive").includes(
            filteringText.toLowerCase()
          );
        const matchesCategory =
          selectedCategory === "All" || item.category === selectedCategory;

        return matchesStatus && matchesSearch && matchesCategory;
      })
    : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 0); // Set `currentPage` to be 1-based
  };

  const handleSelectChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
    setCurrentPage(1);
  };

  const selectOptions = [
    { label: "All", value: "All" },
    { label: "Leafy", value: "Leafy" },
    { label: "Fruit", value: "Fruit" },
    { label: "Vegetable", value: "Vegetable" },
    { label: "Bengali Vegetable", value: "Bengali Vegetable" },
  ];

  const handleSelectionChange = ({ detail }) => {
    setSelectedItems(detail.selectedItems);
  };

  const handleBulkModifyPrice = () => {
    if (validateInputs()) {
      setModalVisible(true);
    }
  };

  const confirmBulkModifyPrice = () => {
    let success = true;

    selectedItems.forEach((item) => {
      const pricingData = {
        onlineStorePrice:
          editedProducts[item.id]?.onlineStorePrice || item.onlineStorePrice,
        compareAt: editedProducts[item.id]?.compareAt || item.compareAt,
      };

      dispatch(putPricingById({ id: item.id, pricingData })).then(
        (response) => {
          if (
            response.meta.requestStatus !== "fulfilled" ||
            response.payload.status !== 200
          ) {
            success = false;
          }
        }
      );
    });

    if (success) {
      setBulkModifySuccess(true);
      setSelectedItems([]); // Clear selected checkboxes
    }

    setModalVisible(false);
  };

  const navigatetogoogle = () => {
    window.open("https://promodeagro.com/", "_blank");
  };
  const [items, setItems] = React.useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (
        <>
          <b>Price updated successfully! </b>
          <p>The new price is now live on the online store</p>
        </>
      ),
      id: "message_1",
    },
  ]);

  return (
    <ContentLayout
      notifications={
        <>{isBulkModifySuccess ? <Flashbar items={items} /> : <></>}</>
      }
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Products", href: "/app/dashboard/products" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      headerVariant="high-contrast"
      header={
        <Header
          actions={
            <SpaceBetween alignItems="center" direction="horizontal" size="xs">
              <Button variant="normal">Export</Button>
            </SpaceBetween>
          }
          variant="h1"
        >
          Products
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="s">
        <Container>
          <Numbers products={products} />
        </Container>

        <div>
          <Table
            header={
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ width: "390px" }}>
                    <TextFilter
                      filteringPlaceholder="Search"
                      filteringText={filteringText}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <div style={{ width: "140px" }}>
                    <Select
                      options={selectOptions}
                      selectedOption={selectOptions.find(
                        (option) => option.value === selectedCategory
                      )}
                      onChange={handleSelectChange}
                      placeholder="Select Category"
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {isBulkModifySuccess ? (
                    <Button variant="normal" onClick={navigatetogoogle}>
                      View Product Page
                    </Button>
                  ) : (
                    <Button
                      disabled={selectedItems.length === 0}
                      variant="normal"
                      onClick={handleBulkModifyPrice}
                    >
                      Bulk Modify Price
                    </Button>
                  )}
                  <Pagination
                    currentPageIndex={currentPage} // Set this to reflect the `currentPage` state
                    onChange={({ detail }) =>
                      handlePageChange(detail.currentPageIndex)
                    }
                    pagesCount={Math.ceil(
                      filteredProducts.length / productsPerPage
                    )}
                  />
                </div>
              </div>
            }
            variant="borderless"
            columnDefinitions={[
              {
                id: "code",
                header: "Item Code",
                cell: (item) => (
                  <Link to={`/app/products/${item.id}`}>{item.itemCode}</Link>
                ),
              },
              {
                id: "name",
                header: "Name",
                cell: (item) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item?.images[0]}
                      alt={item.name}
                      height={35}
                      width={35}
                      style={{ borderRadius: "8px", marginRight: "10px" }}
                    />
                    <p style={{ width: "90px" }}>{item.name}</p>
                  </div>
                ),
              },
              {
                id: "category",
                header: "Category",
                cell: (item) => <Box textAlign="center">{item?.category}</Box>,
              },

              {
                id: "stock",
                header: "On Hand Quantity",
                cell: (item) => (
                  <Box textAlign="center">{item?.stockQuantity}/{item?.units}</Box>
                ),
              },
              {
                id: "alert",
                header: "Stock Alert",
                cell: (item) => (
                  <div style={getStockAlertStyle(item?.stockQuantity)}>
                    {item?.stockQuantity === 0
                      ? "Not Available"
                      : item?.stockQuantity > 5
                      ? "Available"
                      : "Low Stock"}
                  </div>
                ),
              },

              {
                id: "onlineStorePrice",
                header: "Online Price",
                cell: (item) => (
                  <div style={{ width: "80px" }}>
                  <FormField
  errorText={
    validationErrors[item.id]?.onlineStorePrice
  }
>
  <Input
    disabled={!selectedItems.some((selectedItem) => selectedItem.id === item.id)}
    placeholder="Enter Price"
    type="number"
    value={editedProducts[item.id]?.onlineStorePrice ?? item.onlineStorePrice}
    onChange={(e) => handleInputChange(item.id, "onlineStorePrice", e.detail.value)}
    ariaLabel="online store price"
  />
</FormField>
                  </div>
                ),
              },
              {
                id: "compareAt",
                header: "Compare Price",
                cell: (item) => (
                  <div style={{ width: "80px" }}>
<FormField
  errorText={
    validationErrors[item.id]?.compareAt
  }
>
  <Input
    placeholder="Enter Price"
    type="number"
    value={editedProducts[item.id]?.compareAt ?? item.compareAt}
    onChange={(e) => handleInputChange(item.id, "compareAt", e.detail.value)}
    ariaLabel="compare at price"
    disabled={!selectedItems.some((selectedItem) => selectedItem.id === item.id)}
  />
</FormField>










                
                 
                  </div>
                ),
              },
              {
                id: "status",
                header: "Status",
                cell: (item) => (
                  <div style={{ width: "90px" }}>
                    <Toggle
                      onChange={() => handleToggleChange(item)}
                      checked={item.active}
                    >
                      <p>{item.active ? "Active" : "Inactive"}</p>
                    </Toggle>
                  </div>
                ),
              },
            ]}
            selectedItems={selectedItems}
            onSelectionChange={handleSelectionChange}
            items={currentProducts}
            selectionType="multi"
          />
        </div>
      </SpaceBetween>

      <Modal
        visible={isModalVisible}
        onDismiss={() => setModalVisible(false)}
        header="Confirm Bulk Modify"
        footer={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={() => setModalVisible(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={confirmBulkModifyPrice}>
              Confirm
            </Button>
          </SpaceBetween>
        }
      >
        Are you sure you want to bulk modify the prices for the selected items?
      </Modal>
    </ContentLayout>
  );
};

export default Products;

