import React from 'react';
import LineChart from "@cloudscape-design/components/line-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import { BarChart, Container, Header, Link } from '@cloudscape-design/components';

const ExpensesByCatgry = () => {
  return (
    <Container 

      header={
        <Header variant='h5' className='font-extrabold'>Expenses By Category</Header>
      }>
        
        <BarChart
      series={[
        {
          title: "Site 1",
          type: "bar",
          data: [
            { x: new Date(1601058600000), y: 34503 },
            { x: new Date(1601065800000), y: 25832 },
            { x: new Date(1601073000000), y: 4012 },
            { x: new Date(1601080200000), y: -5602 },
            { x: new Date(1601087400000), y: 17839 }
          ],
          valueFormatter: e =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        },
        {
          title: "Average revenue",
          type: "threshold",
          y: 19104,
          valueFormatter: e =>
            "$" +
            e.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        }
      ]}
      xDomain={[
        new Date(1601058600000),
        new Date(1601065800000),
        new Date(1601073000000),
        new Date(1601080200000),
        new Date(1601087400000)
      ]}
      yDomain={[-10000, 40000]}
      i18nStrings={{
        xTickFormatter: e =>
          e
            .toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: !1
            })
            .split(",")
            .join("\n"),
        yTickFormatter: function o(e) {
          return Math.abs(e) >= 1e9
            ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
                "G"
            : Math.abs(e) >= 1e6
            ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
              "M"
            : Math.abs(e) >= 1e3
            ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
              "K"
            : e.toFixed(2);
        }
      }}
      ariaLabel="Single data series line chart"
      height={300}
      hideFilter
      hideLegend
      stackedBars
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

export default ExpensesByCatgry