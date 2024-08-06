
import React from 'react';
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import { Container, Header, PieChart } from '@cloudscape-design/components';

const SupportTicket = () => {
  return (
    <Container 
    
      header={
        <Header variant='h5' className='font-extrabold'>Support Tickets</Header>
      }
      className="shadow-md rounded-xl border-[1px] border-[#E4E4E4] h-full">
        
        <PieChart
      data={[
        {
          title: "Running",
          value: 60,
          lastUpdate: "Dec 7, 2020"
        },
        {
          title: "Failed",
          value: 30,
          lastUpdate: "Dec 6, 2020"
        },
        {
          title: "In-progress",
          value: 10,
          lastUpdate: "Dec 6, 2020"
        },
        {
          title: "Pending",
          value: 0,
          lastUpdate: "Dec 7, 2020"
        }
      ]}
      detailPopoverContent={(datum, sum) => [
        { key: "Resource count", value: datum.value },
        {
          key: "Percentage",
          value: `${((datum.value / sum) * 100).toFixed(
            0
          )}%`
        },
        { key: "Last update on", value: datum.lastUpdate }
      ]}
      segmentDescription={(datum, sum) =>
        `${datum.value} units, ${(
          (datum.value / sum) *
          100
        ).toFixed(0)}%`
      }
      ariaDescription="Pie chart showing how many resources are currently in which state."
      ariaLabel="Pie chart"
      height={300}
      hideFilter
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
  )
}

export default SupportTicket