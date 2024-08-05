import React, { Component } from "react";
import { Box, Button, Stack, Grid, Divider, Input } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShareIcon from "@mui/icons-material/Share";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#eaedfe",
    color: "#7F56D9",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name, calories, fat, carbs, protein, analysis) {
  return { name, calories, fat, carbs, protein, analysis };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  createData(
    "Vitamin C (ascorbic acid)",
    "50mg",
    "99%",
    "5%",
    "26.7 mg",
    "Ingredient"
  ),
  createData(
    "Bergamonte Citrus Bergamia",
    "1000mg",
    "100%",
    "Ingredient",
    "500.0  mg",
    "Ingredient"
  ),
  createData(
    "Olefresh T™ Olive Leaf Extract",
    "100mg",
    "100%",
    "Ingredient",
    "500.0  mg",
    "Ingredient"
  ),
];

export class ViewFpsDetails extends Component {
  render() {
    return (
      <Box className="main-container">
        <Box className="viewFpsDetails-container">
          <Box className="list-heading d-flex align-items-center justify-content-between">
            <Box className="d-block">
              <h2>Finish Product Specifications</h2>
            </Box>
          </Box>
          <Box className="specifications-head d-flex align-items-center justify-content-between">
            <Stack
              className="specifications-cantent"
              direction="row"
              spacing={2}
            >
              <Link to={`#`}>
                <BorderColorIcon className="specifications-icon" />
                <label>Edit</label>
              </Link>
              <Link to={`#`}>
                <MailOutlineIcon className="specifications-icon" />
                <label>Mail</label>
              </Link>
              <Link to={`#`}>
                <ShareIcon className="specifications-icon" />
                <label>Share</label>
              </Link>
              <Link to={`#`}>
                <PictureAsPdfIcon className="specifications-icon" />
                <label>Print/PDF</label>
              </Link>
              <Link href={`/app/finish-product-specification/purchased-order`}>
                <RemoveRedEyeOutlinedIcon className="specifications-icon" />
                <label>View Attachments </label>
              </Link>
            </Stack>
            <Button className="primary-btn " variant="contained">
              Back
            </Button>
          </Box>
          <Box className="details-section">
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Product Details</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Product Name</label>
                    <span>Neurovite Plus</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Product Name</label>
                    <span>Neurovite Plus</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Product Name</label>
                    <span>Neurovite Plus</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Product Name</label>
                    <span>Neurovite Plus</span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Description</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Dosage Form</label>
                    <span>Clear Vegetable capsule</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Odor</label>
                    <span>#00 Elongated</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Size</label>
                    <span>#00 Elongated</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Taste</label>
                    <span>#00 Elongated</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Select Package Type</label>
                    <span>Bottle</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Shape</label>
                    <span>Capsule</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Colour / Colour of Fill</label>
                    <span>Capsule</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Coating</label>
                    <span>Admin</span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Packaging</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Bottle Type</label>
                    <span>Glass</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Bottle Color</label>
                    <span>Amber</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Cap Type</label>
                    <span>Ribbed</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Cap Color</label>
                    <span>White</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Cap Color</label>
                    <span>White</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Inner Seal</label>
                    <span>HS035 Liner (lift and peel)</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Desiccant</label>
                    <span>Ribbed</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Insert</label>
                    <span>Yes</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Rayon</label>
                    <span>Yes</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Full Body Seal</label>
                    <span>Yes</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Case Divider</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Case Label</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Lot / Best By</label>
                    <span>05/05/2026</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>SKU / Product Code</label>
                    <span>DRHEART60</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Count</label>
                    <span>60</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Bottle Size</label>
                    <span>200 c.c</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Label Code</label>
                    <span>DHEART60C</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Cap Size</label>
                    <span>45 m.m</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Cartoon Code</label>
                    <span>N/A</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Case </label>
                    <span>12 Pack</span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Ingredients</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <label>Serving Size</label>
                    <span>2 Vegetable Capsule</span>
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ my: 2 }}
                  >
                    <Grid item xs={11}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Ingredient</StyledTableCell>
                              <StyledTableCell align="right">
                                Label Claim
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Activity Level
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Percent Overage
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Formulated Per Capsule
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Analysis Method
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.calories}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.fat}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.carbs}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.protein}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.analysis}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Other Ingredients</Box>
                <Box className="description">
                  (IN DESCENDING ORDER OF PREDOMINANCE BY WEIGHT. LIST ACTUAL
                  AMOUNTS)
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <label>Serving Size</label>
                    <span>2 Vegetable Capsule</span>
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ my: 2 }}
                  >
                    <Grid item xs={11}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Ingredient</StyledTableCell>
                              <StyledTableCell align="right">
                                Label Claim
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Activity Level
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Percent Overage
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Formulated Per Capsule
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Analysis Method
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.calories}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.fat}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.carbs}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.protein}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.analysis}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Allergens</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Milk</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Eggs</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Tree Nuts</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Fish</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Wheat</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Crustacean</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Peanuts</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Soyabean</label>
                    <span>No</span>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="details-content">
                    <label>Sesame</label>
                    <span>No</span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Nutritional Analysis</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <Box className="title">Calories</Box>
                    <label>Calories from Fat(grms)</label>
                    <span>N/A</span>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <Box className="title">Total Fat </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <label>Saturated Fat (grms) </label>
                        <span>N/A</span>
                      </Grid>
                      <Grid item xs={3}>
                        <label>Trans Fat (grms) </label>
                        <span>N/A</span>
                      </Grid>
                      <Grid item xs={3}>
                        <label>Monosaturated Fat (grms)</label>
                        <span>N/A</span>
                      </Grid>
                      <Grid item xs={3}>
                        <label>Polu unsaturated Fat (grms) </label>
                        <span>N/A</span>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <Box className="title">Cholesterol</Box>
                    <label>Cholesterol (mg)</label>
                    <span>A</span>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <Box className="title">Total Carbohyderates </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <label>Dietary Fibers (grms)</label>
                        <span>N/A</span>
                      </Grid>
                      <Grid item xs={3}>
                        <label>Sugar (grms)</label>
                        <span>N/A</span>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <Box className="title">Protein</Box>
                    <label>Total Protein (mg)</label>
                    <span>N/A</span>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Additional Testing</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className="details-content">
                    <label>Serving Size</label>
                    <span>2 Vegetable Capsule</span>
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    sx={{ my: 2 }}
                  >
                    <Grid item xs={11}>
                      <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 700 }}
                          aria-label="customized table"
                        >
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>Ingredient</StyledTableCell>
                              <StyledTableCell align="right">
                                Label Claim
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Activity Level
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Percent Overage
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Formulated Per Capsule
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Analysis Method
                              </StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                  {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.calories}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.fat}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.carbs}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.protein}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                  {row.analysis}
                                </StyledTableCell>
                              </StyledTableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box className="product-details">
              <Box className="details-head">
                <Box className="title">Signature</Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box className="prepared-content">
                    <label className="customer">Prepared By :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue="Surendra Vallabhaneni, V.P. of Product Development"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label className="customer">Signatures :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label>Date :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className="prepared-content">
                    <label className="customer">Reviewed By :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue="Adrian Balmater, Director Of Quality"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label className="customer">Signatures :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label>Date :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box className="approval-heading">Customer Approval</Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label className="customer">Name :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label>Title :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label className="customer">Signatures :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="prepared-content">
                    <label>Date :</label>
                    <Input
                      style={{ minWidth: 320 }}
                      className="form-control"
                      defaultValue=""
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default ViewFpsDetails;
