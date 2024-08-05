import React, { Component } from "react";
import { Box, Grid,  Input } from "@mui/material";

export class Signature extends Component {
  render() {
    return (
      <Box className="description-content">
        <h3>Signature</h3>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Signature</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Box className="prepared-content">
                  <label className="customer">Prepared By :</label>
                  <Input
                    style={{ minWidth: 320 }}
                    className="form-control"
                    placeholder="Surendra Vallabhaneni, V.P. of Product Development"
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
                    placeholder="Adrian Balmater, Director Of Quality"
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
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Customer Approval</Box>
          </Box>
          <Box component="form">
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
    );
  }
}

export default Signature;
