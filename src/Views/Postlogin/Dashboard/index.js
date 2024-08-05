// import React, { Component } from 'react';
// import {
//   AppLayout,
//   BreadcrumbGroup,
//   Container,
//   ContentLayout,
//   Flashbar,
//   Header,
//   HelpPanel,
//   Link,
//   SideNavigation,
//   SplitPanel,
// } from '@cloudscape-design/components';
// import { I18nProvider } from '@cloudscape-design/components/i18n';
// import messages from '@cloudscape-design/components/i18n/messages/all.en';
// import PieChart from "@cloudscape-design/components/pie-chart";
// import AreaChart from "@cloudscape-design/components/area-chart";
// import BarChart from "@cloudscape-design/components/bar-chart";
// import Table from "@cloudscape-design/components/table";
// import Button from "@cloudscape-design/components/button";
// import Box from "@cloudscape-design/components/box";
// import MixedLineBarChart from "@cloudscape-design/components/mixed-line-bar-chart";
// // import Container from "@cloudscape-design/components/container";
// // import Header from "@cloudscape-design/components/header";
// import SpaceBetween from "@cloudscape-design/components/space-between";
// // import Link from "@cloudscape-design/components/link";
// import Alert from "@cloudscape-design/components/alert";

// const LOCALE = 'en';

// const navItems = [
//   { text: 'Home', href: '#' },
//   { text: 'Service', href: '#' },
// ];

// const barData = {
//   labels: ['January', 'February', 'March', 'April', 'May'],
//   datasets: [
//     {
//       label: 'Sales',
//       data: [300, 500, 100, 400, 600],
//       backgroundColor: 'rgba(75, 192, 192, 0.6)',
//     },
//   ],
// };

// const tableData = [
//   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
//   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
//   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
// ];

// const columnDefinitions = [
//   { id: 'name', header: 'Name', cell: item => item.name },
//   { id: 'email', header: 'Email', cell: item => item.email },
//   { id: 'role', header: 'Role', cell: item => item.role },
// ];

// class UserDashboard extends Component {
//   render() {
//     return (
//       <I18nProvider locale={LOCALE} messages={[messages]}>
//         <AppLayout
//           breadcrumbs={
//             <BreadcrumbGroup
//               items={[
//                 { text: 'Home', href: '#' },
//                 { text: 'Service', href: '#' },
//               ]}
//             />
//           }
//           navigationOpen={true}
//           navigation={
//             <div style={{ width: '200px' }} >
//             <SideNavigation
//             // Adjust the width as per your requirement
//             header={{
//               href: '#',
//               text: 'Service name',
//             }}
//             items={[
//               { type: 'link', text: `Page #1`, href: `#` },
//               { type: 'link', text: `Page #2`, href: `#` },
//               { type: 'link', text: `Page #3`, href: `#` },
//               { type: 'link', text: `Page #4`, href: `#` },
//               { type: 'link', text: `Page #5`, href: `#` }
//             ]}
//           />
//           </div>
          
//           }
//           notifications={
//             <Flashbar
//               items={[
//                 {
//                   type: 'info',
//                   dismissible: true,
//                   content: 'This is an info flash message.',
//                   id: 'message_1',
//                 },
//               ]}
//             />
//           }
//           tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
//           content={
//             <ContentLayout
//               header={
//                 <Header variant="h1" info={<Link variant="info">Info</Link>}>
//                   Page header
//                 </Header>
//               }
//             >
//               <Container
//                 header={
//                   <Header variant="h2" description="Container description">
//                     Container header
//                   </Header>
//                 }
//               >
//                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '10px' }}>
     
//                 <Table style={{ height: '200px'}}
//                     columnDefinitions={columnDefinitions}
//                     items={tableData}
//                     header={<Header variant="h2">User Table</Header>}
//                     trackBy="id"
//                   />
//                      <ContentLayout
//       defaultPadding
//       header={
//         <SpaceBetween size="m">
//           <Header
//             variant="h1"
//             info={<Link variant="info">Info</Link>}
//             description="This is a generic description used in the header."
//           >
//             Header
//           </Header>

//           <Alert statusIconAriaLabel="Info">
//             This is a generic alert.
//           </Alert>
//         </SpaceBetween>
//       }
//     >
//       <Container
//         header={
//           <Header
//             variant="h2"
//             description="Container description"
//           >
//             Container header
//           </Header>
//         }
//       >
//         Container content
//       </Container>
//     </ContentLayout>
//     <div style={{ border: '1px solid black', padding: '10px' , margin:'10px', borderRadius:'5px' }}>
 

