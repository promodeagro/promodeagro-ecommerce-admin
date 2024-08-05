import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import DescPackage from "./Components/DescPackage";
import AddIngredients from "./Components/AddIngredients";
import AllergensNutritionalAnalysis from "./Components/AllergensNutritionalAnalysis";
import AdditionalTesting from "./Components/AdditionalTesting";
import AttachDocuments from "./Components/AttachDocuments";
import Signature from "./Components/Signature";
import Previewdetails from "./Components/Previewdetails";
import CheckIcon from "assets/img/finish-product/check-icon.png";

const steps = [
  {
    label: "Desc & Package",
  },
  {
    label: "Add Ingredients",
  },
  {
    label: "Allergens & Nutritional Analysis",
  },
  {
    label: "Additional Testing",
  },
  {
    label: "Attach Documents",
  },
  {
    label: "Signature",
  },
];

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: null,
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  render() {
    let { activeStep } = this.state;
    return (
      <Box className="main-container">
        <Box className="product-details-container">
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Box className="steper-container">
                {activeStep === 0 ? <DescPackage /> : <></>}
                {activeStep === 1 ? <AddIngredients /> : <></>}
                {activeStep === 2 ? <AllergensNutritionalAnalysis /> : <></>}
                {activeStep === 3 ? <AdditionalTesting /> : <></>}
                {activeStep === 4 ? <AttachDocuments /> : <></>}
                {activeStep === 5 ? <Signature /> : <></>}
                {activeStep === 6 ? <Previewdetails /> : <></>}
                {activeStep === 7 ? (
                  <Box className="successfully-section">
                    <Box>
                      <img src={CheckIcon} alt="" />
                      <h3>SUCCESS!</h3>
                      <strong>Product Specification Sheet has been created successfully. </strong>
                      <p>You can view saved PSS in the ‘Product Specification’ Tab.</p>
                      <Button color="success"  variant="contained" sx={{mt:3, px:4}}>Home</Button>
                    </Box>
                  </Box>
                ) : (
                  <></>
                )}

                <Box sx={{ mt: 3 }} flexDirection={"row"} align={"right"}>
                  <Button
                    className="btn-outline-secondary"
                    variant="outlined"
                    onClick={this.handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    className="primary-btn"
                    variant="contained"
                    onClick={this.handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Proceed Next
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box className="steper-section">
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {/* {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={this.handleReset} sx={{ mt: 1, mr: 1 }}>
                      Reset
                    </Button>
                  </Paper>
                )} */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default ProductDetails;
