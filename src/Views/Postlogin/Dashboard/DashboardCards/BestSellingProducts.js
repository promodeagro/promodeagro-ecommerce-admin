import React, { useState } from 'react';
import {
  Table,
  Box,
  SpaceBetween,
  Button,
  Header,
  Link,
  Grid,
  Container
} from '@cloudscape-design/components';
import SelectFilter from './SelectFilter'; // Import the reusable SelectFilter component

const BestSellingProducts = () => {
  const products = [
    { code: 'P001', name: 'Tomatoes', category: 'Vegetables', stock: 100, status: 'Published', date: new Date() },
    { code: 'P002', name: 'Potatoes', category: 'Vegetables', stock: 50, status: 'Draft', date: new Date(new Date().setDate(new Date().getDate() - 5)) },
    { code: 'P003', name: 'Carrots', category: 'Vegetables', stock: 200, status: 'Published', date: new Date(new Date().setDate(new Date().getDate() - 15)) },
    { code: 'P004', name: 'Onions', category: 'Vegetables', stock: 150, status: 'Stopped', date: new Date(new Date().setDate(new Date().getDate() - 25)) },
    { code: 'P005', name: 'Cucumbers', category: 'Vegetables', stock: 300, status: 'Published', date: new Date(new Date().setDate(new Date().getDate() - 45)) },
  ];

  const [filter, setFilter] = useState('Today');

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredProducts = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return products.filter(product => product.date.toDateString() === now.toDateString());
      case '7 days ago':
        return products.filter(product => product.date >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return products.filter(product => product.date >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return products.filter(product => product.date >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return products;
    }
  };

  return (
    
    <Container fitHeight={300}>
      <Table variant='borderless'
        header={
          <Grid
            gridDefinition={[
              { colspan: { default: 8, xxs: 8 } },
              { colspan: { default: 4, xxs: 4 } }
            ]}
          >
            <Header variant='h4'>Best Selling Products</Header>
            <Box padding={{ bottom: 'm' }}>
              <SelectFilter
                selectedFilter={filter}
                onFilterChange={handleFilterChange}
                filterOptions={[
                  { label: 'Today', value: 'Today' },
                  { label: '7 days ago', value: '7 days ago' },
                  { label: '30 days ago', value: '30 days ago' },
                  { label: '6 months ago', value: '6 months ago' },
                ]}
              />
            </Box>
          </Grid>
        }
        renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
          `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
        }
        columnDefinitions={[
          {
            id: 'code',
            header: 'Product Code',
            cell: item => <Link variant='secondary'>{item.code}</Link>,
            sortingField: 'code',
            isRowHeader: true,
          },
          {
            id: 'name',
            header: 'Product Name',
            cell: item => item.name,
            sortingField: 'name',
          },
          {
            id: 'category',
            header: 'Category',
            cell: item => item.category,
            sortingField: 'category',
          },
          {
            id: 'stock',
            header: 'Stock',
            cell: item => item.stock,
            sortingField: 'stock',
          },
          {
            id: 'status',
            header: 'Status',
            cell: item => item.status,
            sortingField: 'status',
          },
        ]}
        enableKeyboardNavigation
        items={getFilteredProducts()}
        loadingText="Loading products"
        selectedItems={[]}
        empty={
          <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No products found</b>
              <Button>Add product</Button>
            </SpaceBetween>
          </Box>
        }
      />
    </Container>
  );
};

export default BestSellingProducts;
