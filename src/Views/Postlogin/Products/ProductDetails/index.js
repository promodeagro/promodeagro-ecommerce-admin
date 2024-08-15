import React, { useEffect, useState } from "react";
import {
  SpaceBetween,
  Grid,
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
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(
    product?.data?.purchasingPrice || ""
  );
  const [pricingDetails, setPricingDetails] = useState({
    compareAt: product?.data?.compareAt || "",
    onlineStorePrice: product?.data?.onlineStorePrice || "",
  });
  const [productIds, setProductIds] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(id);

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
  console.log(products?.data);

  useEffect(() => {
    // Extract IDs from products and store them in state
    const ids = products.data?.map((product) => product.id);
    setProductIds(ids);
    console.log(ids, "ids");
    // Get current product ID from URL
    const currentId = location.pathname.split("/").pop();
    setCurrentProductId(currentId);
  }, [products, location.pathname]);

  const goToNextProduct = () => {
    const currentIndex = productIds.indexOf(currentProductId);
    if (currentIndex < productIds.length - 1) {
      const nextId = productIds[currentIndex + 1];
      setCurrentProductId(nextId);
      navigate(`/app/products/${nextId}`);
      console.log("clicked");
    }
  };

  const goToPreviousProduct = () => {
    const currentIndex = productIds.indexOf(currentProductId);
    if (currentIndex > 0) {
      const prevId = productIds[currentIndex - 1];
      setCurrentProductId(prevId);
      navigate(`/app/products/${prevId}`);
      console.log("clicked");
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
      // Convert string values to numbers
      const pricingData = {
        compareAt: parseFloat(pricingDetails.compareAt) || 0,
        onlineStorePrice: parseFloat(pricingDetails.onlineStorePrice) || 0,
      };

      const response = await dispatch(putPricingById({ id, pricingData }));

      if (response.meta.requestStatus === "fulfilled") {
        console.log("PUT request successful:", response.payload);
      } else {
        console.error("PUT request failed:", response.payload);
      }
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

  return (
    <Container variant="borderless">
      <Box margin={"s"}>
        <span style={{ cursor: "pointer" }}>
          <Toggle onChange={handleToggleChange} checked={product.data?.active}>
            {product.data?.active ? "Active" : "Inactive"}
          </Toggle>
        </span>
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Products", href: "/app/products" },
            {
              text: product.data?.name || "Product Details",
              href: `/app/products/${id}`,
            },
          ]}
          ariaLabel="Breadcrumbs"
        />
        <Grid
          gridDefinition={[
            { colspan: { default: 10, xxs: 9 } },
            { colspan: { default: 2, xxs: 3 } },
          ]}
        >
          <Header variant="h3">{product.data?.name}</Header>
          <Grid
            disableGutters
            gridDefinition={[
              { colspan: { default: 9, xxs: 10 } },
              { colspan: { default: 1, xxs: 1 } },
              { colspan: { default: 2, xxs: 1 } },
            ]}
          >
            <Button
              variant="primary"
              onClick={handlePublish}
              disabled={isPublishing}
            >
              {isPublishing ? "Saving..." : "Save Changes"}
            </Button>

            <button
              onClick={goToPreviousProduct}
              style={{
                cursor: "pointer",
                borderRadius: "1rem",
                width: "32px",
                height: "30px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <Icon name="angle-left" />
            </button>
            <button
              onClick={goToNextProduct}
              style={{
                cursor: "pointer",
                borderRadius: "1rem",
                width: "32px",
                height: "30px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "20px",
              }}
            >
              <Icon name="angle-right" />
            </button>
          </Grid>
        </Grid>
      </Box>
      <SpaceBetween direction="vertical" size="l">
        <Grid
          gridDefinition={[
            { colspan: { default: 3, xxs: 9 } },
            { colspan: { default: 9, xxs: 3 } },
          ]}
        >
          <SpaceBetween direction="vertical" size="l">
            <BasicDetails
              product={product}
              onChange={handleBasicDetailsChange}
            />
            <Container header={<Header variant="h3">Pricing</Header>}>
              <form onSubmit={(e) => e.preventDefault()}>
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
                        readOnly
                      />
                    </FormField>
                    <FormField label="Margin">
                      <Input size="3xs" placeholder="Margin" readOnly />
                    </FormField>
                  </div>
                </SpaceBetween>
              </form>
            </Container>
            <InventoryTracking product={product} />
            <Attributes product={product} />
          </SpaceBetween>
          <ProductImages product={product} />
        </Grid>
      </SpaceBetween>
    </Container>
  );
};

export default ProductDetail;
