import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonDropdown,
  ColumnLayout,
  Container,
  Header,
  SpaceBetween,
  ContentLayout,
  Table
} from '@cloudscape-design/components';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchProducts } from 'Redux-Store/Products/ProductThunk';





const Products = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products.products);
  console.log(prod,"proddd");
  const [activeButton, setActiveButton] = useState('All');
  const [products, setProducts] = useState(prod.data?.products || []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(prod.data?.products || []);
  }, [prod]);
  console.log(prod,"proo");

  const buttons = ['All', 'Draft', 'Stopped', 'Published'];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };


  const getStatusStyle = (status) => {
    switch (status) {
      case 'Draft':
        return { backgroundColor: 'gray', color: 'white', padding: '2px 5px', borderRadius: '4px' };
      case 'Published':
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

  const filteredProducts = activeButton === 'All' ? products : products.filter(product => product.status === activeButton);

  return (
    <ContentLayout
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
        <Container className="top-container" style={{ marginBottom: '1rem' }}>
          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            <div>

              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Published Products</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>₹436K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Stock</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>430</span>
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
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>128</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Stopped Products</p>
              </Box>

              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>128</span>
            </div>
          </ColumnLayout>
        </Container>

        <div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {buttons.map((button) => (
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
          </div>
          <Table
            variant='borderless'
            columnDefinitions={[
              {
                id: 'code',
                header: 'Item Code',
                cell: item => <Link to={`/app/products/${item.code}`}>{item.code}</Link>,
              },
              {
                id: 'name',
                header: 'Product Name',
                cell: item => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item.imageUrl} alt={item.name} height={35} width={35} style={{ borderRadius: '8px', marginRight: '10px' }} />
                    {item.name}
                  </div>
                ),
              },
              {
                id: 'status',
                header: 'Status',
                cell: item => <span style={getStatusStyle(item.status)}>{item.status}</span>,
                sortingField: "status"
              },
              {
                id: 'category',
                header: 'Category',
                cell: item => item.category,
                sortingField: "category"
              },
              {
                id: 'allocatedStock',
                header: 'Allocated Stock',
                cell: item => item.allocatedStock,
                sortingField: "allocatedStock"
              },
              {
                id: 'stockAlert',
                header: 'Stock Alert',
                cell: item => <span style={getStockAlertStyle(item.stockAlert)}>{item.stockAlert}</span>,
                sortingField: "stockAlert"
              },
              {
                id: 'purchasingPrice',
                header: 'Purchasing Price',
                cell: item => item.purchasingPrice,
                sortingField: "purchasingPrice"
              },
              {
                id: 'msp',
                header: 'MSP',
                cell: item => item.msp,
                sortingField: "msp"
              },
              {
                id: 'actions',
                header: 'Actions',
                cell: item => (
                  <ButtonDropdown
                    expandToViewport
                    items={[
                      { id: "start", text: "Start" },
                      { id: "stop", text: "Stop", disabled: true },
                      { id: "hibernate", text: "Hibernate", disabled: true },
                      { id: "reboot", text: "Reboot", disabled: true },
                      { id: "terminate", text: "Terminate" }
                    ]}
                    ariaLabel="Control instance"
                    variant="icon"
                  />
                ),
              },
            ]}
            items={filteredProducts}
            selectionType="multi"
          />
        </div>
      </SpaceBetween>
    </ContentLayout>
  );
}

export default Products;
