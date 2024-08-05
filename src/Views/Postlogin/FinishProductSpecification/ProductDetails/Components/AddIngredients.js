import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


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
    // "&:nth-of-type(odd)": {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // // hide last border
    // "&:last-child td, &:last-child th": {
    //   border: 0,
    // },
  }));
  
  const rows = [
    createData(
      "Vitamin C (ascorbic acid)",
      "50 mg",
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
    createData(
      "Olefresh T™ Olive Leaf Extract",
      "100mg",
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
    createData(
      "Olefresh T™ Olive Leaf Extract",
      "100mg",
      "100%",
      "Ingredient",
      "500.0  mg",
      "Ingredient"
    ),
  ];

export class AddIngredients extends Component {
  render() {
    return (
      <Box className="description-content">
        <h3>Add Ingredients</h3>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Allergens</Box>
          </Box>
          <Box component="form">
            <Grid
              container
              spacing={2}
              sx={{ mb: 2 }}
              flexDirection={"row"}
              alignItems={"end"}
              justifyContent={"space-between"}
            >
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Serving Size</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="2 vegetable Capsule"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4} align={"right"}>
                <Button
                  className="primary-outline-btn"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  New Row
                </Button>
              </Grid>
            </Grid>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ingredient</StyledTableCell>
                  <StyledTableCell align="right">Label Claim</StyledTableCell>
                  <StyledTableCell align="right">
                    Activity Level
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Percentage Overage
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    formulated Per Capsule
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
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
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
        </Box>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Other Ingredients</Box>
            <Box class="description">
              (IN DESCENDING ORDER OF PREDOMINANCE BY WEIGHT. LIST ACTUAL
              AMOUNTS)
            </Box>
          </Box>
          <Box component="form">
            <Grid
              container
              spacing={2}
              sx={{ mb: 2 }}
              flexDirection={"row"}
              alignItems={"end"}
              justifyContent={"space-between"}
            >
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Serving Size</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="2 vegetable Capsule"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4} align={"right"}>
                <Button
                  className="primary-outline-btn"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  New Row
                </Button>
              </Grid>
            </Grid>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Ingredient</StyledTableCell>
                  <StyledTableCell align="right">Label Claim</StyledTableCell>
                  <StyledTableCell align="right">
                    Activity Level
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Percentage Overage
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    formulated Per Capsule
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
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
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
        </Box>
      </Box>
    );
  }
}

export default AddIngredients;
