import React, { useState } from 'react';
import {
  Table,
  Box,
  SpaceBetween,
  Button,
  Header,
  Pagination,
  Link,
} from '@cloudscape-design/components';

const CustomerFeedbackTable = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const customers = [
    { id: 13678, date: '2023-08-01', name: 'John Doe', contact: '1234567890', email: 'john@example.com', area: 'Area 1', feedback: 'Good service' },
    { id: 276456, date: '2023-08-02', name: 'Jane Smith', contact: '2345678901', email: 'jane@example.com', area: 'Area 2', feedback: 'Very satisfied' },
    { id: 3678, date: '2023-08-03', name: 'Alice Johnson', contact: '3456789012', email: 'alice@example.com', area: 'Area 3', feedback: 'Quick delivery' },
    { id: 47857, date: '2023-08-04', name: 'Bob Brown', contact: '4567890123', email: 'bob@example.com', area: 'Area 4', feedback: 'Excellent quality' },
    { id: 57875, date: '2023-08-05', name: 'Charlie Davis', contact: '5678901234', email: 'charlie@example.com', area: 'Area 5', feedback: 'Friendly staff' },
    { id: 687685, date: '2023-08-06', name: 'Dana Lee', contact: '6789012345', email: 'dana@example.com', area: 'Area 6', feedback: 'Highly recommend' },
    { id: 77879, date: '2023-08-07', name: 'Eve Martin', contact: '7890123456', email: 'eve@example.com', area: 'Area 7', feedback: 'Will return' },
    { id: 89859, date: '2023-08-08', name: 'Frank White', contact: '8901234567', email: 'frank@example.com', area: 'Area 8', feedback: 'Very clean' },
    { id: 98544, date: '2023-08-09', name: 'Grace Hill', contact: '9012345678', email: 'grace@example.com', area: 'Area 9', feedback: 'Great experience' },
    { id: 10454, date: '2023-08-10', name: 'Hank Green', contact: '0123456789', email: 'hank@example.com', area: 'Area 10', feedback: 'Affordable prices' },
    { id: 117874, date: '2023-08-11', name: 'Ivy King', contact: '1123456789', email: 'ivy@example.com', area: 'Area 11', feedback: 'Good parking' },
    { id: 12787, date: '2023-08-12', name: 'Jackie Scott', contact: '1223456789', email: 'jackie@example.com', area: 'Area 12', feedback: 'Nice ambiance' },
    { id: 13789, date: '2023-08-13', name: 'Kyle Turner', contact: '1323456789', email: 'kyle@example.com', area: 'Area 13', feedback: 'Quick response' },
    { id: 147897, date: '2023-08-14', name: 'Laura Baker', contact: '1423456789', email: 'laura@example.com', area: 'Area 14', feedback: 'Tasty food' },
    { id: 157987, date: '2023-08-15', name: 'Mike Carter', contact: '1523456789', email: 'mike@example.com', area: 'Area 15', feedback: 'Prompt service' },
  ];

  const itemsPerPage = 10;
  const pagesCount = Math.ceil(customers.length / itemsPerPage);
  const displayedCustomers = customers.slice((currentPageIndex - 1) * itemsPerPage, currentPageIndex * itemsPerPage);

  return (
    <Table
      renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      columnDefinitions={[
        {
          id: 'id',
          header: 'Customer ID',
          cell: item => (
            <Link variant="secondary">{item.id}</Link>
          ),
          sortingField: 'id',
          isRowHeader: true,
        },
        {
          id: 'date',
          header: 'Date',
          cell: item => item.date,
          sortingField: 'date',
        },
        {
          id: 'name',
          header: 'Customer Name',
          cell: item => item.name,
          sortingField: 'name',
        },
        {
          id: 'contact',
          header: 'Contact Number',
          cell: item => item.contact,
          sortingField: 'contact',
        },
        {
          id: 'email',
          header: 'Email ID',
          cell: item => item.email,
          sortingField: 'email',
        },
        {
          id: 'area',
          header: 'Delivery Area',
          cell: item => item.area,
          sortingField: 'area',
        },
        {
          id: 'feedback',
          header: 'Feedback',
          cell: item => item.feedback,
        },
      ]}
      enableKeyboardNavigation
      items={displayedCustomers}
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
      header={
        <Header variant="h4">Customer Feedback</Header>
      }
      footer={
        <Box float="right">
          <Pagination
            currentPageIndex={currentPageIndex}
            pagesCount={pagesCount}
            onChange={({ detail }) => setCurrentPageIndex(detail.currentPageIndex)}
          />
        </Box>
      }
    />
  );
};

export default CustomerFeedbackTable;
