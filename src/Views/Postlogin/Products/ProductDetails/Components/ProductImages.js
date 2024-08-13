import { Container } from '@cloudscape-design/components'
import React from 'react'
import UploadImage from "../../../../../assets/img/tomato.png";

const ProductImages = () => {
  return (

    <Container>
    <img src={UploadImage} alt="Upload Tomato" />
    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
      Additional Images
    </span>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "5px",
      }}
    >
      <img src={UploadImage} alt="Upload Tomato 1" height={150} />
      <img src={UploadImage} alt="Upload Tomato 2" height={150} />
    </div>
  </Container>
  )
}

export default ProductImages