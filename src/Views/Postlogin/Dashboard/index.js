import React from 'react';
import {
  Box,
  ColumnLayout,
  Grid,
  Popover,
} from '@cloudscape-design/components';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Calendar from '@cloudscape-design/components/calendar';
import RecentOrders from './DashboardCards/RecentOrders';
import ProfitPerformance from './DashboardCards/ProfitPerformance';
import SalesRevenue from './DashboardCards/SalesRevenue';
import StockMovement from './DashboardCards/StockMovement';
import ExpensesByCatgry from './DashboardCards/ExpensesByCatgry';
import SupportTickets from './DashboardCards/SupportTickets';
import CustomerFeedbackTable from './DashboardCards/CustomerFeedbackTable';

const Dashboard = () => {
  const [isPopoverVisible, setPopoverVisible] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState(getCurrentMonthYear());
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  
  function getCurrentMonthYear(date = new Date()) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`; 
  }

  const handleButtonClick = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const handleCalendarChange = ({ detail }) => {
    const selectedDate = new Date(detail.value);
    setSelectedMonth(getCurrentMonthYear(selectedDate));
    setPopoverVisible(false);
  };

  return (
    <>
      <ContentLayout
        headerVariant="high-contrast"
        header={
          <Header
            actions={
              <SpaceBetween alignItems="center" direction="horizontal" size="xs">
                <div>
                  <Popover
                    triggerType="custom"
                    content={
                      <Calendar
                        onChange={handleCalendarChange}
                        value={null} 
                        granularity="month"
                      />
                    }
                  >
                    <Button onClick={handleButtonClick} variant="primary" iconName='calendar'>
                      {selectedMonth.startsWith(month) ? 'Calendar' : selectedMonth}
                    </Button>
                  </Popover>
                </div>
              </SpaceBetween>
            }
           
            variant="h1"
          >
            Dashboard
          </Header>
          
        }
      >
        <SpaceBetween direction="vertical" size="s">
          <Container className="top-container" style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{ marginBottom: '1rem' }}>Adam's Dashboard</h2>
            </div>
            <ColumnLayout columns={4} variant="default" minColumnWidth={170}>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Total Revenue</p>
                </Box>
                <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3 }}>₹436K</span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Total Sales</p>
                </Box>
                <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3 }}>430</span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Total Orders</p>
                </Box>
                <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3 }}>123</span>
              </div>
              <div>
                <Box variant="awsui-key-label">
                  <p style={{ fontSize: 12 }}>Overall Customers</p>
                </Box>
                <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3 }}>128</span>
              </div>
            </ColumnLayout>
          </Container>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >
            <RecentOrders />
            <ProfitPerformance />
          </Grid>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >
            <SalesRevenue />
            <StockMovement />
          </Grid>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >
            <ExpensesByCatgry />
            <SupportTickets />
          </Grid>
          <CustomerFeedbackTable />
        </SpaceBetween>
      </ContentLayout>
    </>
  );
};

export default Dashboard;
