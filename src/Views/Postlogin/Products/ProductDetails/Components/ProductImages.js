import { Container } from '@cloudscape-design/components'
import React from 'react'


const ProductImages = ({product}) => {
  return (

    <Container fitHeight={600} variant='borderless'  className='container-box-shadow'>
    <img src={product?.data?.images[0]} alt={product.data?.name} style={{height:"200px",borderRadius:"8px", width:"100%"}} />
    <span style={{ fontSize: "12px", fontWeight: "bold",marginBottom:"10px" }}>
      Additional Images
    </span>
    <div
      style={{
        display: "flex",
     
        gap: "6px",
      }}
    >
      <img src={product?.data?.images[1]} style={{borderRadius:"8px",height:"110px", width:"50%"}} alt={product.data?.name}  />
      <img src={product
        ?.data?.images[2]}style={{borderRadius:"8px",height:"110px", width:"50%"}} alt={product.data?.name}  />
    </div>
  </Container>
  )
}

export default ProductImages