//                   <MixedLineBarChart
//       series={[
//         {
//           title: "Costs",
//           type: "bar",
//           data: [
//             { x: "Jun 2019", y: 6562 },
//             { x: "Jul 2019", y: 8768 },
//             { x: "Aug 2019", y: 9742 },
//             { x: "Sep 2019", y: 10464 },
//             { x: "Oct 2019", y: 16777 },
//             { x: "Nov 2019", y: 9956 },
//             { x: "Dec 2019", y: 5876 }
//           ],
//           valueFormatter: e =>
//             "$" +
//             e.toLocaleString("en-US", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             })
//         },
//         {
//           title: "Costs last year",
//           type: "line",
//           data: [
//             { x: "Jun 2019", y: 5373 },
//             { x: "Jul 2019", y: 7563 },
//             { x: "Aug 2019", y: 7900 },
//             { x: "Sep 2019", y: 12342 },
//             { x: "Oct 2019", y: 14311 },
//             { x: "Nov 2019", y: 11830 },
//             { x: "Dec 2019", y: 8505 }
//           ],
//           valueFormatter: e =>
//             "$" +
//             e.toLocaleString("en-US", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             })
//         },
//         {
//           title: "Budget",
//           type: "threshold",
//           y: 12000,
//           valueFormatter: e =>
//             "$" +
//             e.toLocaleString("en-US", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             })
//         },
//         {
//           title: "Peak cost",
//           type: "threshold",
//           x: "Sep 2019"
//         }
//       ]}
//       xDomain={[
//         "Jun 2019",
//         "Jul 2019",
//         "Aug 2019",
//         "Sep 2019",
//         "Oct 2019",
//         "Nov 2019",
//         "Dec 2019"
//       ]}
//       yDomain={[0, 20000]}
//       i18nStrings={{
//         yTickFormatter: function numberFormatter(e) {
//           return Math.abs(e) >= 1e9
//             ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
//                 "G"
//             : Math.abs(e) >= 1e6
//             ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
//               "M"
//             : Math.abs(e) >= 1e3
//             ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
//               "K"
//             : e.toFixed(2);
//         }
//       }}
//       detailPopoverSeriesContent={({ series, x, y }) => ({
//         key: series.title,
//         // value: (
//         //   // <Link
//         //   //   external="true"
//         //   //   href="#"
//         //   //   ariaLabel={`See details for ${moneyFormatter(
//         //   //     y
//         //   //   )} on ${series.title} (opens in a new tab)`}
//         //   // >
//         //   //   {moneyFormatter(y)}
//         //   // </Link>
//         // )
//       })}
//       ariaLabel="Mixed bar chart"
//       height={300}
//       xScaleType="categorical"
//       xTitle="Budget month"
//       yTitle="Costs (USD)"
//       empty={
//         <Box textAlign="center" color="inherit">
//           <b>No data available</b>
//           <Box variant="p" color="inherit">
//             There is no data available
//           </Box>
//         </Box>
//       }
//       noMatch={
//         <Box textAlign="center" color="inherit">
//           <b>No matching data</b>
//           <Box variant="p" color="inherit">
//             There is no matching data to display
//           </Box>
//           <Button>Clear filter</Button>
//         </Box>
//       }
//     />
   
// </div>

// <div style={{ border: '1px solid gray', padding: '10px', margin:'10px', borderRadius:'5px' }}>

