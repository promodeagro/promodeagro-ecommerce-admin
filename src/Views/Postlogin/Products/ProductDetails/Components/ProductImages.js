import { Container } from '@cloudscape-design/components'
import React from 'react'
import UploadImage from "../../../../../assets/img/Upload Image.png";
import "../../../../../assets/styles/CloudscapeGlobalstyle.css"
import UploadImageTomato from "../../../../../assets/img/finish-product/Upload Image.png";

const ProductImages = ({product}) => {
  return (

    <Container fitHeight={600} variant='borderless'  className='container-box-shadow'>
    <img src={product.data?.images[0]} alt="Upload Tomato" style={{borderRadius:"8px", border:"#E1E2E9", height:"210px", width:"200px"}} />
    <span style={{ fontSize: "12px", fontWeight: "bold" }}>
      Additional Images
    </span>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "6px",
      }}
    >
      <img src={product?.data?.images[1]} style={{borderRadius:"8px",height:"110px", width:"110px"}} alt="Upload Tomato 1" />
      <img src={product
        ?.data?.images[2]}style={{borderRadius:"8px",height:"110px", width:"110px"}} alt="Upload Tomato 2" />
    </div>
  </Container>
  )
}

export default ProductImages