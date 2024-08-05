import React, { Component } from "react";
import { Box, Grid,  } from "@mui/material";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export class AllergensNutritionalAnalysis extends Component {
  render() {
    return (
      <Box className="description-content">
        <h3>Allergens and Nutritional value</h3>
        <Box className="product-details-section" sx={{ mb: 3 }}>
          <Box class="details-head">
            <Box class="title">Allergens</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Milk</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Eggs</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Tree Nuts</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Fish</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Wheat</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Crustacean </label>
                  <OutlinedInput className="form-control" placeholder="No " />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Peanuts</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Soybeans</label>
                  <OutlinedInput className="form-control" placeholder="No" />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl variant="outlined" className="form-group">
                  <label>Sesame</label>
                  <OutlinedInput className="form-control" placeholder="No" />
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
            <Box class="title">Nutritional Analysis</Box>
          </Box>
          <Box component="form">
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Box className="title">Calories</Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Calories From Fat (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box className="title">Total fat</Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Saturated Fat (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Trans Fat (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Monosaturated Fat (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Poly Unsaturated Fat (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box className="title">Cholesterol</Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Cholesterol (mg)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box className="title">Total Carbohydrates</Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Dietary Fibers (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Sugars (grms)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box className="title">Protien</Box>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" className="form-group">
                      <label>Total Protein (mg)</label>
                      <OutlinedInput
                        className="form-control"
                        placeholder="N / A"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
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

export default AllergensNutritionalAnalysis;
