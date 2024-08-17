import React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";

import { useNavigate } from "react-router-dom";
import { Box } from "@cloudscape-design/components";

const pages = [
  {
    path: "/app/dashboard",
    label: "Dashboard", 
  },
  {
    path: "/app/orders",
    label: "Orders",
  },
  {
    path: "/app/products",
    label: "Product",
  
  },
  {
    path: "/app/inventory",
    label: "Inventory",
 
  },
  {
    path: "/app/salesandreport",
    label: "Sales & Report",
  
  },
  {
    path: "/app/contentmanagement",
    label: "Content Management",
   
  },
  {
    path: "/app/customers",
    label: "CRM",  
 
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

  const navigate = useNavigate();
  const [activeHref, setActiveHref] = React.useState("/app/dashboard");

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
   
      <SideNavigation
        activeHref={activeHref}
        header={{ href: "#/", text: <Box variant="h4">Promode Agro Farms</Box> }}
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
  
  );
};

export default Sidebar;

