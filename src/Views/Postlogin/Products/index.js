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
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editedProducts, setEditedProducts] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isBulkModifySuccess, setBulkModifySuccess] = useState(false);
    const [isBulkModifySuccessflash, setBulkModifySuccessflash] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  // New state variables
  const [isToggle, setIsToggle] = useState(false);
  const [toggleItem, setToggleItem] = useState(null); // Store the item to be toggled


  useEffect(() => {
    dispatch(fetchProducts());
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
    const cp =
      field === "compareAt" ? value : editedProducts[id]?.compareAt ?? "";

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
  const handleToggleChange = (item) => {
    setToggleItem(item); // Set the item to be toggled
    setModalVisible(true); // Show confirmation modal
  };

  const confirmToggleChange = () => {
    const newStatus = !toggleItem.active;

    dispatch(PutToggle({ id: toggleItem.id, active: newStatus })).then((response) => {
      if (
        response.meta.requestStatus === "fulfilled" &&
        response.payload.status === 200
      ) {
        dispatch(fetchProducts());
      } else {
        dispatch(fetchProducts());
      }
      });
    setIsToggle(true)
    setModalVisible(false);

    setTimeout(() => {
      setIsToggle(false);
    }, 5000); // Hide the modal 
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

  const handleSelectChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption.value);

  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);

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
      setModalVisible1(true);
    }
  };

  const validateInputs = () => {
    let valid = true;
    const errors = {};
  
    selectedItems.forEach((item) => {
      const editedProduct = editedProducts[item.id] || {};
      const osp =
        editedProduct.onlineStorePrice !== undefined
          ? editedProduct.onlineStorePrice
          : item.onlineStorePrice;
      const cp =
        editedProduct.compareAt !== undefined
          ? editedProduct.compareAt
          : item.compareAt;
  
      let itemErrors = {};
  
      if (osp === "" || osp === undefined) {
        valid = false;
        itemErrors.onlineStorePrice = "Required!";
      }
  
      if (cp === "" || cp === undefined) {
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
  
  const handleModalConfirm = async () => {
    let success = true;
  
    // Create the array of pricing data based on selected items
    const pricingDataArray = selectedItems.map((item) => ({
      id: item.id,
      compareAt: parseFloat(editedProducts[item.id]?.compareAt || item.compareAt),
      onlineStorePrice: parseFloat(editedProducts[item.id]?.onlineStorePrice || item.onlineStorePrice),
    }));
  
    console.log(pricingDataArray, "products.js");
  
    // Send the pricing data array to the API using the putPricingById thunk
    try {
      const response = await dispatch(putPricingById(pricingDataArray));
  
      if (
        response.meta.requestStatus === "fulfilled" &&
        response.payload.status === 200
      ) {
        setBulkModifySuccessflash(true);
        setBulkModifySuccess(true);
        setSelectedItems([]); // Clear selected checkboxes
        setModalVisible1(false);
        success = false;
      }
      setTimeout(() => {
        setBulkModifySuccessflash(false);
      }, 5000); // 5000ms = 5 seconds
    } catch (err) {
      console.error("Failed to update product pricing:", err);
      success = false; // If there is an error, success should be set to false
    }
  
    if (success) {
      setBulkModifySuccessflash(true)
      setBulkModifySuccess(true);
      setSelectedItems([]); // Clear selected checkboxes
    }
  
    setModalVisible1(false);
  };
  
  

  const navigatestore = () => {
    window.open("https://promodeagro.com/", "_blank");
  };
  const [items1, setItems] = 
  
  useState([
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
  const [flashbarItems, setFlashbarItems] = useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setFlashbarItems([]),
      content: (
        <>
          <b>Status Updated successfully </b>
          <p>Toggle status have been updated successfully</p>
        </>
      ),
      id: "message_1",
    },
  ]);

  return (
    <ContentLayout
    notifications={
      <>
        {/* Always render Flashbar with flashbarItems */}
        {isToggle && <Flashbar items={flashbarItems} />}
    
        {/* Conditionally render Flashbar based on isBulkModifySuccess */}
        {isBulkModifySuccessflash && <Flashbar items={items1} />}
      </>
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
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "360px" }}>
                    <TextFilter
                      filteringPlaceholder="Search"
                      filteringText={filteringText}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <div style={{ width: "120px" }}>
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
                <div style={{ display: "flex", gap: "5px" }}>
                  {isBulkModifySuccess && (
                    <Button variant="normal" onClick={navigatestore}>
                      View On Store
                    </Button>
                  )}
                    <Button
                      disabled={selectedItems.length === 0}
                      variant="normal"
                      onClick={handleBulkModifyPrice}
                    >
                      Bulk Modify Price
                    </Button>
              
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
                  <Box textAlign="center">
                    {item?.stockQuantity}/{item?.units}
                  </Box>
                ),
              },
              {
                id: "alert",
                header: "Stock Alert",
                cell: (item) => (
                  <p style={{color: "#0972D3", textAlign: "center"}}>
                  Active
                  </p>
                ),
              },

              {
                id: "onlineStorePrice",
                header: "Online Price",
                cell: (item) => (
                  <div style={{ width: "80px" }}>
                    <FormField
                      errorText={validationErrors[item.id]?.onlineStorePrice}
                    >
                      <Input
                        disabled={
                          !selectedItems.some(
                            (selectedItem) => selectedItem.id === item.id
                          )
                        }
                        placeholder="Enter Price"
                        type="number"
                        value={
                          editedProducts[item.id]?.onlineStorePrice ??
                          item.onlineStorePrice
                        }
                        onChange={(e) =>
                          handleInputChange(
                            item.id,
                            "onlineStorePrice",
                            e.detail.value
                          )
                        }
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
                    <FormField errorText={validationErrors[item.id]?.compareAt}>
                      <Input
                        placeholder="Enter Price"
                        type="number"
                        value={
                          editedProducts[item.id]?.compareAt ?? item.compareAt
                        }
                        onChange={(e) =>
                          handleInputChange(
                            item.id,
                            "compareAt",
                            e.detail.value
                          )
                        }
                        ariaLabel="compare at price"
                        disabled={
                          !selectedItems.some(
                            (selectedItem) => selectedItem.id === item.id
                          )
                        }
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
            items={filteredProducts}
            selectionType="multi"
          />
        </div>
      </SpaceBetween>

      <Modal
     
        visible={isModalVisible1}
        onDismiss={() => setModalVisible1(false)}
        header="Confirm Bulk Modify"
        footer={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={() => setModalVisible1(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleModalConfirm}>
              Confirm
            </Button>
          </SpaceBetween>
        }
      >
        Are you sure you want to bulk modify the prices for the selected items?
      </Modal>
      {/* Modal for confirmation */}
      <Modal
        // onDismiss={handleModalCancel}
        visible={isModalVisible}
        closeAriaLabel="Close modal"
        header="Confirm Status Change"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              {/* <Button onClick={handleModalCancel} variant="link">
                Cancel
              </Button> */}
              <Button onClick={confirmToggleChange} variant="primary">
                Confirm
              </Button>
            </SpaceBetween>
          </Box>
        }
      >
        Are you sure you want to {toggleItem?.active ? "deactivate" : "activate"} this product?
      </Modal>

      
    </ContentLayout>
  );
};
export default Products;