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
} from "@cloudscape-design/components";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
import "../../../../assets/styles/CloudscapeGlobalstyle.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const product = useSelector((state) => state.products.productDetail);
  const products = useSelector((state) => state.products.products);

  const [specificProduct, setSpecificProduct] = useState({});
  const [active, setActive] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [charge, setCharge] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState("");
  const [msp, setmsp] = useState("");
  const [pricingDetails, setPricingDetails] = useState({
    compareAt: "",
    onlineStorePrice: "",
  });
  const [productIds, setProductIds] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(id);
 
  // New state for validation errors
  const [priceError, setPriceError] = useState("");
  const [compareAtError, setCompareAtError] = useState("");

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

  useEffect(() => {
    const ids = products.data?.map((product) => product.id);
    setProductIds(ids);

    const currentId = location.pathname.split("/").pop();
    setCurrentProductId(currentId);
  }, [products, location.pathname]);

  const goToNextProduct = () => {
    const currentIndex = productIds.indexOf(currentProductId);
    if (currentIndex < productIds.length - 1) {
      const nextId = productIds[currentIndex + 1];
      setCurrentProductId(nextId);
      navigate(`/app/products/${nextId}`);
    }
  };

  const goToPreviousProduct = () => {
    const currentIndex = productIds.indexOf(currentProductId);
    if (currentIndex > 0) {
      const prevId = productIds[currentIndex - 1];
      setCurrentProductId(prevId);
      navigate(`/app/products/${prevId}`);
    }
  };

  const handleToggleChange = () => {
    const newStatus = !active;
    setActive(newStatus);
    dispatch(PutToggle({ id: specificProduct.id, active: newStatus }));
    setSpecificProduct((prev) => ({ ...prev, active: newStatus }));
  };

  const handlePublish = async () => {
    // Reset errors
    setPriceError("");
    setCompareAtError("");

    // Validation
    if (
      parseFloat(pricingDetails.onlineStorePrice) >=
      parseFloat(pricingDetails.compareAt)
    ) {
      setPriceError("Online Store Price must be less than Compare At Price");
      return;
    }

    if (!pricingDetails.compareAt || !pricingDetails.onlineStorePrice) {
      if (!pricingDetails.compareAt) {
        setCompareAtError("Compare At Price is required");
      }
      if (!pricingDetails.onlineStorePrice) {
        setPriceError("Online Store Price is required");
      }
      return;
    }

    setIsPublishing(true);
    try {
      const pricingData = {
        compareAt: parseFloat(pricingDetails.compareAt) || 0,
        onlineStorePrice: parseFloat(pricingDetails.onlineStorePrice) || 0,
      };

      // Dispatch the action to update the pricing details
      const response = await dispatch(putPricingById({ id, pricingData }));

      // Check if the update was successful (status 200)
      if (response.meta.requestStatus === "fulfilled") {
        // Optionally update the local state here if needed
        setSpecificProduct((prev) => ({
          ...prev,
          compareAt: pricingDetails.compareAt,
          onlineStorePrice: pricingDetails.onlineStorePrice,
          chargeTax: charge,
        }));

        // Refresh the page
        setTimeout(() => {
          window.location.reload();
        }, 5);
      } else {
        console.error("Failed to update product pricing.");
      }
    } catch (err) {
      console.error("Error publishing product:", err);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleInputChange = (field, value) => {
    setPricingDetails((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors when user starts typing
    if (field === "onlineStorePrice" && priceError) {
      setPriceError("");
    }
    if (field === "compareAt" && compareAtError) {
      setCompareAtError("");
    }
  };

  if (!product.data) {
    return <div>Loading...</div>;
  }

  const isAtFirstProduct = productIds.indexOf(currentProductId) === 0;
  const isAtLastProduct =
    productIds.indexOf(currentProductId) === productIds.length - 1;

  return (
    <Box margin={{ top: "n" }}>
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
                onClick={handlePublish}
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
                  height: "200px",
                  width:"200px"
                }}
              >
               <Box textAlign="center" float="left"><Spinner size="large" /></Box> 
              </div>
            ) : (
              <>
                <img
                  src={product.data?.images[0]}
                  alt={product.data?.name}
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
                    src={product.data?.images[1]}
                    style={{
                      borderRadius: "8px",
                      height: "110px",
                      width: "50%",
                    }}
                    alt={product.data?.name}
                  />

                  <img
                    src={product.data?.images[2]}
                    style={{
                      borderRadius: "8px",
                      height: "110px",
                      width: "50%",
                    }}
                    alt={product.data?.name}
                  />
                </div>
              </>
            )}
          </Container>
      



        </div>
      </SpaceBetween>
    </Box>
  );
};

export default ProductDetail;
