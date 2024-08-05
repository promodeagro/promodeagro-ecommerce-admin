import React, { Component } from "react";
import { Box, Stack, Checkbox, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#eaedfe",
    color: "#7F56D9",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

function attachData(name, icon, date, by) {
  return { name, icon, date, by };
}

const data = [
  attachData(
    "Product Specification Sheet",
    <CheckCircleIcon className="check-icon" />,
    "Jan 4, 2022",
    "Admin"
  ),
  attachData(
    "Product Specification Sheet",
    <CheckCircleIcon className="check-icon" />,
    "Jan 4, 2022",
    "Admin"
  ),
  attachData(
    "Product Specification Sheet",
    <CheckCircleIcon className="check-icon" />,
    "Jan 4, 2022",
    "Admin"
  ),
  attachData(
    "Product Specification Sheet",
    <CloudUploadOutlinedIcon className="upload-icon" />,
    "Jan 4, 2022",
    "Admin"
  ),
  attachData(
    "Product Specification Sheet",
    <CheckCircleIcon className="check-icon" />,
    "Jan 4, 2022",
    "Admin"
  ),
];

export class AttachDocuments extends Component {
  render() {
    return (
      <Box className="description-content">
        <h3>Attach Documents</h3>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head d-flex align-items-center justify-content-between">
            <Box class="title">Additional Testing</Box>
            <Stack direction="row" spacing={2}>
              <Button className="btn-outline-secondary" variant="outlined">
                Download
              </Button>
              <Button
                className="primary-btn "
                variant="contained"
                startIcon={<CloudUploadOutlinedIcon />}
              >
                Upload
              </Button>
            </Stack>
          </Box>
          <Box className="purchased-order-table" sx={{ mt: 2 }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>
                      {" "}
                      <Checkbox
                        color="primary"
                        size="small"
                        sx={{ mr: 0.5 }}
                      />{" "}
                      File name
                    </StyledTableCell>
                    <StyledTableCell align="center">File size</StyledTableCell>
                    <StyledTableCell align="center">
                      Date uploaded
                    </StyledTableCell>
                    <StyledTableCell>Uploaded by</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((data) => (
                    <StyledTableRow key={data.name}>
                      <StyledTableCell>
                        <Checkbox
                          color="primary"
                          size="small"
                          sx={{ mr: 0.5 }}
                        />
                        <IconButton className="pdf-icon">
                          <InsertDriveFileOutlinedIcon />
                        </IconButton>
                        <Box className="file-name">
                          {data.name}
                          <p>200 KB</p>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.icon}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.date}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Box className="d-flex align-items-center justify-content-between">
                          {data.by}
                          <IconButton>
                            <MoreVertIcon />
                          </IconButton>
                        </Box>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AttachDocuments;