//                 <AreaChart
//       series={[
//         {
//           title: "Network 1",
//           type: "area",
//           data: [
//             { x: new Date(1600972200000), y: 114489 },
//             { x: new Date(1600973100000), y: 136935 },
//             { x: new Date(1600974000000), y: 141026 },
//             { x: new Date(1600974900000), y: 123288 },
//             { x: new Date(1600975800000), y: 121956 },
//             { x: new Date(1600976700000), y: 119868 },
//             { x: new Date(1600977600000), y: 132326 },
//             { x: new Date(1600978500000), y: 126879 },
//             { x: new Date(1600979400000), y: 138543 },
//             { x: new Date(1600980300000), y: 144309 },
//             { x: new Date(1600981200000), y: 121118 },
//             { x: new Date(1600982100000), y: 113430 },
//             { x: new Date(1600983000000), y: 135911 },
//             { x: new Date(1600983900000), y: 113126 },
//             { x: new Date(1600984800000), y: 119538 },
//             { x: new Date(1600985700000), y: 124338 },
//             { x: new Date(1600986600000), y: 133884 },
//             { x: new Date(1600987500000), y: 135473 },
//             { x: new Date(1600988400000), y: 131187 },
//             { x: new Date(1600989300000), y: 136176 },
//             { x: new Date(1600990200000), y: 144422 },
//             { x: new Date(1600991100000), y: 115392 },
//             { x: new Date(1600992000000), y: 139307 },
//             { x: new Date(1600992900000), y: 128517 },
//             { x: new Date(1600993800000), y: 107160 },
//             { x: new Date(1600994700000), y: 110283 },
//             { x: new Date(1600995600000), y: 134513 },
//             { x: new Date(1600996500000), y: 111311 },
//             { x: new Date(1600997400000), y: 142686 },
//             { x: new Date(1600998300000), y: 130652 },
//             { x: new Date(1600999200000), y: 149418 },
//             { x: new Date(1601000100000), y: 121923 }
//           ],
//           valueFormatter: function numberFormatter(e) {
//             return Math.abs(e) >= 1e9
//               ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
//                   "G"
//               : Math.abs(e) >= 1e6
//               ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
//                 "M"
//               : Math.abs(e) >= 1e3
//               ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
//                 "K"
//               : e.toFixed(2);
//           }
//         },
//         {
//           title: "Network 2",
//           type: "area",
//           data: [
//             { x: new Date(1600972200000), y: 10413 },
//             { x: new Date(1600973100000), y: 26582 },
//             { x: new Date(1600974000000), y: 45593 },
//             { x: new Date(1600974900000), y: 65918 },
//             { x: new Date(1600975800000), y: 76223 },
//             { x: new Date(1600976700000), y: 62385 },
//             { x: new Date(1600977600000), y: 83330 },
//             { x: new Date(1600978500000), y: 127209 },
//             { x: new Date(1600979400000), y: 104802 },
//             { x: new Date(1600980300000), y: 145899 },
//             { x: new Date(1600981200000), y: 121375 },
//             { x: new Date(1600982100000), y: 112968 },
//             { x: new Date(1600983000000), y: 145263 },
//             { x: new Date(1600983900000), y: 139562 },
//             { x: new Date(1600984800000), y: 128343 },
//             { x: new Date(1600985700000), y: 122774 },
//             { x: new Date(1600986600000), y: 145396 },
//             { x: new Date(1600987500000), y: 176509 },
//             { x: new Date(1600988400000), y: 201006 },
//             { x: new Date(1600989300000), y: 196538 },
//             { x: new Date(1600990200000), y: 213773 },
//             { x: new Date(1600991100000), y: 205076 },
//             { x: new Date(1600992000000), y: 216369 },
//             { x: new Date(1600992900000), y: 159386 },
//             { x: new Date(1600993800000), y: 238852 },
//             { x: new Date(1600994700000), y: 207500 },
//             { x: new Date(1600995600000), y: 187110 },
//             { x: new Date(1600996500000), y: 314165 },
//             { x: new Date(1600997400000), y: 165653 },
//             { x: new Date(1600998300000), y: 175584 },
//             { x: new Date(1600999200000), y: 230042 },
//             { x: new Date(1601000100000), y: 293879 }
//           ],
//           valueFormatter: function numberFormatter(e) {
//             return Math.abs(e) >= 1e9
//               ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
//                   "G"
//               : Math.abs(e) >= 1e6
//               ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
//                 "M"
//               : Math.abs(e) >= 1e3
//               ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
//                 "K"
//               : e.toFixed(2);
//           }
//         }
//       ]}
//       xDomain={[
//         new Date(1600972200000),
//         new Date(1601000100000)
//       ]}
//       yDomain={[0, 500000]}
//       i18nStrings={{
//         xTickFormatter: e =>
//           e
//             .toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//               hour: "numeric",
//               minute: "numeric",
//               hour12: !1
//             })
//             .split(",")
//             .join("\n"),
//         yTickFormatter: function numberFormatter(e) {
//           return Math.abs(e) >= 1e9
//             ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
//                 "G"
//             : Math.abs(e) >= 1e6
//             ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
//               "M"
//             : Math.abs(e) >= 1e3
//             ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
//               "K"
//             : e.toFixed(2);
//         }
//       }}
//       ariaLabel="Stacked area chart"
//       height={300}
//       hideFilter
//       xScaleType="time"
//       xTitle="Time (UTC)"
//       yTitle="Bytes transferred"
//       empty={
//         <Box textAlign="center" color="inherit">
//           <b>No data available</b>
//           <Box variant="p" color="inherit">
//             There is no data available
//           </Box>
//         </Box>
//       }
//       noMatch={
//         <Box textAlign="center" color="inherit">
//           <b>No matching data</b>
//           <Box variant="p" color="inherit">
//             There is no matching data to display
//           </Box>
//           <Button>Clear filter</Button>
//         </Box>
//       }
//     />
//     </div>
//                   {/* Bar Chart */}
//                   <BarChart
//       series={[
//         {
//           title: "Site 1",
//           type: "bar",
//           data: [
//             { x: new Date(1601058600000), y: 34503 },
//             { x: new Date(1601065800000), y: 25832 },
//             { x: new Date(1601073000000), y: 4012 },
//             { x: new Date(1601080200000), y: -5602 },
//             { x: new Date(1601087400000), y: 17839 }
//           ],
//           valueFormatter: e =>
//             "$" +
//             e.toLocaleString("en-US", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             })
//         },
//         {
//           title: "Average revenue",
//           type: "threshold",
//           y: 19104,
//           valueFormatter: e =>
//             "$" +
//             e.toLocaleString("en-US", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2
//             })
//         }
//       ]}
//       xDomain={[
//         new Date(1601058600000),
//         new Date(1601065800000),
//         new Date(1601073000000),
//         new Date(1601080200000),
//         new Date(1601087400000)
//       ]}
//       yDomain={[-10000, 40000]}
//       i18nStrings={{
//         xTickFormatter: e =>
//           e
//             .toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//               hour: "numeric",
//               minute: "numeric",
//               hour12: !1
//             })
//             .split(",")
//             .join("\n"),
//         yTickFormatter: function numberFormatter(e) {
//           return Math.abs(e) >= 1e9
//             ? (e / 1e9).toFixed(1).replace(/\.0$/, "") +
//                 "G"
//             : Math.abs(e) >= 1e6
//             ? (e / 1e6).toFixed(1).replace(/\.0$/, "") +
//               "M"
//             : Math.abs(e) >= 1e3
//             ? (e / 1e3).toFixed(1).replace(/\.0$/, "") +
//               "K"
//             : e.toFixed(2);
//         }
//       }}
//       ariaLabel="Single data series line chart"
//       height={300}
//       xTitle="Time (UTC)"
//       yTitle="Revenue (USD)"
//       empty={
//         <Box textAlign="center" color="inherit">
//           <b>No data available</b>
//           <Box variant="p" color="inherit">
//             There is no data available
//           </Box>
//         </Box>
//       }
//       noMatch={
//         <Box textAlign="center" color="inherit">
//           <b>No matching data</b>
//           <Box variant="p" color="inherit">
//             There is no matching data to display
//           </Box>
//           <Button>Clear filter</Button>
//         </Box>
//       }
//     />

