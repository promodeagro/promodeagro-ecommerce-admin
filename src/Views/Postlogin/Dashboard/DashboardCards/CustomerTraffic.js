import React, { useState } from 'react';
import {
  PieChart,
  Box,
  Container,
  Header,
  Grid,
  Button,
} from '@cloudscape-design/components';
import SelectFilter from './SelectFilter';

const data = [
  { platform: "Instagram", visitors: 100, date: new Date() },
  { platform: "Facebook", visitors: 200, date: new Date() },
  { platform: "Twitter", visitors: 150, date: new Date() },
  { platform: "Instagram", visitors: 200, date: new Date("2024-08-8") },
  { platform: "Facebook", visitors: 300, date: new Date("2024-07-31") },
  { platform: "Twitter", visitors: 180, date: new Date("2024-07-25") },
  { platform: "Website", visitors: 500, date: new Date("2024-07-10") },
  { platform: "WhatsApp", visitors: 350, date: new Date("2024-06-15") },
];

const CustomerTraffic = () => {
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredData = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return data.filter(item => item.date.toDateString() === now.toDateString());
      case '7 days ago':
        return data.filter(item => item.date >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return data.filter(item => item.date >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return data.filter(item => item.date >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return data;
    }
  };

  const filteredData = getFilteredData();
  const totalVisitors = filteredData.reduce((sum, item) => sum + item.visitors, 0);

  return (
    <Container  
    header={
      <Grid
      gridDefinition={[
        { colspan: { default: 8, xxs: 8 } },
        { colspan: { default: 4, xxs: 4 } }
      ]}
    >
        <Header variant='h4'>Customer Traffic</Header>
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
    }>
      
      <PieChart
        data={filteredData.map(item => ({
          title: item.platform,
          value: item.visitors,
        }))}
        detailPopoverContent={(datum) => [
          { key: "Platform", value: datum.title },
          { key: "Percentage", value: `${((datum.value / totalVisitors) * 100).toFixed(0)}%` }
        ]}
        segmentDescription={(datum) =>
          `${((datum.value / totalVisitors) * 100).toFixed(0)}%`
        }
        hideLegend
        hideFilter
        ariaDescription="Pie chart showing the percentage of customer traffic from various platforms."
        ariaLabel="Pie chart"
        height={300}
        empty={
          <Box textAlign="center" color="inherit">
            <b>No data available</b>
            <Box variant="p" color="inherit">
              There is no data available
            </Box>
          </Box>
        }
        noMatch={
          <Box textAlign="center" color="inherit">
            <b>No matching data</b>
            <Box variant="p" color="inherit">
              There is no matching data to display
            </Box>
            <Button>Clear filter</Button>
          </Box>
        }
      />
    </Container>
  );
};

export default CustomerTraffic;
