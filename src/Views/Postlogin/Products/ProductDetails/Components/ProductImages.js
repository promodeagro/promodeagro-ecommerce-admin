import { Container } from '@cloudscape-design/components'
import React from 'react'
import UploadImage from "../../../../../assets/img/Upload Image.png";
import "../../../../../assets/styles/CloudscapeGlobalstyle.css"
import UploadImageTomato from "../../../../../assets/img/finish-product/Upload Image.png";

const ProductImages = () => {
  return (

    <Container fitHeight={600} variant='borderless'  className='container-box-shadow'>
    <img width={700} height={700}src={UploadImageTomato} alt="Upload Tomato" style={{borderRadius:"8px", border:"#E1E2E9"}} />
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
      <img src={UploadImage} style={{borderRadius:"8px",border:"#E1E2E9"}} alt="Upload Tomato 1" height={400} />
      <img src={UploadImage}style={{borderRadius:"8px",border:"#E1E2E9"}} alt="Upload Tomato 2" height={400} />
    </div>
  </Container>
  )
}

export default ProductImages