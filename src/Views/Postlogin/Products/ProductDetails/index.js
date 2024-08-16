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
import ProductImages from "./Components/ProductImages";
import "../../../../assets/styles/CloudscapeGlobalstyle.css"

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const product = useSelector((state) => state.products.productDetail);
  const loading = useSelector(
    (state) => state.products.productDetail.status === "IN_PROGRESS"
  );
  const error = useSelector(
    (state) => state.products.productDetail.status === "FAILURE"
  );
  const products = useSelector((state) => state.products.products);

  const [isPublishing, setIsPublishing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState("");
  const [pricingDetails, setPricingDetails] = useState({
    compareAt: "",
    onlineStorePrice: "",
  });
  const [productIds, setProductIds] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (product.data) {
      setPricingDetails({
        compareAt: product.data.compareAt || "",
        onlineStorePrice: product.data.onlineStorePrice || "",
      });
      setPurchasePrice(product.data.purchasingPrice || "");
      setChecked(product.data.chargeTax || false);
    }
  }, [product.data]);

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

  const handleBasicDetailsChange = (updatedDetails) => {
    setPricingDetails((prev) => ({ ...prev, ...updatedDetails }));
  };

  const handleToggleChange = () => {
    const newStatus = !product.data?.active;
    dispatch(PutToggle({ id: product.data?.id, active: newStatus }));
  };

  const handlePublish = async () => {
    
    setIsPublishing(true);
    try {
      const pricingData = {
        compareAt: parseFloat(pricingDetails.compareAt) || 0,
        onlineStorePrice: parseFloat(pricingDetails.onlineStorePrice) || 0,
      };

     dispatch(putPricingById({ id, pricingData }));

    
    } catch (err) {
      console.error("Error publishing product:", err);
    } finally {
      setIsPublishing(false);
    }
  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product: {error.message}</div>;
  }

  const isAtFirstProduct = productIds.indexOf(currentProductId) === 0;
  const isAtLastProduct = productIds.indexOf(currentProductId) === productIds.length - 1;

  return (
    <Box margin={{ top: "n" }}>
       
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href : "/app/dashboard" },
            { text: "Products", href: "/app/products" },
            {
              text: product.data?.name || "Product Details",
              href: `/app/products/${id}`,
            },
          ]}
          ariaLabel="Breadcrumbs"
        />
        <div style={{ marginBottom: "15px" }}>
          <Header
            variant="h3"
            actions={
              <div style={{ display: "flex", gap: "8px",alignItems:"center" }}>
                 <Toggle onChange={handleToggleChange} checked={product.data?.active}>
          {product.data?.active ? "Active" : "Inactive"}
        </Toggle>
                <Button
                  variant="primary"
                  onClick={handlePublish}
                  disabled={isPublishing}
                  
                >
                  {isPublishing ? "Saving..." : "Save Changes"}
                </Button>
                <div style={{ display: "flex", gap: "3px",justifyContent:"center" }}>
                <button
                  onClick={goToPreviousProduct}
                  style={{
                    cursor: isAtFirstProduct ? "not-allowed" : "pointer",
                    borderRadius: "1rem",
                    width: "45px",
                    height: "30px",
                    backgroundColor: isAtFirstProduct ? "gray" : "black",
                    color: "white",
                    textAlign:"center",
                    padding:"5px"
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
                    padding:"5px",
                    backgroundColor: isAtLastProduct ? "gray" : "black",
                    color: "white",
                    textAlign:"center"
                  }}
                  disabled={isAtLastProduct}
                >
                  <Icon size="small" name="angle-right" />
                </button>
                </div>
                </div>} >{product.data?.name}</Header>
             </div>
          <SpaceBetween direction="vertical" size="l">
            < div style={{display:"flex",gap:"15px"}}
            >
              <SpaceBetween direction="vertical" size="l">
                <BasicDetails
                  product={product}
                  onChange={handleBasicDetailsChange}
                />
                <Container variant="borderless" className="container-box-shadow" header={<Header variant="h3">Pricing</Header>}>
                
                    <SpaceBetween direction="vertical" size="l">
                      <div style={{ display: "flex", gap: "15px" }}>
                        <FormField label="Purchasing Price">
                          <Input
                            value={purchasePrice}
                            size="3xs"
                            onChange={({ detail }) =>
                              setPurchasePrice(detail.value)
                            }
                            placeholder="Input Purchasing Price"
                            disabled
                          />
                        </FormField>
                        <FormField label="Minimum Selling Price">
                          <Input
                            size="3xs"
                            placeholder="Min Selling Price"
                            disabled
                          />
                        </FormField>
                        <FormField label="Compare At Price">
                          <Input
                            value={pricingDetails.compareAt}
                            size="3xs"
                            onChange={({ detail }) =>
                              setPricingDetails((prev) => ({
                                ...prev,
                                compareAt: detail.value,
                              }))
                            }
                            placeholder="Compare At Price"
                          />
                        </FormField>
                      </div>
                      <Checkbox
                        onChange={({ detail }) => setChecked(detail.checked)}
                        checked={checked}
                      >
                        Charge Tax on this Product
                      </Checkbox>
                      <hr />
                      <div style={{ display: "flex", gap: "15px" }}>
                        <FormField label="Online Store Price">
                          <Input
                            value={pricingDetails.onlineStorePrice}
                            size="3xs"
                            onChange={({ detail }) =>
                              setPricingDetails((prev) => ({
                                ...prev,
                                onlineStorePrice: detail.value,
                              }))
                            }
                            placeholder="Online Store Price"
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
                          <Input size="3xs" placeholder="Margin"  />
                        </FormField>
                      </div>
                    </SpaceBetween>
                
                </Container>
                <InventoryTracking product={product} />
                <Attributes product={product} />
              </SpaceBetween>
              <ProductImages product={product} />
            </div>
          </SpaceBetween>
        
      </Box>
 
  );
};

export default ProductDetail;