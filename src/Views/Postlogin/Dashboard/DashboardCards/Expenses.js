import React, { useState } from 'react';
import {
  BarChart,
  Box,
  Container,
  Header,
  Grid
} from '@cloudscape-design/components';
import SelectFilter from './SelectFilter'; // Import the reusable SelectFilter component

const Expenses = () => {
  const expenses = [
    { category: 'Procurement', amount: 1500, date: new Date() },
    { category: 'Payroll', amount: 500, date: new Date() },
    { category: 'Sales', amount: 1000, date: new Date() },
    { category: 'Payroll', amount: 3000, date: new Date(new Date().setDate(new Date().getDate() - 5)) },
    { category: 'Sales', amount: 2000, date: new Date(new Date().setDate(new Date().getDate() - 15)) },
    { category: 'Procurement', amount: 1200, date: new Date(new Date().setDate(new Date().getDate() - 25)) },
    { category: 'Payroll', amount: 3200, date: new Date(new Date().setDate(new Date().getDate() - 45)) },
  ];

  const [filter, setFilter] = useState('Today');

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredExpenses = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return expenses.filter(expense => expense.date.toDateString() === now.toDateString());
      case '7 days ago':
        return expenses.filter(expense => expense.date >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return expenses.filter(expense => expense.date >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return expenses.filter(expense => expense.date >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return expenses;
    }
  };

  const filteredExpenses = getFilteredExpenses();

  const dataSeries = filteredExpenses.reduce((acc, expense) => {
    const existingCategory = acc.find(item => item.category === expense.category);
    if (existingCategory) {
      existingCategory.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  return (
    <Container  
    header={
      <Grid
            gridDefinition={[
              { colspan: { default: 8, xxs: 8 } },
              { colspan: { default: 4, xxs: 4 } }
            ]}
          >
        <Header variant='h4'>Expenses</Header>
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


      <BarChart
        series={[
          {
            title: 'Expenses',
            type: 'bar',
            data: dataSeries.map(item => ({ x: item.category, y: item.amount })),
          },
        ]}
        xDomain={dataSeries.map(item => item.category)}
        yDomain={[0, Math.max(...dataSeries.map(item => item.amount)) + 500]}
        i18nStrings={{
          yTickFormat: value => `$${value}`,
          xTickFormat: value => `${value}`,
        }}
        ariaLabel="Expenses Bar Chart"
        height={300}
        hideFilter
        hideLegend
      />
    </Container>
  );
};

export default Expenses;
