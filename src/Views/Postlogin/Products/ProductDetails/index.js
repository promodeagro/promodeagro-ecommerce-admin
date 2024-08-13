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
} from "@cloudscape-design/components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, putProductById } from "Redux-Store/Products/ProductThunk";
import BasicDetails from "./Components/BasicDetails";
import Pricing from "./Components/Pricing";
import InventoryTracking from "./Components/InventoryTracking";
import Attributes from "./Components/Attributes";
import ProductImages from "./Components/ProductImages";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);
  const loading = useSelector((state) => state.products.productDetail.status === 'IN_PROGRESS');
  const error = useSelector((state) => state.products.productDetail.status === 'FAILURE');
  const [isPublishing, setIsPublishing] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const handlePublish = async () => {
    setIsPublishing(true);
    console.log('Preparing to send PUT request with data:', { id, productData: { ...product.data, status: 'Published' } });
    try {
      const response = dispatch(putProductById({ id, productData: { ...product.data, status: 'Published' } }));
      console.log('PUT request successful:', response);
    } catch (err) {
      console.error('Error publishing product:', err); // Log the full error
    } finally {
      setIsPublishing(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product: {error}</div>;
  }

  return (
    <Container variant="borderless">
      <Box margin={"s"}>
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Products", href: "/app/products" },
            {
              text: `${product.data?.name}`,
              href: "/app/products",
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
            gridDefinition={[
              { colspan: { default: 6, xxs: 6 } },
              { colspan: { default: 3, xxs: 3 } },
              { colspan: { default: 3, xxs: 3 } },
            ]}
          >
            <Button
              variant="primary"
              onClick={handlePublish}
              disabled={isPublishing}
            >
              {isPublishing ? "Publishing..." : "Publish"}
            </Button>
            <button
              style={{
                cursor: 'pointer',
                borderRadius: '1rem',
                width: '46px',
                height: '30px',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              <Icon name="angle-left" />
            </button>
            <button
              style={{
                cursor: 'pointer',
                borderRadius: '1rem',
                width: '46px',
                height: '30px',
                backgroundColor: 'black',
                color: 'white',
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
            <BasicDetails product={product} />
            <Pricing product={product} />
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
