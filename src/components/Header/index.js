import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/img/logo.png";
import Sun from "../../assets/img/sun.png";
import Clock from "../../assets/img/clock.png";
import Bell from "../../assets/img/bell.png";
import ProfileImg from "../../assets/img/profile-img.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="logo">
              <img src={Logo} alt="" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="search-box">
              <TextField fullWidth id="fullWidth" />
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="header-right-box">
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="header-icons-box"
              >
                <ListItemButton className="icons-box">
                  <ListItemIcon className="icon">
                    <img src={Sun} alt="" />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton className="icons-box">
                  <ListItemIcon className="icon">
                    <img src={Clock} alt="" />
                  </ListItemIcon>
                </ListItemButton>
                <ListItemButton className="icons-box">
                  <ListItemIcon className="icon bell-badge">
                    <img src={Bell} alt="" />
                  </ListItemIcon>
                </ListItemButton>
              </List>
              <Box className="header-profile-box">
                <Avatar
                  alt="Surendra"
                  src={ProfileImg}
                  className="profile-image"
                />
                <Box className="profile-text">
                  <h6>Surendra</h6>
                  <span>Admin</span>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Header;
