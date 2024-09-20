import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { Input } from "@cloudscape-design/components";
import logo from '../../assets/img/logo_PTR 1.png';
import { authSignOut } from "Redux-Store/authenticate/signout/signoutThunk";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");
  const handleSignOut1 = (item) => {
    if (item.detail.id === "signout") {
      handleSignOut();
    }
  };

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

  useEffect(() => {
    const checkTokenExpiration = () => {
      const userData = localStorage.getItem("user");

      if (userData) {
        try {
          const parsedUserData = JSON.parse(userData);
          const token = parsedUserData.accessToken;

          if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;  

            if (decodedToken.exp < currentTime) {
              handleSignOut();  // Token is expired, sign out the user
            }
          }
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    };

    checkTokenExpiration();  // Call the token check function when the component renders
  }, []);

  return (
    <>
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
              text: "User",
              description: userEmail,
              iconName: "user-profile",
              items: [
                { id: "profile", text: "Profile" },
                {
                  variant: "primary-button",
                  id: "signout",
                  text: "Sign out",
                },
              ],
              onItemClick: handleSignOut1,
            },
          ]}
        />
      </div>
    </>
  );
};

export default Header;
