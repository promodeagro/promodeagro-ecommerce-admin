import React, { useState } from 'react';
import {
  LineChart,
  Box,
  Container,
  Header,
  Grid
} from '@cloudscape-design/components';
import SelectFilter from './SelectFilter'; // Import the reusable SelectFilter component

const SalesReports = () => {
  // Sample data with time-based entries
  const salesData = {
    'Today': [
      { x: new Date().setHours(8, 0, 0, 0), y: 5000 },
      { x: new Date().setHours(9, 0, 0, 0), y: 4000 },
      { x: new Date().setHours(10, 0, 0, 0), y: 9000 },
      { x: new Date().setHours(11, 0, 0, 0), y: 6000 },
      { x: new Date().setHours(12, 0, 0, 0), y: 7000 },
    ],
    '7 days ago': [
      { x: new Date().setDate(new Date().getDate() - 6), y: 20000 },
      { x: new Date().setDate(new Date().getDate() - 5), y: 22000 },
      { x: new Date().setDate(new Date().getDate() - 4), y: 21000 },
      { x: new Date().setDate(new Date().getDate() - 3), y: 25000 },
      { x: new Date().setDate(new Date().getDate() - 2), y: 27000 },
    ],
    '30 days ago': [
      { x: new Date().setDate(new Date().getDate() - 29), y: 50000 },
      { x: new Date().setDate(new Date().getDate() - 28), y: 55000 },
      { x: new Date().setDate(new Date().getDate() - 27), y: 52000 },
      { x: new Date().setDate(new Date().getDate() - 26), y: 58000 },
      { x: new Date().setDate(new Date().getDate() - 25), y: 60000 },
    ],
    '6 months ago': [
      { x: new Date().setMonth(new Date().getMonth() - 5), y: 150000 },
      { x: new Date().setMonth(new Date().getMonth() - 4), y: 170000 },
      { x: new Date().setMonth(new Date().getMonth() - 3), y: 160000 },
      { x: new Date().setMonth(new Date().getMonth() - 2), y: 180000 },
      { x: new Date().setMonth(new Date().getMonth() - 1), y: 190000 },
    ],
  };

  const [filter, setFilter] = useState('Today');

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const filteredData = salesData[filter] || salesData['Today'];

  const xTickFormatter = (x) => {
    const date = new Date(x);
    if (filter === 'Today') {
      return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    } else {
      return date.toLocaleDateString('en-US');
    }
  };

  return (
    <Container 
    header={
      <Grid
      gridDefinition={[
        { colspan: { default: 8, xxs: 8 } },
        { colspan: { default: 4, xxs: 4 } }
      ]}
    >
        <Header variant='h4'>Sales Report</Header>
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
    >
      <LineChart
        series={[
          {
            title: 'Sales Data',
            type: 'line',
            data: filteredData,
            valueFormatter: (y) => `₹${y.toLocaleString()}`,
          },
        ]}
        xDomain={[Math.min(...filteredData.map(d => d.x)), Math.max(...filteredData.map(d => d.x))]}
        yDomain={[0, Math.max(...filteredData.map(d => d.y)) + 5000]}
        i18nStrings={{
          xTickFormatter,
          yTickFormatter: (y) => `₹${y.toLocaleString()}`,
        }}
        ariaLabel="Sales Line Chart"
        height={300}
        hideFilter
        hideLegend
      />
    </Container>
  );
};

export default SalesReports;
