import React, { useEffect,useState,useRef,useCallback } from "react";
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
  Spinner
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
  const { data = [], nextKey, status, error } = useSelector((state) => state.products.products);

  const [selectedItems, setSelectedItems] = useState([]);
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [editedProducts, setEditedProducts] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isBulkModifySuccess, setBulkModifySuccess] = useState(false);
  const [isBulkModifySuccessflash, setBulkModifySuccessflash] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isToggle, setIsToggle] = useState(false);
  const [toggleItem, setToggleItem] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const observer = useRef();

  useEffect(() => {
    // Reset products when filters change
    dispatch(resetProducts());

    // Fetch initial products
    dispatch(fetchProducts({
      search: filteringText,
      category: selectedCategory,
      active:selectedStatus,
    }));
  }, [dispatch,selectedStatus, filteringText, selectedCategory]);

  const handleInputChange = (id, field, value) => {
    setEditedProducts(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
    
    validateField(id, field, value);
  };

  const validateField = (id, field, value) => {
    const osp = value;
    const cp = field === "compareAt" ? value : editedProducts[id]?.compareAt || "";
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

    setValidationErrors(prevErrors => ({
      ...prevErrors,
      [id]: errors,
    }));
  };

  const confirmToggleChange = () => {
    const newStatus = !toggleItem.active;

    dispatch(PutToggle({ id: toggleItem.id, active: newStatus })).then(response => {
      if (response.meta.requestStatus === "fulfilled" && response.payload.status === 200) {
    // Fetch initial products
    dispatch(fetchProducts({
      search: filteringText,
      category: selectedCategory,
      active:selectedStatus,
    }));
      } else {
           // Fetch initial products
    dispatch(fetchProducts({
      search: filteringText,
      category: selectedCategory,
    }));
      }
    });

    setIsToggle(true);
    setModalVisible(false);

    setTimeout(() => {
      setIsToggle(false);
    }, 5000);
  };
  const handleToggleChange = (item) => {
    setToggleItem(item);
    setModalVisible(true);
  };

  const handleSelectChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption.value);
  };
  const handleSelectionChangeStatus = ({ detail }) => {
    setSelectedStatus(detail.selectedOption.value);
  };


  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
  };

  const selectOptions = [
    { label: "All", value: "All" },
    { label: "Leafy Vegetables", value: "Leafy Vegetables" },
    { label: "Fruit", value: "Fruit" },
    { label: "Vegetable", value: "Vegetable" },
    { label: "Bengali Vegetable", value: "Bengali Vegetable" },
  ];
  const selectOptionsStatus = [
    { label: "All", value: "All" },
    { label: "Active", value: "true" },
    { label: "Inactive", value: "false" },

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

    selectedItems.forEach(item => {
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
    const pricingDataArray = selectedItems.map(item => ({
      id: item.id,
      compareAt: parseFloat(editedProducts[item.id]?.compareAt || item.compareAt),
      onlineStorePrice: parseFloat(editedProducts[item.id]?.onlineStorePrice || item.onlineStorePrice),
    }));

    try {
      const response = await dispatch(putPricingById(pricingDataArray));

      if (response.meta.requestStatus === "fulfilled" && response.payload.status === 200) {
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
      }, 5000);
    } catch (err) {
      console.error("Failed to update product pricing:", err);
      setBulkModifySuccess(false);
    }
  };

  const navigateToStore = () => {
    const baseCategoryUrl = "https://promodeagro.com";
    const categoryUrlPart = {
      "Leafy Vegetables": "/category/VEGETABLES/Leafy%20Vegetables",
      "Fruit": "/category/Fruits/Fresh%20Fruits",
      "Vegetable": "/category/VEGETABLES/Fresh%20Vegetables",
      "Bengali Vegetable": "/category/VEGETABLES/Bengali%20Vegetables",
    }[selectedCategory] || "";

    window.open(`${baseCategoryUrl}${categoryUrlPart}`, "_blank");
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



  // Infinite Scroll Logic
  const lastProductRef = useCallback(node => {
    if (status === 'loading') return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && nextKey) {
        setIsFetching(true);
        dispatch(fetchProducts({
          search: filteringText,
          category: selectedCategory,
          nextKey: nextKey,
        })).finally(() => setIsFetching(false));
      }
    });
    if (node) observer.current.observe(node);
  }, [status, nextKey, dispatch, filteringText, selectedCategory]);

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
          <Numbers products={{ data, nextKey, status, error }} />
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
                  <div style={{ width: "110px" }}>
                    <Select
                      options={selectOptions}
                      selectedOption={selectOptions.find(
                        (option) => option.value === selectedCategory
                      )}
                      onChange={handleSelectChange}
                      placeholder="Select Category"
                    />
                  </div>
                  <div style={{ width: "100px" }}>
                    <Select
                      options={selectOptionsStatus}
                      selectedOption={selectOptionsStatus.find(
                        (option) => option.value === selectedStatus
                      )}
                      onChange={handleSelectionChangeStatus}
                      placeholder="Select Status"
                    />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                  {isBulkModifySuccess && (
                    <Button variant="normal" onClick={navigateToStore}>
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
                  <p style={{ color: "#0972D3", textAlign: "center" }}>
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
            items={data}
            selectionType="multi"
          />
          {/* Sentinel element for infinite scrolling */}
          <div ref={lastProductRef} style={{ height: '20px' }}>
            {isFetching && <Spinner />}
          </div>
        </div>
        {status === 'failed' && <Box color="red">{error}</Box>}
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
     Are you sure you want to {toggleItem?.active ? "deactivate" : "activate"} this product?
   </Modal>
    </ContentLayout>
  );
};

export default Products;
