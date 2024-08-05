import React, { Component } from "react";
import { Box, Grid,  } from "@mui/material";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export class DescPackage extends Component {
  render() {
    return (
      <Box className="description-content">
        <h3>Description and Packging</h3>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Product Details</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Product Name</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Neurovite Plus"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Customer Name</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Brain MD"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>SKU / Product Code(s)</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="DRBHEART60C"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Description</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Dosage Form</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Clear Vegetable Capsule "
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Odor</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="#00 Elongated"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Size</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="#00 Elongated"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Taste</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="#00 Elongated"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Shape</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Capsule "
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Color / Color of Fill </label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Capsule "
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Coating</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Capsule"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Select Package Type</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Bottle"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button className="primary-btn" variant="contained">
              Add New Field
            </Button>
          </Box>
        </Box>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Packaging</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Bottle Type</label>
                  <OutlinedInput className="form-control" placeholder="Glass" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Bottle Color</label>
                  <OutlinedInput className="form-control" placeholder="Amber" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Cap Type</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Ribbed"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Cap Color</label>
                  <OutlinedInput className="form-control" placeholder="White" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Neck Band</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Ribbed"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Inner Seal</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="HS035 liner (lift and peel)"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Desiccant</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="Ribbed"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Insert</label>
                  <OutlinedInput className="form-control" placeholder="Yes" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Rayon</label>
                  <OutlinedInput className="form-control" placeholder="Yes" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Full Body Seal</label>
                  <OutlinedInput className="form-control" placeholder="Yes" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Case Divider</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Case Label</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className="form-group">
                  <label>Lot / Best By</label>
                  <OutlinedInput
                    type="date"
                    className="form-control"
                    placeholder=""
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>SKU / Product Code </label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="DRHEART60"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Count</label>
                  <OutlinedInput className="form-control" placeholder="60" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Bottle Size</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="200 c.c"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Cap Size</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="45 m.m"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Label Code</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="DRHEART60C"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Cartoon Code</label>
                  <OutlinedInput className="form-control" placeholder="N/A" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Case</label>
                  <OutlinedInput
                    className="form-control"
                    placeholder="12 case"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button className="primary-btn" variant="contained">
              Add New Field
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default DescPackage;
