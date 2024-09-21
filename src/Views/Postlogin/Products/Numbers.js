import { Box } from '@cloudscape-design/components'
import ColumnLayout from '@cloudscape-design/components/column-layout'
import React, { act, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'


import { fetchOrders } from 'Redux-Store/Orders/OrdersThunk'


const Numbers = ({products}) => {
  const dispatch = useDispatch();
  const ordersData = useSelector((state) => state.orders.ordersData);
  const { data = [] } = ordersData;
  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);
  //  console.log(data,"orderssss");
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  
  useEffect(() => {
    if (products.data) {
      const activeProducts = [];
      const inactiveProducts = [];
  
      products.data.map(e => {
        if (e.active === true) {
          activeProducts.push(e);
        } else if (e.active === false) {
          inactiveProducts.push(e);
        }
        return null; // Since map expects a return value, we return null here
      });
  
      setActive(activeProducts);
      setInactive(inactiveProducts);
  

    }
  }, [products]);
  
  return (

    <ColumnLayout columns={5} variant="default" minColumnWidth={150}>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}> Active Products</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>{active?.length}</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Total Stock</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>436K</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Total Orders</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>{data.items?.length}</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Net Profit</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>₹123K</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Inactive Products</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>{inactive?.length}</span>
    </div>
  </ColumnLayout>
  )
}

export default Numbers