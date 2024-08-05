import React, { Component } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Home from "../../assets/img/icons/home.png";
import HomeActive from "../../assets/img/icons/home-active.png";
import Quotations from "../../assets/img/icons/quotations.png";
import QuotationsActive from "../../assets/img/icons/quotations-active.png";
import Specification from "../../assets/img/icons/specification.png";
import SpecificationActive from "../../assets/img/icons/specification-active.png";
import Customers from "../../assets/img/icons/customers.png";
import CustomersActive from "../../assets/img/icons/customers-active.png";
import Inventory from "../../assets/img/icons/inventory.png";
import InventoryActive from "../../assets/img/icons/inventory-active.png";
import Products from "../../assets/img/icons/products.png";
import ProductsActive from "../../assets/img/icons/products-active.png";
import BatchSheet from "../../assets/img/icons/batchsheet.png";
import BatchSheetActive from "../../assets/img/icons/batchsheet-active.png";
import Orders from "../../assets/img/icons/orders.png";
import OrdersActive from "../../assets/img/icons/orders-active.png";
import RawMaterials from "../../assets/img/icons/raw-materials.png";
import RawMaterialsActive from "../../assets/img/icons/raw-materials-active.png";
import VendorProfile from "../../assets/img/icons/vendor-profile.png";
import VendorProfileActive from "../../assets/img/icons/vendor-profile-active.png";
import PurchaseOrder from "../../assets/img/icons/purchase-orders.png";
import PurchaseOrderActive from "../../assets/img/icons/purchase-orders-active.png";
import Setting from "../../assets/img/icons/settings.png";
import LogOut from "../../assets/img/icons/log-out.png";

import { Link } from "react-router-dom";

const pages = [
  {
    path: "/app/dashboard",
    label: "DashBoard",
    icon: Home,
    iconActive: HomeActive,
  },
  {
    path: "/app/quotations",
    label: "Quotations",
    icon: Quotations,
    iconActive: QuotationsActive,
  },

  {
    path: "/app/finish-product-specification",
    label: "Finish Product Specification",
    icon: Specification,
    iconActive: SpecificationActive,
  },
  {
    path: "/app/customers",
    label: "Customers",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/inventory",
    label: "Inventory",
    icon: Inventory,
    iconActive: InventoryActive,
    children: [
      {
        path: "/app/inventory/raw-materials",
        label: "Raw Materials",
        icon: RawMaterials,
        iconActive: RawMaterialsActive,
      },
      {
        path: "/app/inventory/vendor-profile",
        label: "Vendor Profile",
        icon: VendorProfile,
        iconActive: VendorProfileActive,
      },
      {
        path: "/app/inventory/purchase-orders",
        label: "Purchase Order",
        icon: PurchaseOrder,
        iconActive: PurchaseOrderActive,
      },
    ],
  },
  {
    path: "/app/products",
    label: "Products",
    icon: Products,
    iconActive: ProductsActive,
  },
  {
    path: "/app/batch-sheet",
    label: "Batch Sheet",
    icon: BatchSheet,
    iconActive: BatchSheetActive,
  },
  {
    path: "/app/orders",
    label: "Orders",
    icon: Orders,
    iconActive: OrdersActive,
  },
];

const bottomPages = [
  {
    path: "/app/setting",
    label: "Setting",
    icon: Setting,
    iconActive: Setting,
  },
  {
    path: "/app/logout",
    label: "Log Out",
    icon: LogOut,
    iconActive: LogOut,
  },
];

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuCollapse: false,
    };
  }

  componentDidMount() {
    if (window.location.pathname.includes("/app/inventory")) {
      this.setState({
        menuCollapse: true,
      });
    }
  }

  handleClick = () => {
    this.setState({
      menuCollapse: !this.state.menuCollapse,
    });
  };

  render() {
    const { menuCollapse } = this.state;
    let currentLocation = window.location.pathname;
    return (
      <div className="sidebar">
        <SimpleBar
          className="sidebar-inner"
          style={{ height: "calc(100% - 200px)" }}
        >
          <List
            sx={{ width: "100%", maxWidth: 200 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            {pages.map((page, index) => {
              return (
                <React.Fragment key={page.label}>
                  <ListItemButton
                    className={`menu-item ${
                      currentLocation.includes(page.path.toString())
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      page?.children ? this.handleClick() : <></>
                    }
                  >
                    <Link to={page.path}>
                      <ListItemIcon className="icon">
                        <img
                          src={
                            currentLocation.includes(page.path.toString())
                              ? page.iconActive
                              : page.icon
                          }
                          alt={page.label}
                        />
                      </ListItemIcon>
                      <ListItemText primary={page.label} className="text" />
                    </Link>
                    {page?.children ? (
                      <>{menuCollapse ? <ExpandLess /> : <ExpandMore />}</>
                    ) : (
                      <></>
                    )}
                  </ListItemButton>

                  {page?.children ? (
                    <Collapse in={menuCollapse}>
                      <List component="div" disablePadding>
                        {page?.children ? (
                          page.children.map((child) => {
                            return (
                              <ListItemButton
                                className={`sub-menu-item ${
                                  currentLocation.includes(
                                    child.path.toString()
                                  )
                                    ? "active"
                                    : ""
                                }`}
                                key={page.label}
                              >
                                <Link to={child.path}>
                                  <ListItemIcon className="icon">
                                    <img
                                      src={
                                        currentLocation.includes(
                                          child.path.toString()
                                        )
                                          ? child.iconActive
                                          : child.icon
                                      }
                                      alt={child.label}
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={child.label}
                                    className="text"
                                  />
                                </Link>
                              </ListItemButton>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </List>
                    </Collapse>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              );
            })}
          </List>
        </SimpleBar>
        <Box className="sidebar-bottom-nav">
          <Box className="sidebar-inner">
            <List
              sx={{ width: "100%", maxWidth: 200 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {bottomPages.map((page, index) => {
                return (
                  <ListItemButton
                    className={`menu-item ${
                      currentLocation.includes(page.path.toString())
                        ? "active"
                        : ""
                    }`}
                    key={page.label}
                  >
                    <Link to={page.path}>
                      <ListItemIcon className="icon">
                        <img
                          src={
                            currentLocation.includes(page.path.toString())
                              ? page.iconActive
                              : page.icon
                          }
                          alt={page.label}
                        />
                      </ListItemIcon>
                      <ListItemText primary={page.label} className="text" />
                    </Link>
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        </Box>
      </div>
    );
  }
}
export default Sidebar;
