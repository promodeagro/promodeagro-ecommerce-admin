import React, { Component } from "react";
import { Box, Stack, Button, Checkbox, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShareIcon from "@mui/icons-material/Share";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import PdfIcon from "../../../../assets/img/finish-product/pdf-icon.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffffff",
    color: "#667085",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name, size, date, by) {
  return { name, size, date, by };
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
  createData("Certificate of Analysis", "200 KB", "Jan 4, 2022", "Admin"),
  createData("Certificate of Analysis", "200 KB", "Jan 4, 2022", "Admin"),
  createData("Certificate of Analysis", "200 KB", "Jan 4, 2022", "Admin"),
  createData("Certificate of Analysis", "200 KB", "Jan 4, 2022", "Admin"),
  createData("Certificate of Analysis", "200 KB", "Jan 4, 2022", "Admin"),
];

export class PurchasedOrder extends Component {
  render() {
    return (
      <Box className="main-container">
        <Box className="purchased-order-container">
          <Box className="specifications-head d-flex align-items-center justify-content-between">
            <Box className="d-block">
              <h2>Order ID : FN2272635423</h2>
            </Box>
            <Stack
              direction="row"
              className="specifications-cantent"
              spacing={2}
            >
              <Link href={`#`}>
                <MailOutlineIcon className="specifications-icon" />
                <label>Mail</label>
              </Link>
              <Link href={`#`}>
                <ShareIcon className="specifications-icon" />
                <label>Share</label>
              </Link>
              <Link href={`#`}>
                <PictureAsPdfIcon className="specifications-icon" />
                <label>Print/PDF</label>
              </Link>
            </Stack>
          </Box>
          <Box className="attached-documents-section">
            <Box className="d-flex align-items-center justify-content-between">
              <h4>Attached Documents</h4>
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
                      <StyledTableCell align="center">
                        File size
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Date uploaded
                      </StyledTableCell>
                      <StyledTableCell >
                        Uploaded by
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell>
                          <Checkbox
                            color="primary"
                            size="small"
                            sx={{ mr: 0.5 }}
                          />
                          <IconButton className="pdf-icon">
                            <img src={PdfIcon} alt="" />
                          </IconButton>
                          <Box className="file-name">
                            {row.name}
                            <p>200 KB</p>
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.size}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.date}
                        </StyledTableCell>
                        <StyledTableCell>
                          <Box className="d-flex align-items-center justify-content-between">
                            {row.by}
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
            <Box  sx={{ mt: 3 }} flexDirection={"row"}  align={"right"}>
              <Button
                className="primary-outline-btn"
                variant="outlined"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Back
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default PurchasedOrder;
