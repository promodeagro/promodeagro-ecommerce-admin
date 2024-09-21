import React, { useEffect, useState } from "react";
import {
  SpaceBetween,
  Header,
  Box,
  BreadcrumbGroup,
  Container,
  Button,
  Icon,
  Input,
  FormField,
  Checkbox,
  Toggle,
  Spinner,
  Flashbar,
  Modal,
} from "@cloudscape-design/components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductById,
  putPricingById,
  PutToggle,
} from "Redux-Store/Products/ProductThunk";
import BasicDetails from "./Components/BasicDetails";
import InventoryTracking from "./Components/InventoryTracking";
import Attributes from "./Components/Attributes";
import useProductNavigation from "../../Hooks/useProductNavigation";
import "../../../../assets/styles/CloudscapeGlobalstyle.css";


const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
  
    const product = useSelector((state) => state.products.productDetail);
    const [specificProduct, setSpecificProduct] = useState({});
    const [active, setActive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showFlashbar, setShowFlashbar] = useState(false);
      // State for modal and flashbar
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [flashMessages, setFlashMessages] = useState([]);
    const [isPublishing, setIsPublishing] = useState(false);
    const [charge, setCharge] = useState(false);
    const [purchasePrice, setPurchasePrice] = useState("");
    const [msp, setmsp] = useState("");
    const [pricingDetails, setPricingDetails] = useState({
      compareAt: "",
      onlineStorePrice: "",
    });
  
    // Validation errors
    const [priceError, setPriceError] = useState("");
    const [compareAtError, setCompareAtError] = useState("");
  
    const { goToNextProduct, goToPreviousProduct, isAtFirstProduct, isAtLastProduct } = useProductNavigation();
  
    useEffect(() => {
      dispatch(fetchProducts());
      if (id) {
        setLoading(true);
        dispatch(fetchProductById(id)).finally(() => setLoading(false));
      }
    }, [dispatch, id]);
  
    useEffect(() => {
      if (product.data) {
        setSpecificProduct(product.data);
        setActive(product.data.active);
        setPricingDetails({
          compareAt: product.data.compareAt || "",
          onlineStorePrice: product.data.onlineStorePrice || "",
        });
        setPurchasePrice(product.data.purchasingPrice || "");
        setmsp(product.data.msp || "");
        setCharge(product.data.chargeTax || false);
      }
    }, [product]);
    const handleToggleChange = () => {
      setShowModal(true);
    };
  
    const handleConfirm = () => {
      const newStatus = !active;
      setActive(newStatus);
      dispatch(PutToggle({ id: product?.data?.id, active: newStatus }))
        .then(() => {
          setSpecificProduct((prev) => ({ ...prev, active: newStatus }));
          setShowFlashbar(true);
          setTimeout(() => setShowFlashbar(false), 5000); // Auto-hide flashbar after 3 seconds
        });
      setShowModal(false);
    };
  
    const handleCancel = () => {
      setShowModal(false);
    };
  const handlePublish = async () => {
    setIsModalVisible(false);
    setIsPublishing(true);
    setPriceError("");
    setCompareAtError("");
    try {
      // Create the pricing data array
      const pricingDataArray = [
        {
          id, // Include the id in the object
          compareAt: parseFloat(pricingDetails.compareAt) || 0,
          onlineStorePrice: parseFloat(pricingDetails.onlineStorePrice) || 0,
        },
      ];

      // Dispatch the action with the pricing data array
      const response = await dispatch(putPricingById(pricingDataArray));

      if (response.meta.requestStatus === "fulfilled") {
        if (id) {
          setLoading(true);
          dispatch(fetchProductById(id)).finally(() => setLoading(false));
        }
        // If the request is successful, update the state with the new pricing details
        setSpecificProduct((prev) => ({
          ...prev,
          compareAt: pricingDetails.compareAt,
          onlineStorePrice: pricingDetails.onlineStorePrice,
          chargeTax: charge,
        })
      
      );

        // Show success flashbar
        setFlashMessages([
          {
            type: "success",
            content: "Product pricing updated successfully.",
            dismissible: true,
            onDismiss: () => setFlashMessages([]),
          },
        ]);

    
      } else {
        console.error("Failed to update product pricing.");
      }
    } catch (err) {
      console.error("Error publishing product:", err);
    } finally {
      setIsPublishing(false);
      setTimeout(() => setFlashMessages([]), 5000);
    }
  };

  const handleInputChange = (field, value) => {
    setPricingDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "onlineStorePrice" && priceError) {
      setPriceError("");
    }
    if (field === "compareAt" && compareAtError) {
      setCompareAtError("");
    }
  };

  const handleSaveChanges = () => {
    if (
      parseFloat(pricingDetails.onlineStorePrice) >=
      parseFloat(pricingDetails.compareAt)
    ) {
      setPriceError("Online Store Price must be less than Compare At Price");
      setIsPublishing(false);
      return;
    }

    if (!pricingDetails.compareAt || !pricingDetails.onlineStorePrice) {
      if (!pricingDetails.compareAt) {
        setCompareAtError("Compare At Price is required");
      }
      if (!pricingDetails.onlineStorePrice) {
        setPriceError("Online Store Price is required");
      }
      setIsPublishing(false);
      return;
    }
    setIsModalVisible(true);
  
  };

  if (!product.data) {
    return <div>Loading...</div>;
  }
  // console.log(product.data.name,"name");

  return (
    <Box margin={{ top: "n" }}>
       {/* Flashbar for success or error messages */}
       {flashMessages.length > 0 && (
        <Flashbar items={flashMessages} />
      )}
      {/* Confirmation Modal */}
      <Modal
        onDismiss={handleCancel}
        visible={showModal}
        closeAriaLabel="Close modal"
        header="Confirm Change"
        footer={
          <SpaceBetween direction="horizontal" size="xs">
            <Button onClick={handleCancel} variant="link">
              Cancel
            </Button>
            <Button onClick={handleConfirm} variant="primary">
              Confirm
            </Button>
          </SpaceBetween>
        }
      >
        Are you sure you want to change the product status?
      </Modal>

      {/* Flashbar for Success Message */}
      {showFlashbar && (
        <Flashbar
          items={[
            {
              type: "info",
              message: "Updated successfully",
              content: "Product Status Changed Successfully",
              dismissible: true,
              onDismiss: () => setShowFlashbar(false),
            },
          ]}
        />
      )}
    
      <BreadcrumbGroup
        className="bread"
        items={[
          { text: "Dashboard", href: "/app/dashboard" },
          { text: "Products", href: "/app/products" },
          {
            text: specificProduct.name || "Product Details",
            href: `/app/products/${id}`,
          },
        ]}
        ariaLabel="Breadcrumbs"
      />
      <div style={{ marginBottom: "15px" }}>
        <Header
          variant="h3"
          actions={
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Toggle onChange={handleToggleChange} checked={active}>
                {active ? "Active" : "Inactive"}
              </Toggle>
              <Button
                variant="primary"
                onClick={handleSaveChanges}
                disabled={isPublishing}
              >
                {isPublishing ? "Saving..." : "Save Changes"}
              </Button>
              <div
                style={{
                  display: "flex",
                  gap: "3px",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={goToPreviousProduct}
                  style={{
                    cursor: isAtFirstProduct ? "not-allowed" : "pointer",
                    borderRadius: "1rem",
                    width: "45px",
                    height: "30px",
                    backgroundColor: isAtFirstProduct ? "gray" : "black",
                    color: "white",
                    textAlign: "center",
                    padding: "5px",
                  }}
                  disabled={isAtFirstProduct}
                >
                  <Icon size="small" name="angle-left" />
                </button>
                <button
                  onClick={goToNextProduct}
                  style={{
                    cursor: isAtLastProduct ? "not-allowed" : "pointer",
                    borderRadius: "1rem",
                    width: "45px",
                    height: "30px",
                    padding: "5px",
                    backgroundColor: isAtLastProduct ? "gray" : "black",
                    color: "white",
                    textAlign: "center",
                  }}
                  disabled={isAtLastProduct}
                >
                  <Icon size="small" name="angle-right" />
                </button>
              </div>
            </div>
          }
        >
          {specificProduct.name}
        </Header>
      </div>
      <SpaceBetween direction="vertical" size="l">
        <div style={{ display: "flex", gap: "20px" }}>
          <SpaceBetween direction="vertical" size="l">
            <BasicDetails product={product} />
            <Container
              variant="borderless"
              className="container-box-shadow"
              header={<Header variant="h3">Pricing</Header>}
            >
              <SpaceBetween size="l">
                <div style={{ display: "flex", gap: "15px" }}>
                  <FormField label="Purchasing Price">
                    <Input
                      value={purchasePrice}
                      size="3xs"
                      onChange={({ detail }) => setPurchasePrice(detail.value)}
                      placeholder="Input Purchasing Price"
                      disabled
                    />
                  </FormField>
                  <FormField label="Minimum Selling Price">
                    <Input
                      value={msp}
                      size="3xs"
                      onChange={({ detail }) => setmsp(detail.value)}
                      placeholder="Min Selling Price"
                      disabled
                    />
                  </FormField>
                  <FormField
                    label="Compare At Price"
                    errorText={compareAtError}
                  >
                    <Input
                      value={pricingDetails.compareAt}
                      // type="number"
                      onChange={(e) =>
                        handleInputChange("compareAt", e.detail.value)
                      }
                      onBlur={() => {
                        if (!pricingDetails.compareAt) {
                          setCompareAtError("Compare At Price is required");
                        } else if (
                          parseFloat(pricingDetails.onlineStorePrice) >=
                          parseFloat(pricingDetails.compareAt)
                        ) {
                          setPriceError(
                            "Online Store Price must be less than Compare At Price"
                          );
                        }
                      }}
                    />
                  </FormField>
                </div>
                <Checkbox
                  onChange={({ detail }) => setCharge(detail.checked)}
                  checked={charge}
                >
                  Charge Tax on this Product
                </Checkbox>
                <hr />
                <div style={{ display: "flex", gap: "15px" }}>
                  <FormField label="Online Store Price" errorText={priceError}>
                    <Input
                      value={pricingDetails.onlineStorePrice}
                      // type="number"
                      onChange={(e) =>
                        handleInputChange("onlineStorePrice", e.detail.value)
                      }
                      onBlur={() => {
                        if (!pricingDetails.onlineStorePrice) {
                          setPriceError("Online Store Price is required");
                        } else if (
                          parseFloat(pricingDetails.onlineStorePrice) >=
                          parseFloat(pricingDetails.compareAt)
                        ) {
                          setPriceError(
                            "Online Store Price must be less than Compare At Price"
                          );
                        }
                      }}
                    />
                  </FormField>

                  <FormField label="Profit">
                    <Input
                      size="3xs"
                      placeholder="Profit"
                      value={
                        pricingDetails.compareAt -
                          pricingDetails.onlineStorePrice || 0
                      }
                    />
                  </FormField>
                  <FormField label="Margin">
                    <Input
                      value={
                        pricingDetails.compareAt &&
                        pricingDetails.onlineStorePrice
                          ? `${(
                              ((pricingDetails.compareAt -
                                pricingDetails.onlineStorePrice) /
                                pricingDetails.compareAt) *
                              100
                            ).toFixed(2)}%`
                          : "%"
                      }
                      size="3xs"
                      placeholder="Margin"
                    />
                  </FormField>
                </div>
              </SpaceBetween>
            </Container>
            <InventoryTracking product={product} />
            <Attributes product={product} />
          </SpaceBetween>
        
          <Container
            fitHeight={600}
            
            variant="borderless"
            className="container-box-shadow"
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "320px",
                  width:"200px"
                }}
              >
               <Box textAlign="center" float="left"><Spinner size="large" /></Box> 
              </div>
            ) : (
              <>
                <img
                    src={specificProduct?.image}
                  alt={specificProduct.name}
                  style={{
                    height: "200px",
                    borderRadius: "8px",
                    width: "100%",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Additional Images
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                  }}
                >
                  <img
                     src={specificProduct?.images?.[1]}
                    style={{
                      borderRadius: "8px",
                      height: "110px",
                      width: "50%",
                    }}
                    alt={product?.data?.name}
                  />

                  <img
                     src={specificProduct?.images?.[2]}
                    style={{
                      borderRadius: "8px",
                      height: "110px",
                      width: "50%",
                    }}
                    alt={product?.data?.name}
                  />
                </div>
              </>
            )}
          </Container>
        </div>
      </SpaceBetween>

      {/* Confirmation Modal */}
      <Modal
        onDismiss={() => setIsModalVisible(false)}
        visible={isModalVisible}
        closeAriaLabel="Close modal"
        header="Confirm Changes"
        footer={
          <Box float="right">
            <Button
              onClick={() => setIsModalVisible(false)}
              variant="link"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePublish}
              variant="primary"
            >
              Confirm
            </Button>
          </Box>
        }
      >
        Are you sure you want to save these changes?
      </Modal>

     
    </Box>
  );
};

export default ProductDetail;
