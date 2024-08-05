import React, { Component } from "react";
import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Select,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  Button,
} from "@mui/material";
import qutationDetailsIcon from "../../../../assets/img/quotation-details.svg";
import SearchIcon from "@mui/icons-material/Search";
import { ValidationEngine } from "Utils/helperFunctions";
import { QUOTATIONS_FILTER_STATUS } from "CommonData";

const steps = [
  "Quotation Details",
  "Add Ingredients",
  "Additional Cost",
  "Attach Documents",
  "Quote Summary",
];
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const validationSchema1 = {
  customerName: [
    {
      message: "Please enter customer name.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  number: [
    {
      message: "Please enter quotation number.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter quotation number.",
      type: ValidationEngine.type.REGEX,
      regex: /^[a-zA-Z0-9-]+$/,
    },
  ],
  quotationName: [
    {
      message: "Please enter quotation name.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  status: [
    {
      message: "Please select the status",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  date: [
    {
      message: "Please select the date.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please select the valid date.",
      type: ValidationEngine.type.REGEX,
      regex: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    },
  ],
  expiryDate: [
    {
      message: "Please select the expiry date.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please select the valid expiry date.",
      type: ValidationEngine.type.REGEX,
      regex: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    },
  ],
  owner: [
    {
      message: "Please select the owner.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  productName: [
    {
      message: "Please enter product name.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  customerProductNumber: [
    {
      message: "Please enter the product number.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid product number",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  category: [
    {
      message: "Please select the category.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  type: [
    {
      message: "Please select the type.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  size: [
    {
      message: "Please enter the capsule size.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid capsule size.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  packageingType: [
    {
      message: "Please select the packaging type.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  countPerBottle: [
    {
      message: "Please select the countPerBottle.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  batchSize: [
    {
      message: "Please enter batch size.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid batch size.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  dosagePerUnit: [
    {
      message: "Please enter the dosage.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid  the dosage.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
};

const validationSchema2 = {
  rmId: [
    {
      message: "Please enter R.M id.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  activeIngredient: [
    {
      message: "Please enter the active ingredient.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  label: [
    {
      message: "Please enter the active label.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  unit: [
    {
      message: "Please select the unit.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  perDosage: [
    {
      message: "Please enter the dosage.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],

  qty: [
    {
      message: "Please enter the qty.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  unit: [
    {
      message: "Please select the unit.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  price: [
    {
      message: "Please enter the price.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
  cost: [
    {
      message: "Please enter the cost.",
      type: ValidationEngine.type.MANDATORY,
    },
  ],
};

const validationSchema3 = {
  materialCost: [
    {
      message: "Please enter the material cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid material cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  processLoss: [
    {
      message: "Please enter the process loss.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid process loss.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  filterCost: [
    {
      message: "Please enter the filter cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid filter cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  freightCharges: [
    {
      message: "Please enter the freight charges.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid freight charges.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  markUp: [
    {
      message: "Please enter the mark up.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid mark up.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  capsuleFillingCost: [
    {
      message: "Please enter the capsule filling cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid capsule filling cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  packagingCost: [
    {
      message: "Please enter the packaging cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid packaging cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  tesingCost: [
    {
      message: "Please enter the testing cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid testing cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  stabilityCost: [
    {
      message: "Please enter the stability cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid stability cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
  fullfillmentCost: [
    {
      message: "Please enter the full fillment cost.",
      type: ValidationEngine.type.MANDATORY,
    },
    {
      message: "Please enter the valid full fillment cost.",
      type: ValidationEngine.type.REGEX,
      regex: ValidationEngine.NUMBER_ONLY_REGEX,
    },
  ],
};

export class QuatationsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      activeStep: 0,
      formData: {
        step1: {
          quotationDetails: {
            customerName: "",
            number: "",
            quotationName: "",
            status: "",
            date: "",
            expiryDate: "",
            owner: "",
          },
          productDescription: {
            productName: "",
            customerProductNumber: "",
            category: "",
            type: "",
            size: "",
            packageingType: "",
            countPerBottle: 0,
            batchSize: 0,
            dosagePerUnit: "",
          },
        },
        step2: {
          ingredients: [
            {
              rmId: 1,
              activeIngredient: "",
              label: "",
              unit: "",
              perDosage: 0,
              qty: 0,
              unit: "kg",
              price: 0,
              cost: 0,
            },
          ],
        },
        step3: {
          additionalCost: {
            materialCost: 0,
            processLoss: 0,
            filterCost: 0,
            freightCharges: 0,
            markUp: 0,
            capsuleFillingCost: 0,
            packagingCost: 0,
            tesingCost: 0,
            stabilityCost: 0,
            fullfillmentCost: 0,
          },
        },
      },
    };
  }
  handleFormStepValidate = {
    0: () => this.validateStep1Form(),
    1: () => this.validateStep2Form(),
    2: () => this.validateStep3Form(),
  };

  validateForm = () => {
    let { isSubmit, activeStep } = this.state;
    if (isSubmit) {
      if (this.handleFormStepValidate[activeStep]) {
        const error = this.handleFormStepValidate[activeStep]();

        return error;
      }
    }
  };

  validateStep1Form = () => {
    let {
      step1: { quotationDetails, productDescription },
    } = this.state.formData;
    return ValidationEngine.validate(validationSchema1, {
      ...quotationDetails,
      ...productDescription,
    });
  };

  validateStep2Form = () => {
    let {
      step2: { ingredients },
    } = this.state.formData;

    for (var i = 0; i < ingredients.length; i++) {
      let ingredient = ingredients[i];
      let error = ValidationEngine.validate(validationSchema2, {
        ...ingredient,
      });
      if (!error.isValid) {
        return error;
      }
    }
  };

  validateStep3Form = () => {
    let {
      step3: { additionalCost },
    } = this.state.formData;
    let error = ValidationEngine.validate(validationSchema3, {
      ...additionalCost,
    });
    return error;
  };

  handleChange = (event, step, subkey) => {
    let { formData } = this.state;
    const { name, value } = event.target;

    if (subkey) {
      formData[`step${step}`][subkey][name] = value;
    } else {
      formData[`step${step}`][name] = value;
    }
    this.setState({ formData });
  };

  handleNext = (e) => {
    const resData = this.validateForm();

    if (resData.isValid) {
      this.setState({ activeStep: this.state.activeStep + 1, isSubmit: false });
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  renderStep1Form = () => {
    const {
      formData: { step1 },
      isSubmit,
    } = this.state;
    const errorData = this.validateForm();
    return (
      <>
        <Box className="details-box">
          <h3 className="title">Quotation Details</h3>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="d-block box-title">Customer Name</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Search Customer"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                name="customerName"
                value={step1?.quotationDetails?.customerName}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
              />
              {isSubmit && !errorData?.customerName?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.customerName.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Number</span>
              <TextField
                className="common-textfield"
                type="text"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                name="number"
                value={step1?.quotationDetails?.number}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
              />
              {isSubmit && !errorData?.number?.isValid ? (
                <span style={{ color: "red" }}>{errorData.number.message}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Name</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. Joint Support Capsules."
                name="quotationName"
                value={step1?.quotationDetails?.quotationName}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
              />
              {isSubmit && !errorData?.quotationName?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.quotationName.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Status</span>
              <Select
                value={step1?.quotationDetails?.status}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
                name="status"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Object.keys(QUOTATIONS_FILTER_STATUS).map(
                  (statusKey, statusIndex) => (
                    <MenuItem
                      value={QUOTATIONS_FILTER_STATUS[statusKey]}
                      key={`statusKey${statusIndex}`}
                    >
                      {QUOTATIONS_FILTER_STATUS[statusKey]}
                    </MenuItem>
                  )
                )}
              </Select>
              {isSubmit && !errorData?.status?.isValid ? (
                <span style={{ color: "red" }}>{errorData.status.message}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Date</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                type="date"
                name="date"
                value={step1?.quotationDetails?.date}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
              />
              {isSubmit && !errorData?.date?.isValid ? (
                <span style={{ color: "red" }}>{errorData.date.message}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Expiry</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. Joint Support Capsules."
                type="date"
                name="expiryDate"
                value={step1?.quotationDetails?.expiryDate}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
              />
              {isSubmit && !errorData?.expiryDate?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.expiryDate.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Quotation Owner</span>

              <Select
                name="owner"
                value={step1?.quotationDetails?.owner}
                onChange={(e) => this.handleChange(e, 1, "quotationDetails")}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["admin", "operator"].map((owner, ownerIndex) => (
                  <MenuItem value={owner} key={`owner${ownerIndex}`}>
                    {owner}
                  </MenuItem>
                ))}
              </Select>
              {isSubmit && !errorData?.owner?.isValid ? (
                <span style={{ color: "red" }}>{errorData.owner.message}</span>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box className="details-box">
          <h3 className="title">Product Description</h3>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="d-block box-title">Product Name</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Enter Product Name"
                name="productName"
                value={step1?.productDescription?.productName}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
              />
              {isSubmit && !errorData?.productName?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.productName.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Customer Product Number</span>
              <TextField
                className="common-textfield"
                type="text"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                name="customerProductNumber"
                value={step1?.productDescription?.customerProductNumber}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
              />
              {isSubmit && !errorData?.customerProductNumber?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.customerProductNumber.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Product Category</span>
              <Select
                value={step1?.productDescription?.category}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
                name="category"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["Vegan", "Non-Vegan"].map((category, categoryIndex) => (
                  <MenuItem
                    value={category}
                    key={`categoryKey${categoryIndex}`}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
              {isSubmit && !errorData?.category?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.category.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <span className="d-block box-title">Product Type</span>
              <Select
                value={step1?.productDescription?.type}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
                name="type"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["Capsules"].map((type, statusIndex) => (
                  <MenuItem value={type} key={`statusKey${statusIndex}`}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {isSubmit && !errorData?.type?.isValid ? (
                <span style={{ color: "red" }}>{errorData.type.message}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Capsule Size</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                type="text"
                name="size"
                value={step1?.productDescription?.size}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
              />
              {isSubmit && !errorData?.size?.isValid ? (
                <span style={{ color: "red" }}>{errorData.size.message}</span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Packageing Type</span>
              <Select
                value={step1?.productDescription?.packageingType}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
                name="packageingType"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["120 Count/Bottle"].map((type, statusIndex) => (
                  <MenuItem value={type} key={`statusKey${statusIndex}`}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {isSubmit && !errorData?.packageingType?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.packageingType.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Count Per Bottle</span>

              <Select
                name="countPerBottle"
                value={step1?.productDescription?.countPerBottle}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {["Bottled"].map((cpb, ownerIndex) => (
                  <MenuItem value={cpb} key={`owner${ownerIndex}`}>
                    {cpb}
                  </MenuItem>
                ))}
              </Select>
              {isSubmit && !errorData?.countPerBottle?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.countPerBottle.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Batch Size</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                type="text"
                name="batchSize"
                value={step1?.productDescription?.batchSize}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
              />
              {isSubmit && !errorData?.batchSize?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.batchSize.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={4}>
              <span className="d-block box-title">Dosage Per Unit</span>
              <TextField
                className="common-textfield"
                size="small"
                placeholder="Eg. NUT-123456-V1"
                type="text"
                name="dosagePerUnit"
                value={step1?.productDescription?.dosagePerUnit}
                onChange={(e) => this.handleChange(e, 1, "productDescription")}
              />
              {isSubmit && !errorData?.dosagePerUnit?.isValid ? (
                <span style={{ color: "red" }}>
                  {errorData.dosagePerUnit.message}
                </span>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };

  renderStep2Form = () => {};

  renderStep3Form = () => {};

  renderFormStep = () => {
    let { activeStep } = this.state;

    if (activeStep === 0) {
      return this.renderStep1Form();
    } else if (activeStep === 1) {
      return this.renderStep2Form();
    } else if (activeStep === 2) {
      return this.renderStep3Form();
    }
  };
  render() {
    const {
      activeStep,
      formData: { step1, step2, step3 },
    } = this.state;

    return (
      <Box className="main-container">
        <Box className="qutation-form-container">
          <Box className="d-flex align-items-center">
            <h2 className="d-block">Quotation</h2>
            <span className="d-block status draft">Draft</span>
          </Box>
          <span className="sub-title">Create New Quotation</span>
          <Box className="qutation-form">
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box className="stepper-container">
                  <Stepper activeStep={0} orientation="vertical">
                    {steps.map((label, stepIndex) => (
                      <Step key={label}>
                        <StepLabel
                          StepIconComponent={this.QontoStepIcon}
                          className="custom-icon checked"
                        >
                          {label}
                          <div>
                            {activeStep === stepIndex
                              ? "In Progress"
                              : activeStep > stepIndex
                              ? "Complete"
                              : "Pending"}
                          </div>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>
              <Grid item xs={9}>
                {this.renderFormStep()}
                <Box sx={{ mt: 3 }} flexDirection={"row"} align={"right"}>
                  {activeStep !== 0 ? (
                    <Button
                      className="btn-outline-secondary"
                      variant="outlined"
                      onClick={this.handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  ) : (
                    <></>
                  )}

                  <Button
                    className="primary-btn"
                    variant="contained"
                    onClick={() => {
                      this.setState({ isSubmit: true }, () => {
                        this.handleNext();
                      });
                    }}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Proceed Next
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default QuatationsForm;
