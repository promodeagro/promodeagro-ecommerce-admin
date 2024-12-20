import React, { useEffect, useState, useRef, useCallback } from "react";
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
  Spinner,
} from "@cloudscape-design/components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  PutToggle,
  putPricingById,
} from "Redux-Store/Products/ProductThunk";
import { resetProducts } from "Redux-Store/Products/ProductsSlice";
import "../../../assets/styles/CloudscapeGlobalstyle.css";
import Numbers from "./Numbers";

const Products = () => {
  const dispatch = useDispatch();
  const { data, nextKey, hasMore, status, error } = useSelector(
    (state) => state.products.products
  );

  const [selectedItems, setSelectedItems] = useState([]);
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [editedProducts, setEditedProducts] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isBulkModifySuccess, setBulkModifySuccess] = useState(false);
  const [isBulkModifySuccessflash, setBulkModifySuccessflash] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isToggle, setIsToggle] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isFieldChanged, setIsFieldChanged] = useState(true);
  const observer = useRef();
  const [selectedSubCategory, setSelectedSubCategory] = React.useState(null);

  useEffect(() => {
    dispatch(resetProducts());
    dispatch(
      fetchProducts({
        search: filteringText,
        category: selectedCategory?.value || "",
        subCategory: selectedSubCategory?.value || "",
        active: selectedStatus,
      })
    );
  }, [
    dispatch,
    selectedStatus,
    filteringText,
    selectedCategory,
    selectedSubCategory,
  ]);

  //validations of input fields
  const handleInputChange = (id, field, value) => {
    setEditedProducts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  
    // Validate the field
    validateField(id, field, value);
  
 // Update isFieldChanged based on the input value
 if (value.trim() === "") {
  setIsFieldChanged(true); // Reset to true if the field is empty
} else {
  setIsFieldChanged(false);
}
  };
  

  const validateField = (id, field, value) => {
    const osp = value;
    const cp =
      field === "compareAt" ? value : editedProducts[id]?.compareAt || "";
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
  const handleBulkModifyPrice = () => {
    if (validateInputs()) {
      setModalVisible1(true);
    }
  };
 // validations before opening modal for api hitting
  const validateInputs = () => {
    let valid = true;
    const errors = {};
    selectedItems.forEach((item) => {
      const editedProduct = editedProducts[item.id] || {};
      const osp = editedProduct.onlineStorePrice || item.onlineStorePrice;
      const cp = editedProduct.compareAt || item.compareAt;
      let itemErrors = {};

      if (!osp) {
        valid = false;
        itemErrors.onlineStorePrice = "Required!";
      }
      if (!cp) {
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
    const pricingDataArray = selectedItems.map((item) => ({
      id: item.id,
      compareAt: parseFloat(
        editedProducts[item.id]?.compareAt || item.compareAt
      ),
      onlineStorePrice: parseFloat(
        editedProducts[item.id]?.onlineStorePrice || item.onlineStorePrice
      ),
    }));

    try {
      const response = await dispatch(putPricingById(pricingDataArray));
      console.log(response, "bulk resp");
      if (
        response.meta.requestStatus === "fulfilled" &&
        response.payload.status === 200
      ) {
        console.log("bulk modify", response);
        setBulkModifySuccessflash(true);
        setBulkModifySuccess(true);
        setSelectedItems([]);
        setModalVisible1(false);
      } else {
        setBulkModifySuccessflash(true);
        setBulkModifySuccess(true);
        setSelectedItems([]);
        setModalVisible1(false);
      }
      setTimeout(() => {
        setBulkModifySuccessflash(false);
      }, 2000);
      setTimeout(() => {
        window.location.reload(); // Refresh the window after 5 seconds
      }, 2000);
    } catch (err) {
      console.error("Failed to update product pricing:", err);
      setBulkModifySuccess(false);
    }
  };


  const confirmToggleChange = () => {
    // Determine the status conditionally
    const newStatus = selectedStatus
      ? selectedStatus === "true" // If selectedStatus is provided, convert it to boolean
      : selectedItems.every((item) => item.active); // If not, use the active status of the selected items

    // Get the IDs of the selected items
    const ids = selectedItems.map((item) => item.id);

    dispatch(PutToggle({ ids, active: newStatus }))
      .unwrap()
      .then((response) => {
        console.log("Update Response:", response); // Log response for debugging
        setModalVisible(false);
        setIsToggle(true);
        setTimeout(() => {
          setIsToggle(false); // Hide the flashbar after 5 seconds
        }, 3000);
        setTimeout(() => {
          window.location.reload(); // Refresh the window after 5 seconds
        }, 3000);
      })

      .catch((error) => {
        console.error("Error during status change:", error); // Log the full error for debugging
        dispatch(fetchProducts());
      });
  };

  const handleToggleChange = (item) => {
    setModalVisible(true);
    setSelectedItems([item]);
  };
  const handleSelectionChangeStatus = ({ detail }) => {
    setSelectedStatus(detail.selectedOption.value);
  };

  const handleCategoryChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption);
  };

  const handleSubCategoryChange = ({ detail }) => {
    setSelectedSubCategory(detail.selectedOption);
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
  };
  const selectOptionsStatus = [
    { label: "All", value: "" },
    { label: "Active", value: "true" },
    { label: "Inactive", value: "false" },
  ];

  const handleSelectionChange = ({ detail }) => {
    setSelectedItems(detail.selectedItems);
  };



  const navigateToStore = () => {
    const baseCategoryUrl = "https://promodeagro.com";
    window.open(`${baseCategoryUrl}`, "_blank");
  };

  const [items1, setItems] = useState([
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
      type: "success",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setFlashbarItems([]),
      content: (
        <>
          <b>Status Updated</b>
          <p>Status have been updated successfully</p>
        </>
      ),
      id: "message_1",
    },
  ]);

  const previousNextKey = useRef(null);
  const lastProductRef = useCallback(
    (node) => {
      if (status === "loading" || !hasMore || isFetching) return; // Stop if loading, no more data, or currently fetching
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && nextKey) {
          if (previousNextKey.current !== nextKey) {
            setIsFetching(true);
            console.log("Fetching next set of products with nextKey:", nextKey);
            dispatch(
              fetchProducts({
                search: filteringText,
                category: selectedCategory,
                nextKey: nextKey,
              })
            ).finally(() => {
              setIsFetching(false);
              previousNextKey.current = nextKey; // Update previous nextKey after fetch
            });
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [
      status,
      nextKey,
      dispatch,
      filteringText,
      selectedCategory,
      hasMore,
      isFetching,
    ]
  );

  const renderModalButton = () => {
    const isAnyProductSelected = selectedItems.length > 0;

    if (selectedStatus === "true") {
      return (
        <Button
          variant="primary"
          onClick={() => setModalVisible(true)}
          disabled={!isAnyProductSelected}
        >
          Move to Inactive
        </Button>
      );
    } else if (selectedStatus === "false") {
      return (
        <Button
          variant="primary"
          onClick={() => setModalVisible(true)}
          disabled={!isAnyProductSelected} // Disable button if no product is selected
        >
          Move to Active
        </Button>
      );
    }
    return null;
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
    <ContentLayout
      notifications={
        <>
          {isToggle && <Flashbar items={flashbarItems} />}
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
      header={<Header variant="h1">Products</Header>}
    >
      <SpaceBetween direction="vertical" size="m">
        <Container>
          <Numbers products={{ data, nextKey, status, error }} />
        </Container>

        <div>
          <Table
            header={
              <SpaceBetween size="xs">
                <SpaceBetween size="xs" direction="horizontal">
                  <TextFilter
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
                  <Select
                    options={selectOptionsStatus}
                    selectedOption={
                      selectedStatus
                        ? selectOptionsStatus.find(
                            (option) => option.value === selectedStatus
                          )
                        : null
                    }
                    onChange={handleSelectionChangeStatus}
                    placeholder="Select Status"
                  />
                </SpaceBetween>

                <Box float="right">
                  <SpaceBetween size="xs" direction="horizontal">
                    {renderModalButton()}
                    <Modal
                      onDismiss={() => setModalVisible(false)}
                      visible={isModalVisible}
                      footer={
                        <Box float="right">
                          <SpaceBetween direction="horizontal" size="xs">
                            <Button
                              variant="link"
                              onClick={() => setModalVisible(false)}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="primary"
                              onClick={confirmToggleChange}
                            >
                              Ok
                            </Button>
                          </SpaceBetween>
                        </Box>
                      }
                      header="Modal title"
                    >
                      Are you sure you want to change the status of this
                      products?
                    </Modal>

                    {/* {isBulkModifySuccess && ( */}
                      <Button variant="normal" onClick={navigateToStore}>
                        View Store
                      </Button>
                    {/* )} */}

                    <Button
                      disabled={isFieldChanged}
                      variant="normal"
                      onClick={handleBulkModifyPrice}
                    >
                      Bulk Modify Price
                    </Button>
                  </SpaceBetween>
                </Box>
              </SpaceBetween>
            }
            variant="borderless"
            columnDefinitions={[
              {
                id: "code",
                header: "Item Code",
                cell: (item) => (
                  <Link to={`/app/products/${item.id}`}>#{item.itemCode}</Link>
                ),
              },
              {
                id: "name",
                header: "Name",
                cell: (item) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item?.images}
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
                id: "subCategory",
                header: "Sub Category",
                cell: (item) => (
                  <Box textAlign="center">{item?.subCategory}</Box>
                ),
              },

              {
                id: "stock",
                header: "On Hand Quantity",
                cell: (item) => (
                  <Box textAlign="center">
                    {item?.stockQuantity} {item?.units}
                  </Box>
                ),
              },
              {
                id: "alert",
                header: "Stock Alert",
                cell: (item) => (
                  <p style={{ color: "#0972D3", textAlign: "center" }}>
                    Available
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
                      disabled={
                        !(
                          (editedProducts[item.id]?.onlineStorePrice ??
                            item.onlineStorePrice) &&
                          (editedProducts[item.id]?.compareAt ?? item.compareAt)
                        )
                      }
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
            items={data}
            selectionType="multi"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No Products</b>
                </SpaceBetween>
              </Box>
            }
          />
          <div
            ref={lastProductRef}
            style={{ height: "20px", textAlign: "center" }}
          >
            {isFetching && <Spinner size="large" />}
          </div>
        </div>
        {status === "failed" && <Box color="red">{error}</Box>}
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
      <Modal
        onDismiss={() => setModalVisible(false)}
        visible={isModalVisible}
        closeAriaLabel="Close modal"
        header="Confirm Status Change"
        footer={
          <Box float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button variant="link" onClick={() => setModalVisible(false)}>
                Cancel
              </Button>
              <Button onClick={confirmToggleChange} variant="primary">
                Confirm
              </Button>
            </SpaceBetween>
          </Box>
        }
      >
        Are you sure you want to change the status?
      </Modal>
    </ContentLayout>
  );
};

export default Products;
