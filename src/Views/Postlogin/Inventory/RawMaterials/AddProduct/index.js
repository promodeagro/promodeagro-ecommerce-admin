import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { ValidationEngine } from "Utils/helperFunctions";
import UploadImg from "../../../../../assets/img/upload-img.png";

const validationSchema = {
  ingredientName: [
    {
      message: "Please enter ingredient name",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  purchasedDate: [
    {
      message: "Please enter purchased date",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  expiryDate: [
    {
      message: "Please enter expiry date",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  unitPrice: [
    {
      message: "Please enter unit price",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  unitMeasure: [
    {
      message: "Please enter unit measure",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  purchaseQuantity: [
    {
      message: "Please enter purchase quantity",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  thresholdValue: [
    {
      message: "Please enter threshold value",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  totalCost: [
    {
      message: "Please enter total cost",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientName: "",
      purchasedDate: "",
      expiryDate: "",
      unitPrice: "",
      unitMeasure: "",
      purchaseQuantity: "",
      thresholdValue: "",
      totalCost: "",
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  validateForm = () => {
    const {
      ingredientName,
      purchasedDate,
      expiryDate,
      unitPrice,
      unitMeasure,
      purchaseQuantity,
      thresholdValue,
      totalCost,
    } = this.state;
    const error = ValidationEngine.validate(validationSchema, {
      ingredientName,
      purchasedDate,
      expiryDate,
      unitPrice,
      unitMeasure,
      purchaseQuantity,
      thresholdValue,
      totalCost,
    });
    return error;
  };

  handleSubmit = () => {
    const errorData = this.validateForm();
    this.setState({
      isSubmitted: true,
    });
    if (errorData.isValid) {
    }
  };

  render() {
    const errorData = this.validateForm();
    const {
      ingredientName,
      purchasedDate,
      expiryDate,
      unitPrice,
      unitMeasure,
      purchaseQuantity,
      thresholdValue,
      totalCost,
      isSubmitted,
    } = this.state;

    return (
      <div className="main-container">
        <div className="add-new-container">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <div className="heading">
                <h2 className="d-flex">Add Product</h2>
                <span>Please add the details of the product</span>
              </div>
              <div className="add-new-form-container add-new-product">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Ingredient Name</label>
                      <TextField
                        name="ingredientName"
                        value={ingredientName}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.ingredientName.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.ingredientName.message : ""
                        }
                        defaultValue={ingredientName}
                        placeholder="Vitamin E"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Purchased Date</label>
                      <TextField
                        type="date"
                        name="purchasedDate"
                        value={purchasedDate}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.purchasedDate.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.purchasedDate.message : ""
                        }
                        defaultValue={purchasedDate}
                        inputProps={{
                          placeholder: "12-02-2024",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Expiry Date</label>
                      <TextField
                        type="date"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.expiryDate.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.expiryDate.message : ""
                        }
                        defaultValue={expiryDate}
                        placeholder="12-05-2028"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Unit Price</label>
                      <TextField
                        name="unitPrice"
                        value={unitPrice}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.unitPrice.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.unitPrice.message : ""
                        }
                        defaultValue={unitPrice}
                        placeholder="$1250.04"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Unit of Measure</label>
                      <TextField
                        name="unitMeasure"
                        value={unitMeasure}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.unitMeasure.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.unitMeasure.message : ""
                        }
                        defaultValue={unitMeasure}
                        placeholder="Kg / Grms"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Purchase Quantity</label>
                      <TextField
                        name="purchaseQuantity"
                        value={purchaseQuantity}
                        onChange={this.handleChange}
                        className="text-field"
                        error={
                          !errorData.purchaseQuantity.isValid && isSubmitted
                        }
                        helperText={
                          isSubmitted ? errorData.purchaseQuantity.message : ""
                        }
                        defaultValue={purchaseQuantity}
                        placeholder="200 Kg"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Threshold Value</label>
                      <TextField
                        name="thresholdValue"
                        value={thresholdValue}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.thresholdValue.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.thresholdValue.message : ""
                        }
                        defaultValue={thresholdValue}
                        placeholder="Kg / Grms / Ltrs"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box className="form-text-field">
                      <label>Total Cost</label>
                      <TextField
                        name="totalCost"
                        value={totalCost}
                        onChange={this.handleChange}
                        className="text-field"
                        error={!errorData.totalCost.isValid && isSubmitted}
                        helperText={
                          isSubmitted ? errorData.totalCost.message : ""
                        }
                        defaultValue={totalCost}
                        placeholder="$100,120.05"
                      />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="add-new-form-btn">
                      <Button
                        className="btn-outline-secondary"
                        variant="outlined"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="primary-btn"
                        variant="contained"
                        onClick={this.handleSubmit}
                      >
                        Save Details
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={3}>
              <Box className="upload-image">
                <div className="image">
                  <img src={UploadImg} alt="" />
                </div>
                <Box className="upload-btns">
                  <Button
                    variant="outlined"
                    startIcon={<FileUploadOutlinedIcon />}
                  >
                    Upload
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteOutlinedIcon />}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default AddProduct;