//                   {/* Table */}
                 
//        <PieChart
//       data={[
//         {
//           title: "Running",
//           value: 60,
//           lastUpdate: "Dec 7, 2020"
//         },
//         {
//           title: "Failed",
//           value: 30,
//           lastUpdate: "Dec 6, 2020"
//         },
//         {
//           title: "In-progress",
//           value: 10,
//           lastUpdate: "Dec 6, 2020"
//         },
//         {
//           title: "Pending",
//           value: 0,
//           lastUpdate: "Dec 7, 2020"
//         }
//       ]}
//       detailPopoverContent={(datum, sum) => [
//         { key: "Resource count", value: datum.value },
//         {
//           key: "Percentage",
//           value: `${((datum.value / sum) * 100).toFixed(
//             0
//           )}%`
//         },
//         { key: "Last update on", value: datum.lastUpdate }
//       ]}
//       segmentDescription={(datum, sum) =>
//         `${datum.value} units, ${(
//           (datum.value / sum) *
//           100
//         ).toFixed(0)}%`
//       }
//       ariaDescription="Pie chart showing how many resources are currently in which state."
//       ariaLabel="Pie chart"
//       empty={
//         <Box textAlign="center" color="inherit">
//           <b>No data available</b>
//           <Box variant="p" color="inherit">
//             There is no data available
//           </Box>
//         </Box>
//       }
//       noMatch={
//         <Box textAlign="center" color="inherit">
//           <b>No matching data</b>
//           <Box variant="p" color="inherit">
//             There is no matching data to display
//           </Box>
//           <Button>Clear filter</Button>
//         </Box>
//       }
//     />

//                 </div>
//               </Container>
//             </ContentLayout>
//           }
//           splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
//         />
//       </I18nProvider>
//     );
//   }
// }

// export default UserDashboard;

import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div className="main-container">
        
      </div>
    )
  }
}
export default Dashboard;
