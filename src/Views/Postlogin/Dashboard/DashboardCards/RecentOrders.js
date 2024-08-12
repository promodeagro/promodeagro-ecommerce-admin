import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from 'Redux-Store/Orders/OrdersThunk';
import {
  Table,
  Box,
  SpaceBetween,
  Button,
  Header,
  Grid,
  Container,
} from '@cloudscape-design/components';
import SelectFilter from './SelectFilter'; // Import the reusable SelectFilter component
import { Link } from 'react-router-dom';
const RecentOrders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const { data = [], status } = ordersData;
  const [selectedItems, setSelectedItems] = useState([]);
  const [filter, setFilter] = useState('7 days ago');

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredOrders = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return data.filter(order => new Date(order.createdAt).toDateString() === now.toDateString());
      case '7 days ago':
        return data.filter(order => new Date(order.createdAt) >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return data.filter(order => new Date(order.createdAt) >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return data.filter(order => new Date(order.createdAt) >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return data;
    }
  };

  const filteredOrders = getFilteredOrders().slice(0, 7); // Get only top 10 orders

  if (status === 'IN_PROGRESS') {
    return <div>Loading...</div>;
  }

  if (status === 'FAILURE') {
    return <div>Error loading orders.</div>;
  }

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
            <Header variant='h4'>Recent Orders</Header>
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
          `Displaying items ${firstIndex + 1} to ${lastIndex + 1} of ${totalItemsCount}`
        }
        onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
        selectedItems={selectedItems}
        ariaLabels={{
          selectionGroupLabel: 'Items selection',
          allItemsSelectionLabel: ({ selectedItems }) =>
            `${selectedItems.length} ${selectedItems.length === 1 ? 'item' : 'items'} selected`,
          itemSelectionLabel: ({ selectedItems }, item) => item.name,
        }}
        items={filteredOrders}
        columnDefinitions={[
          {
            id: 'id',
            header: 'Order ID',
            cell: item =>
              item.id ? (
                <Link to={`/app/order/orderdetail`}>#{item.id}</Link>
              ) : (
                'N/A'
              ),
          },
          {
            id: 'customerName',
            header: 'Customer Name',
            cell: item => item.address?.name?.S || 'N/A',
          },
          {
            id: 'status',
            header: 'Order Status',
            cell: item => item.status || 'N/A',
          },
          {
            id: 'totalPrice',
            header: 'Total Amount',
            cell: item => (item.totalPrice ? `Rs. ${item.totalPrice}` : 'N/A'),
          },
          {
            id: 'address',
            header: 'Delivery Details',
            cell: item => item.address?.address?.S || 'N/A',
          },
        ]}
        enableKeyboardNavigation
        loadingText="Loading orders"
        trackBy="id"
        empty={
          <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
            <SpaceBetween size="m">
              <b>No orders found</b>
              <Button>Add order</Button>
            </SpaceBetween>
          </Box>
        }
      />
    </Container>
  );
};

export default RecentOrders;
