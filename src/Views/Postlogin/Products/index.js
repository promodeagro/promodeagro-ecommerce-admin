import React, { useState } from 'react';
import {
  Box,
  ButtonDropdown,
  ColumnLayout,

} from '@cloudscape-design/components';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import ContentLayout from '@cloudscape-design/components/content-layout';

import { Table } from '@cloudscape-design/components';
import { Link } from 'react-router-dom';
import product from "../../../assets/img/tomato.png"


const Products = () => {
  const [activeButton, setActiveButton] = useState('All');

  const buttons = ['All', 'Draft', 'Stopped', 'Published'];

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const products = [
    { id: 1, code: 'V001', name: 'Tomato', imageUrl: product, status: 'Draft', category: 'Vegetable', allocatedStock: 100, stockAlert: 'Available', purchasingPrice: '$1', msp: '$1.2' },
    { id: 2, code: 'V002', name: 'Potato', imageUrl: 'https://via.placeholder.com/50', status: 'Published', category: 'Vegetable', allocatedStock: 50, stockAlert: 'Low', purchasingPrice: '$0.5', msp: '$0.7' },
    { id: 3, code: 'V003', name: 'Carrot', imageUrl: 'https://via.placeholder.com/50', status: 'Stopped', category: 'Vegetable', allocatedStock: 75, stockAlert: 'Available', purchasingPrice: '$0.8', msp: '$1.0' },
    { id: 4, code: 'V004', name: 'Onion', imageUrl: 'https://via.placeholder.com/50', status: 'Draft', category: 'Vegetable', allocatedStock: 200, stockAlert: 'Low', purchasingPrice: '$0.3', msp: '$0.5' },
    { id: 5, code: 'V005', name: 'Pepper', imageUrl: 'https://via.placeholder.com/50', status: 'Published', category: 'Vegetable', allocatedStock: 150, stockAlert: 'Available', purchasingPrice: '$1.2', msp: '$1.5' },
    { id: 6, code: 'V006', name: 'Cabbage', imageUrl: 'https://via.placeholder.com/50', status: 'Stopped', category: 'Vegetable', allocatedStock: 120, stockAlert: 'Low', purchasingPrice: '$0.6', msp: '$0.9' },
    { id: 7, code: 'V007', name: 'Broccoli', imageUrl: 'https://via.placeholder.com/50', status: 'Draft', category: 'Vegetable', allocatedStock: 80, stockAlert: 'Available', purchasingPrice: '$1.3', msp: '$1.6' },
    { id: 8, code: 'V008', name: 'Spinach', imageUrl: 'https://via.placeholder.com/50', status: 'Published', category: 'Vegetable', allocatedStock: 90, stockAlert: 'Low', purchasingPrice: '$0.9', msp: '$1.1' },
    { id: 9, code: 'V009', name: 'Lettuce', imageUrl: 'https://via.placeholder.com/50', status: 'Stopped', category: 'Vegetable', allocatedStock: 110, stockAlert: 'Available', purchasingPrice: '$0.7', msp: '$1.0' },
    { id: 10, code: 'V010', name: 'Zucchini', imageUrl: 'https://via.placeholder.com/50', status: 'Draft', category: 'Vegetable', allocatedStock: 140, stockAlert: 'Low', purchasingPrice: '$1.1', msp: '$1.4' },
    { id: 11, code: 'V011', name: 'Eggplant', imageUrl: 'https://via.placeholder.com/50', status: 'Published', category: 'Vegetable', allocatedStock: 60, stockAlert: 'Available', purchasingPrice: '$1.4', msp: '$1.7' },
    { id: 12, code: 'V012', name: 'Cucumber', imageUrl: 'https://via.placeholder.com/50', status: 'Stopped', category: 'Vegetable', allocatedStock: 100, stockAlert: 'Low', purchasingPrice: '$0.8', msp: '$1.1' },
    { id: 13, code: 'V013', name: 'Garlic', imageUrl: 'https://via.placeholder.com/50', status: 'Draft', category: 'Vegetable', allocatedStock: 70, stockAlert: 'Available', purchasingPrice: '$1.5', msp: '$1.8' },
    { id: 14, code: 'V014', name: 'Ginger', imageUrl: 'https://via.placeholder.com/50', status: 'Published', category: 'Vegetable', allocatedStock: 130, stockAlert: 'Low', purchasingPrice: '$2.0', msp: '$2.3' },
    { id: 15, code: 'V015', name: 'Beetroot', imageUrl: 'https://via.placeholder.com/50', status: 'Stopped', category: 'Vegetable', allocatedStock: 40, stockAlert: 'Available', purchasingPrice: '$0.4', msp: '$0.6' },
  ];

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
    <>
      <ContentLayout
        headerVariant="high-contrast"
        header={
          <Header
            actions={
              <SpaceBetween alignItems="center" direction="horizontal" size="xs">
              
                    <Button variant="normal">
                     Export
                    </Button>
                  
                
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <h2 style={{ marginBottom: '1rem' }}>Products</h2> */}
          </div>

          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Total Published Products</p></Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3,color:"#0972D3" }}>₹436K</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Total Stock</p></Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3,color:"#0972D3" }}>430</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Total Orders</p></Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3,color:"#0972D3" }}>123</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Net Profit</p></Box>
            <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3,color:"#0972D3" }}>128</span>
            </div>
            <div>
            <Box variant="awsui-key-label"><p style={{ fontSize: 12}}>Stopped Product </p></Box>
            <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3,color:"#0972D3" }}>128</span>
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
              backgroundColor: activeButton === button ? 'white' : 'white',
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
            cell: item => <Link to={`/products/${item.code}`}>{item.code}</Link>,
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
            cell: item => <ButtonDropdown
            expandToViewport
            items={[
              { id: "start", text: "Start" },
              { id: "stop", text: "Stop", disabled: true },
              {
                id: "hibernate",
                text: "Hibernate",
                disabled: true
              },
              { id: "reboot", text: "Reboot", disabled: true },
              { id: "terminate", text: "Terminate" }
            ]}
            ariaLabel="Control instance"
            variant="icon"
          />,
        
          },
        ]}
        items={filteredProducts}
        selectionType="multi"
      />
    </div>

    

    
    </SpaceBetween>
     </ContentLayout>
  
  </>

  )
}

export default Products