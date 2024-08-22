import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";
import { Box } from "@cloudscape-design/components";

const pages = [
  { path: "/app/dashboard", label: "Dashboard" },
  { path: "/app/orders", label: "Orders" },
  { path: "/app/products", label: "Products" },
  { path: "/app/inventory", label: "Inventory" },
  { path: "/app/salesandreport", label: "Sales & Report" },
  { path: "/app/contentmanagement", label: "Content Management" },
  { path: "/app/customers", label: "CRM" },
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
    external: true,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to access current location
  const [activeHref, setActiveHref] = React.useState("");

  useEffect(() => {
    setActiveHref(location.pathname); // Set activeHref to current path
  }, [location.pathname]); // Update activeHref when location changes

  const handleFollow = (event) => {
    const { href, external } = event.detail;
    if (!external) {
      event.preventDefault();
      setActiveHref(href);
      navigate(href);
    }
  };

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: <Box variant="h4">Promode Agro Farms</Box> }}
      onFollow={handleFollow}
      items={[
        ...pages.map((page) => ({
          type: page.children ? "expandable-link-group" : "link",
          text: page.label === "Add more" ? (
            <span style={{ color: "black", fontWeight: "bold" }}>{page.label}</span>
          ) : (
            page.label
          ),
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
          external: page.external,
        })),
      ]}
    />
  );
};

export default Sidebar;
