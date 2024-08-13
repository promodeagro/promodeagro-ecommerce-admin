import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import { Container, Box } from "@cloudscape-design/components";
import Grid from "@cloudscape-design/components/grid";
import Table from "@cloudscape-design/components/table";
import Input from "@cloudscape-design/components/input";
import Textarea from "@cloudscape-design/components/textarea";

const Refund = () => {
  const [selectedItems, setSelectedItems] = React.useState([""]);
  const [value, setValue] = React.useState("₹");
  const [values, setValues] = React.useState("");

  const columnDefinitions = [
    {
      id: "item",
      header: "Item",
      cell: (item) => item.name,
      isRowHeader: true,
    },
    {
      id: "quantity",
      header: "Quantity",
      cell: (item) => item.quantity,
    },
    {
      id: "unitPerCost",
      header: "Unit Per Cost",
      cell: (item) => `₹${item.unitPerCost}`, 
    },
    {
      id: "totalCost",
      header: "Total Cost",
      cell: (item) => `₹${item.totalCost}`, 
    },
  ];

  const items = [
    {
      name: "Item 1",
      quantity: "2",
      unitPerCost: "5",
      totalCost: "10",
    },
    {
        name: "Item 1",
        quantity: "2",
        unitPerCost: "5",
        totalCost: "10",
      },
      {
        name: "Item 1",
        quantity: "2",
        unitPerCost: "5",
        totalCost: "10",
      },
       {
      name: "Item 1",
      quantity: "2",
      unitPerCost: "5",
      totalCost: "10",
    },
    {
      name: "Item 2",
      quantity: "1",
      unitPerCost: "15",
      totalCost: "15",
    },
  ];

  return (
    <SpaceBetween size="m">
      <Box>
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Order", href: "/app/orders" },
            { text: "Order Details", href: "/app/order/orderdetail" },
            { text: "Refund", href: "#" },
          ]}
          ariaLabel="Breadcrumbs"
        />
      </Box>

      <Header>Refund</Header>

      <Grid
        gridDefinition={[
          { colspan: { default: 14, xxs: 8 } },
          { colspan: { default: 16, xxs: 4 } },
        ]}
      >
        <Container>
          <Table
            renderAriaLive={({ firstIndex, lastIndex, totalItemsCount }) =>
              `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
            }
            onSelectionChange={({ detail }) =>
              setSelectedItems(detail.selectedItems)
            }
            selectedItems={selectedItems}
            ariaLabels={{
              selectionGroupLabel: "Items selection",
              allItemsSelectionLabel: ({ selectedItems }) =>
                `${selectedItems.length} ${
                  selectedItems.length === 1 ? "item" : "items"
                } selected`,
              itemSelectionLabel: ({ selectedItems }, item) => item.name,
            }}
            columnDefinitions={columnDefinitions}
            items={items}
            loadingText="Loading resources"
            selectionType="multi"
            trackBy="name"
            variant="borderless"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No resources</b>
                  <Button>Create resource</Button>
                </SpaceBetween>
              </Box>
            }
            header={<Header>Items</Header>}
          />
        </Container>
        <Container>
            <Header>Refund Amount</Header>
            <SpaceBetween size="s">
            <div style={{fontWeight: 'bold'}}>Summary</div>
    <Grid
      disableGutters
      gridDefinition={[{ colspan: 9 }, { colspan: 3 }]}
    >
<div style={{ borderBottom: '1px solid gray', height: '2rem' }}>Item Subtotal</div>
<div style={{ borderBottom: '1px solid gray', height: '2rem' }}>₹1050</div>
    </Grid>
    <Grid
      disableGutters
      gridDefinition={[{ colspan: 9 }, { colspan: 3 }]}
    >
      <div style={{ borderBottom: '1px solid gray', height: '2rem'}}>Total Refund </div>
      <div style={{ borderBottom: '1px solid gray', height: '2rem'}}>₹1050</div>
    </Grid>
    <div style={{fontWeight: 'bold'}}>
        Manual
        <Input
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
    />

    </div>
    <p>₹1050.00 available for refund</p>
    <div style={{margin:'auto', width: '50%'}}>
    <Button variant="primary">Refund ₹1050</Button></div>

    </SpaceBetween>

        </Container>
      </Grid>

      <Grid gridDefinition={[{ colspan: 8 }, { colspan: 10 }]}>
        <Container>
            <SpaceBetween size="s">
        <Header>
        Reason for Refund
        </Header>
            <Textarea
      onChange={({ detail }) => setValues(detail.values)}
      value={values}
    />
    <p>Only your and other members can see this message</p>
    </SpaceBetween>
        </Container>
      </Grid>
      
    </SpaceBetween>
  );
};

export default Refund;
