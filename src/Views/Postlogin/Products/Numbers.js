import { Box } from '@cloudscape-design/components'
import ColumnLayout from '@cloudscape-design/components/column-layout'
import React from 'react'

const Numbers = () => {
  return (

    <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Total Active Products</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Total Stock</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>₹436K</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Total Orders</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Net Profit</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>1238K</span>
    </div>
    <div>
      <Box variant="awsui-key-label">
        <p style={{ fontSize: 12 }}>Inactive Products</p>
      </Box>
      <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>12</span>
    </div>
  </ColumnLayout>
  )
}

export default Numbers