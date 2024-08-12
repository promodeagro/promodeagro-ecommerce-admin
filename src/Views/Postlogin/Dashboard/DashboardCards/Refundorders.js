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
import SelectFilter from './SelectFilter'; // Import the reusable component

const RefundOrders = () => {
  const customers = [
    { id: 'O001', name: 'John Doe', reason: 'Damaged Product', status: 'Refunded', area: 'Downtown', date: new Date() },
    { id: 'O002', name: 'Jane Smith', reason: 'Late Delivery', status: 'In Process', area: 'Uptown', date: new Date(new Date().setDate(new Date().getDate() - 3)) },
    { id: 'O003', name: 'Michael Johnson', reason: 'Wrong Item', status: 'Refunded', area: 'Suburbs', date: new Date(new Date().setDate(new Date().getDate() - 8)) },
    { id: 'O004', name: 'Emily Davis', reason: 'No Reason Given', status: 'Rejected', area: 'Downtown', date: new Date(new Date().setDate(new Date().getDate() - 35)) },
    { id: 'O005', name: 'Daniel Brown', reason: 'Changed Mind', status: 'Refunded', area: 'Midtown', date: new Date(new Date().setDate(new Date().getDate() - 100)) },
    { id: 'O006', name: 'Jessica Miller', reason: 'Not Satisfied', status: 'In Process', area: 'Uptown', date: new Date(new Date().setDate(new Date().getDate() - 150)) },
    { id: 'O007', name: 'David Wilson', reason: 'Item Defective', status: 'Refunded', area: 'Suburbs', date: new Date(new Date().setDate(new Date().getDate() - 200)) },
  
  ];

  const [filter, setFilter] = useState('Today');

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredCustomers = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return customers.filter(customer => customer.date.toDateString() === now.toDateString());
      case '7 days ago':
        return customers.filter(customer => customer.date >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return customers.filter(customer => customer.date >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return customers.filter(customer => customer.date >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return customers;
    }
  };

  return (
    <Container fitHeight={300}>
      <Table
      variant='borderless'
        header={
          <Grid
          gridDefinition={[
            { colspan: { default: 8, xxs: 8 } },
            { colspan: { default: 4, xxs: 4 } }
          ]}
        >
            <Header variant='h4'>Refund Orders</Header>
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
            id: 'id',
            header: 'Order ID',
            cell: item => <Link variant='secondary'>{item.id}</Link>,
            sortingField: 'id',
            isRowHeader: true,
          },
          {
            id: 'name',
            header: 'Customer Name',
            cell: item => item.name,
            sortingField: 'name',
          },
          {
            id: 'reason',
            header: 'Reason',
            cell: item => item.reason,
            sortingField: 'reason',
          },
          {
            id: 'status',
            header: 'Status',
            cell: item => item.status,
            sortingField: 'status',
          },
          {
            id: 'area',
            header: 'Delivery Area',
            cell: item => item.area,
            sortingField: 'area',
          },
        ]}
        enableKeyboardNavigation
        items={getFilteredCustomers()}
        loadingText="Loading resources"
        selectedItems={[]}
        empty={
          <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No resources</b>
              <Button>Create resource</Button>
            </SpaceBetween>
          </Box>
        }
      />
    </Container>
  );
};

export default RefundOrders;
