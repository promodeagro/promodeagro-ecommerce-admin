import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "Redux-Store/Orders/OrdersThunk";
import {
  Table,
  Container,
  Box,
  SpaceBetween,
  Header,
  Grid,
  
} from "@cloudscape-design/components";
import { Link } from "react-router-dom";
import SelectFilter from "./SelectFilter";

const RecentOrders = () => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const { data = []} = ordersData;
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const [filter, setFilter] = useState('7 days ago');
  console.log(data.items,"data");

  const handleFilterChange = ({ detail }) => {
    setFilter(detail.selectedOption.value);
  };

  const getFilteredOrders = () => {
    const now = new Date();
    switch (filter) {
      case 'Today':
        return data?.items?.filter(order => new Date(order.orderDate).toDateString() === now.toDateString());
      case '7 days ago':
        return data?.items?.filter(order => new Date(order.orderDate) >= new Date(now.setDate(now.getDate() - 7)));
      case '30 days ago':
        return data?.items?.filter(order => new Date(order.orderDate) >= new Date(now.setDate(now.getDate() - 30)));
      case '6 months ago':
        return data?.items?.filter(order => new Date(order.orderDate) >= new Date(now.setMonth(now.getMonth() - 6)));
      default:
        return data?.items;
    }
  };
  const filteredOrders = getFilteredOrders()?.slice(0, 7); // Get only top 10 orders





  

  return (

    <Container fitHeight={300}>
         
          <Table
            header={
            
              <Grid
              gridDefinition={[
                { colspan: { default: 8, xxs: 8 } },
                { colspan: { default: 4, xxs: 4 } }
              ]}
            >
                <Header variant='h4'>Recent Orders</Header>
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
          
            items={filteredOrders}
            columnDefinitions={[
              {
                id: "id",
                header: "Order ID",
                cell: (item) =>
                  item.id ? (
                    <Link to={`/app/order/orderdetail`}>#{item.id}</Link>
                  ) : (
                    "N/A"
                  ),
              },

              // {
              //   id: "orderDate",
              //   header: "Order Date",
              //   cell: (item) => {
              //     if (!item.orderDate) {
              //       return "N/A";
              //     }
              //     const date = new Date(item.orderDate);
              //     const options = {
              //       day: "2-digit",
              //       month: "2-digit",
              //       year: "numeric",
              //     };
              //     return date
              //       .toLocaleDateString("en-GB", options)
              //       .replace(/\//g, "-"); 
              //   },
              // },
              {
                id: "customerName",
                header: "Customer Name",
                cell: (item) => {
                  if (
                    item.customerName &&
                    item.customerName &&
                    item.customerName
                  ) {
                    return item.customerName;
                  }
                  return "N/A";
                },
              },
           
              {
                id: "orderStatus",
                header: "Order Status",
                cell: (item) => item.orderStatus || "N/A",
              },

              {
                id: "totalAmount",
                header: "Total Amount",
                cell: (item) =>
                  item.totalAmount ? `Rs. ${item.totalAmount}` : "N/A",
              },
              {
                id: "area",
                header: "Delivery Area",
                cell: (item) => item.area || "N/A",
              },
            ]}
            loadingText="Loading resources"
         
            trackBy="id"
            variant="borderless"
            empty={
              <Box
                margin={{ vertical: "xs" }}
                textAlign="center"
                color="inherit"
              >
                <SpaceBetween size="m">
                  <b>No Orders</b>
                </SpaceBetween>
              </Box>
            }
          />
          </Container>
 

  );
};

export default RecentOrders;