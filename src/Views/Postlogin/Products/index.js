import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ColumnLayout,
  Container,
  Header,
  SpaceBetween,
  ContentLayout,
  Table,
  BreadcrumbGroup,
  Toggle
} from '@cloudscape-design/components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, PutToggle } from 'Redux-Store/Products/ProductThunk';
import "../../../assets/styles/CloudscapeGlobalstyle.css"

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { data = [] } = products;
  const [activeButton, setActiveButton] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Inactive':
        return { backgroundColor: '#0972D3', color: 'white', padding: '2px 5px', borderRadius: '4px' };
      case 'Active':
        return { backgroundColor: 'green', color: 'white', padding: '2px 5px', borderRadius: '4px' };
      case 'Stopped':
        return { backgroundColor: 'red', color: 'white', padding: '2px 5px', borderRadius: '4px' };
      default:
        return {};
    }
  };

  const getStockAlertStyle = (stockAlert) => {
    switch (stockAlert) {
      case 'Low':
        return { color: 'red' };
      case 'Available':
        return { color: 'blue' };
      default:
        return {};
    }
  };

  // Handle toggle change
  const handleToggleChange = (item) => {
    const newStatus = !item.active;
    // Optimistically update the local state
    // const updatedProducts = data.map((product) =>
    //   product.id === item.id ? { ...product, active: newStatus } : product
    // );

    dispatch(PutToggle({ id: item.id, active: newStatus })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled' && response.payload.status === 200) {
        // Update the local state and Redux store only if the request was successful
        dispatch(fetchProducts());
      } else {
        // Revert back to the original state if the request fails
        dispatch(fetchProducts());
      }
    });
  };

  // Filter products based on the active button
  const filteredProducts = activeButton === 'All' ? data : data.filter(product => product.active === (activeButton === 'Active'));

  return (
    <ContentLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Products", href: "/app/dashboard/products" }
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
          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            {/* Dashboard Metrics */}
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Published Products</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Stock</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>₹436K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Orders</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Net Profit</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>1238K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Stopped Products</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>12</span>
            </div>
          </ColumnLayout>
        </Container>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              {['All', 'Inactive', 'Active'].map((button) => (
                <button
                  key={button}
                  onClick={() => handleButtonClick(button)}
                  style={{
                    border: activeButton === button ? '2px solid black' : 'none',
                    color: activeButton === button ? 'black' : 'gray',
                    backgroundColor: 'white',
                    fontWeight: activeButton === button ? 'bolder' : 'normal',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    borderRadius: "32px"
                  }}
                >
                  {button}
                </button>
              ))}
            </span>
            <Button variant='normal'>Set Price</Button>
          </div>
          <Container variant='borderless' fitHeight={500}>
            <Table
              variant='borderless'
              columnDefinitions={[
                {
                  id: 'code',
                  header: 'Item Code',
                  cell: item => <Link to={`/app/products/${item.id}`}>{item.itemCode}</Link>,
                },
                {
                  id: 'name',
                  header: 'Name',
                  cell: item => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.images} alt={item.name} height={35} width={35} style={{ borderRadius: '8px', marginRight: '10px' }} />
                      {item.name}
                    </div>
                  ),
                },
                {
                  id: 'Category',
                  header: 'Category',
                  cell: item => item.category,
                  sortingField: "category"
                },
                {
                  id: 'allocatedStock',
                  header: 'Allocated Stock',
                  cell: item => item.stockQuantity,
                  sortingField: "allocatedStock"
                },
                {
                  id: 'stockAlert',
                  header: 'Stock Alert',
                  cell: item => <span style={getStockAlertStyle(item.stockAlert)}>{item.stockAlert}</span>,
                  sortingField: "stockAlert"
                },
                {
                  id: 'active',
                  header: 'Status',
                  cell: item => (
                    <span style={getStatusStyle(item.active)}>
                      <Toggle
                        onChange={() => handleToggleChange(item)}
                        checked={item.active}
                      >
                        {item.active ? 'Active' : 'Inactive'}
                      </Toggle>
                    </span>
                  ),
                  sortingField: "status"
                }
              ]}
              items={filteredProducts}
              selectionType="multi"
            />
          </Container>
        </div>
      </SpaceBetween>
    </ContentLayout>
  );
};

export default Products;
