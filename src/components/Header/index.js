import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { Input } from "@cloudscape-design/components";
import logo from '../../assets/img/logo_PTR 1.png';
import { authSignOut } from "Redux-Store/authenticate/signout/signoutThunk";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const handleSignOut = () => {
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        const parsedUserData = JSON.parse(userData);
        const token = parsedUserData.accessToken;
        if (token) {
          dispatch(authSignOut({ accessToken: token }))
            .unwrap()
            .then((response) => {
              console.log("Sign-out Response:", response);
              localStorage.removeItem("user");
              localStorage.removeItem("email");
              localStorage.removeItem("userEmail");
              navigate("/auth/signin");
            })
            .catch((error) => {
              console.error("Sign-out failed:", error);
            });
        } else {
          console.error("No access token found in user data.");
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    } else {
      console.warn("No user data found.");
    }
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 1000, background: "#fff" }}>
      <TopNavigation
        search={<Input type="search" placeholder="Search" ariaLabel="Search" />}
        identity={{
          href: "/app/dashboard",
          title: "Ecommerce",
          logo: {
            src: logo,
            alt: "Service",
          },
        }}
        utilities={[
          {
            type: "menu-dropdown",
            text: "User Menu",
            description: userEmail,
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "signout", text: "Sign out" }
            ],
            onItemClick: (item) => {
              if (item.detail.id === "signout") {
                handleSignOut();
              }
            },
          }
        ]}
      />
    </div>
  );
};

export default Header;
