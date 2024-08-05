import React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";
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
import RawMaterials from "../../assets/img/icons/raw-materials.png";
import RawMaterialsActive from "../../assets/img/icons/raw-materials-active.png";
import VendorProfile from "../../assets/img/icons/vendor-profile.png";
import VendorProfileActive from "../../assets/img/icons/vendor-profile-active.png";
import PurchaseOrder from "../../assets/img/icons/purchase-orders.png";
import PurchaseOrderActive from "../../assets/img/icons/purchase-orders-active.png";
import LogOut from "../../assets/img/icons/log-out.png";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  {
    path: "/app/dashboard",
    label: "DashBoard",
    icon: Home,
    iconActive: HomeActive,
  },
  {
    path: "/app/orders",
    label: "Orders",
    icon: Quotations,
    iconActive: QuotationsActive,
  },
  {
    path: "/app/finish-product-specification",
    label: "Product",
    icon: Specification,
    iconActive: SpecificationActive,
  },
  {
    path: "/app/customers",
    label: "Inventory",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/customers",
    label: "Sales & Report",
    icon: Customers,
    iconActive: CustomersActive,
  },
  {
    path: "/app/customers",
    label: "Content Management",
    icon: Customers,

    iconActive: CustomersActive,
  },
  {
    path: "/app/inventory",
    label: "CRM",
    icon: Inventory,
    iconActive: InventoryActive,
   
  
  },
  
];

const bottomPages = [
  {
    type: "link",
    text: "Notifications",
    href: "#/notifications",
    info: <Badge color="red">23</Badge>,
  },
  {
    type: "link",
    text: "Documentation",
    href: "https://example.com",
    external: true
  }
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHref, setActiveHref] = React.useState(location.pathname);

  const handleFollow = (event) => {
    const { href, external } = event.detail;
    if (!external) {
      event.preventDefault();
      setActiveHref(href);
      navigate(href);
    }
    // Handle external link behavior here, if necessary
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SideNavigation
        activeHref={activeHref}
        header={{ href: "/app/dashboard", text: "PTR Technologies" }}
        onFollow={handleFollow}
        items={[
          ...pages.map((page) => ({
            type: page.children ? "expandable-link-group" : "link",
            text: page.label === "Add more" ? <span style={{ color: "black", fontWeight: "bold" }}>{page.label}</span> : page.label,
            href: page.path,
            items: page.children
              ? page.children.map((child) => ({
                  type: "link",
                  text: child.label,
                  href: child.path,
                }))
              : [],
          })),
          { type: "divider" },
          ...bottomPages.map((page) => ({
            type: "link",
            text: page.text,
            href: page.href,
            info: page.info,
            external: page.external  
          })),
        ]}
      />
    </div>
  );
};

export default Sidebar;
