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

import ExpensesByCatgry from './DashboardCards/Expenses';
import SalesReports from './DashboardCards/SalesReport';
import CustomerTraffic from './DashboardCards/CustomerTraffic';
import BestSellingProducts from './DashboardCards/BestSellingProducts';
import Refundorders from './DashboardCards/Refundorders';

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
        <SpaceBetween direction="vertical" size="l">
        <Container className="top-container" style={{ marginBottom: '1rem' }}>
          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            <div>

              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Today's Sales</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>55</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Today's Procurement</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>32.4K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Today's Orders</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Orders Cancelled</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>3</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Orders Refunded</p>
              </Box>

              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>4</span>
            </div>
          </ColumnLayout>
        </Container>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >
            <SalesReports/>
            {/* <RecentOrders/> */}
          </Grid>
        
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          >   
          <BestSellingProducts/>
            <CustomerTraffic/>
          </Grid>
          <Grid
            gridDefinition={[
              { colspan: { default: 12, xxs: 6 } },
              { colspan: { default: 12, xxs: 6 } },
            ]}
          > 
           <ExpensesByCatgry />
           <Refundorders/>
           </Grid>
       
        </SpaceBetween>
      </ContentLayout>
    </>
  );
};

export default Dashboard;
