import React, { Component } from "react";
import {
  Box,
  Button,
  Stack,
  Grid,
  Divider,
  TableCell,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TextField,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShareIcon from "@mui/icons-material/Share";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import rasiLogo from "../../../../assets/img/rasi-logo.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function createData(item, amountServing, dailyValue) {
  return { item, amountServing, dailyValue };
}
function createPricingData(fullSize, minimumQuantity, price) {
  return { fullSize, minimumQuantity, price };
}
const rows = [
  createData(
    "Benolea Olive leaf extract (Std. to 30% polyphenols & 16% oleuropein)",
    "1000 mg",
    "*"
  ),
  createData(
    "MegaNatural - BP (Grape Seed Extract) (Std. to 90-95% polyphenols)",
    "150 mg",
    "*"
  ),
];
const pricingrows = [
  createPricingData("60 count", "2000 bottles", "$9.00 per bottle"),
];
export class QuotationCreateFPS extends Component {
  render() {
    return (
      <Box className="main-container">
        <Box className="quotation-create-container">
          <Box className="quotation-create-details d-flex justify-content-between align-items-center">
            <Box className="quotation-id-box d-flex align-items-center">
              <h3 className="d-block quotation-id">#CQ-1001</h3>
              <span className="d-block status pending">Pending</span>
            </Box>
            <Stack direction="row" spacing={2}>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <BorderColorIcon className="quotation-icon" />
                <span className="d-block qutation-name">Attach File</span>
              </Box>
              <Box className="quotation-icon-group d-flex align-items-center">
                <MailOutlineIcon className="quotation-icon" />
                <span className="d-block qutation-name">Comment & History</span>
              </Box>
            </Stack>
          </Box>
          <Box className="specifications-head d-flex align-items-center justify-content-between">
            <Stack direction="row" spacing={2}>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <BorderColorIcon className="quotation-icon" />
                <span className="d-block qutation-name">Edit</span>
              </Box>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <MailOutlineIcon className="quotation-icon" />
                <span className="d-block qutation-name">Mail</span>
              </Box>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <ShareIcon className="quotation-icon" />
                <span className="d-block qutation-name">Share</span>
              </Box>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <PictureAsPdfIcon className="quotation-icon" />
                <span className="d-block qutation-name">Print/PDF</span>
              </Box>
              <Box className="quotation-icon-group d-flex align-items-center ">
                <RemoveRedEyeOutlinedIcon className="quotation-icon" />
                <span className="d-block qutation-name">View Attachments </span>
              </Box>
            </Stack>
            <Box className="d-block">
              <Button className="primary-btn mark-set-btn" variant="contained">
                Mark as Sent
              </Button>
              <Button className="primary-btn " variant="contained">
                Send Quotation
              </Button>
            </Box>
          </Box>
          <Box className="production-price-container">
            <h2 className="d-block title">Production Price Proposal</h2>
            <Box className="d-flex justify-content-between align-items-center">
              <Box className="d-block">
                <Box className="d-block product-name-details">
                  <span className="d-block heading">Product Name</span>
                  <h2 className="d-block product-name">
                    Durable Blood Pressure
                  </h2>
                </Box>
                <Box className="d-block product-name-details">
                  <span className="d-block heading">Product Code</span>
                  <span className="d-block product-code">NP-0312</span>
                </Box>
              </Box>
              <Box className="d-flex align-items-center rasi-lab-adress-info">
                <img src={rasiLogo} alt="" className="rasi-logo" />
                <Box className="d-inline-block">
                  <span className="d-block text">Quotation By </span>
                  <h3 className="lab-name">Rasi Laboratories, Inc</h3>
                  <span className="d-block address-details">
                    20 Roosevelt Avenue, Somerset, <br />
                    New Jersey 08873 <br />
                    Telephone 732 851 8517
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="d-block quotation-details-container">
            <Box className="quotation-compuny-details">
              <span className="d-block quotation-heading">Quotation To</span>
              <Box className="d-flex align-items-end justify-content-between">
                <Box className="d-flex align-items-center buyer-compuny-name">
                  <span className="compuny-name-letter">NP</span>
                  <Box className="d-block">
                    <h3 className="compuny-name">Nutri Phram</h3>
                    <span className="d-block compuny-mailid">
                      johndoe@gmail.com
                    </span>
                    <span className="compuny-address">
                      Nutripharm Headquarters, 1929
                      <br />
                      Main St., Suit 106 Irvine, CA 92614
                    </span>
                  </Box>
                </Box>
                <Stack direction="row" spacing={3}>
                  <Box className="d-block quote-info">
                    <span className="d-block heading">Quote Number</span>
                    <span className="d-block number">DRB-031023-03</span>
                  </Box>
                  <Box className="d-block quote-info">
                    <span className="d-block heading">Date</span>
                    <span className="d-block number">07/05/2024</span>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Divider />
            <Box className="specification-container">
              <span className="d-block heading-name">Specifications</span>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Description{" "}
                  </span>
                  <span className="d-block specification-name">
                    Vegetable Capsule
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Size and Shape{" "}
                  </span>
                  <span className="d-block  specification-name">
                    #00 elongated
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Theoretical weight{" "}
                  </span>
                  <span className="d-block specification-name">750 mg</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block  specification-title">Coating</span>
                  <span className="d-block specification-name">No</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} marginTop={4}>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Packaged as (Bottle / Cartoon / Bulk)
                  </span>
                  <span className="d-block specification-name">Bottle</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">Case Pack</span>
                  <span className="d-block  specification-name">24</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">Label</span>
                  <span className="d-block specification-name">
                    Customer Supplied art
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block  specification-title">
                    Inner Seal
                  </span>
                  <span className="d-block specification-name">
                    HS035 Liner
                  </span>
                </Grid>
              </Grid>
              <Grid container spacing={2} marginTop={4}>
                <Grid item xs={3}>
                  <span className="d-block specification-title">Neck Band</span>
                  <span className="d-block specification-name">
                    TE neck band
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Inner Seal
                  </span>
                  <span className="d-block  specification-name">
                    Lift & peel
                  </span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">Desiccant</span>
                  <span className="d-block specification-name">No</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block  specification-title">Rayon</span>
                  <span className="d-block specification-name">Yes</span>
                </Grid>
              </Grid>
              <Grid container spacing={2} marginTop={4}>
                <Grid item xs={3}>
                  <span className="d-block specification-title">Insert</span>
                  <span className="d-block specification-name">No</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Full Body Seal
                  </span>
                  <span className="d-block  specification-name">No</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block specification-title">
                    Case Divider
                  </span>
                  <span className="d-block specification-name">No</span>
                </Grid>
                <Grid item xs={3}>
                  <span className="d-block  specification-title">
                    Case Label
                  </span>
                  <span className="d-block specification-name">
                    Printed with SKU
                  </span>
                </Grid>
              </Grid>
              <span className="d-block term-condition">
                *Tentative and subject to revisions and finial formulation.
              </span>
              <Divider />
              <span className="d-block heading-name mb-0">Pricing</span>
              <Table className="quotation-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Full Size</TableCell>
                    <TableCell>Minimum Quantity</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pricingrows.map((row) => (
                    <TableRow>
                      <TableCell>{row.fullSize}</TableCell>
                      <TableCell>{row.minimumQuantity}</TableCell>
                      <TableCell>{row.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <span className="d-block term-condition m-0">
                *Tentative and subject to revisions and finial formulation.
              </span>
              <Box className="d-flex align-items-center validity-details">
                <span className="d-block validity-title">
                  Price Validity -{" "}
                </span>
                <p className="d-block validity-info">
                  30 days from the date of this quote and subject to change
                  pending final formulation and pilot batch production
                </p>
              </Box>
              <Box className="d-flex align-items-center validity-details">
                <span className="d-block validity-title">Shipping - </span>
                <p className="d-block validity-info">FOB our plan</p>
              </Box>
              <Divider />
              <span className="d-block heading-name">Supplement Facts</span>
              <Stack direction="row" spacing={20}>
                <Box className="d-block">
                  <span className="d-block specification-title">
                    Serving Size
                  </span>
                  <span className="d-block specification-name">
                    2 Vegetable Capsule
                  </span>
                </Box>
                <Box className="d-block">
                  <span className="d-block specification-title">
                    Serving per container
                  </span>
                  <span className="d-block specification-name">30</span>
                </Box>
              </Stack>
              <Table className="quotation-table" >
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>Amount per serving</TableCell>
                    <TableCell>% Daily Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell>{row.item}</TableCell>
                      <TableCell>{row.amountServing}</TableCell>
                      <TableCell>{row.dailyValue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Box className="d-block">
                <span className="d-block specification-title">
                  Other Ingredients
                </span>
                <span className="d-block specification-name">
                  Vegetable cellulose capsule, nuflow
                </span>
              </Box>
              <Box className="comment-details">
                <span className="d-block name">Comment</span>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  placeholder="Write a comment here"
                  maxRows={4}
                  fullWidth
                />
              </Box>
              <p className="qutation-condition">
                The above labelling information is provided to you as a service
                only. You are solely responsible for the content and format of
                product labels on finished production, which must be done in
                accordance with all applicable regulations. This label copy is a
                pro-forma only based on customer-supplied product formulation
                and specifications. Final label copy will be issued upon
                finalizing the formula.
              </p>
            </Box>
          </Box>
          <Box className="d-flex justify-content-end">
            <Button
              className="outline-btn back-btn"
              variant="outlined"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button className="primary-btn " variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default QuotationCreateFPS;
