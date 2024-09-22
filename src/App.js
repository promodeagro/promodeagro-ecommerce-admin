import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Views from "./Views/index";
import Sidebar from "./components/Sidebar"; // Ensure correct relative import here
import { AppLayout } from "@cloudscape-design/components";
import PTRLogo from "../src/assets/img/PTRLogo.png"; // Ensure the logo is correctly placed in your assets
import { AuthProvider } from "./context/Authcontext"; // Import the AuthProvider


function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <Router>
        <MainLayout />
      </Router>
    </AuthProvider>
  );
}


function MainLayout() {
  const location = useLocation();
  const isAuthRoute = location.pathname.startsWith("/auth");

  return (
    <>
      {/* Logo and wave for auth routes */}
      {isAuthRoute && (
        <>
          <img 
            src={PTRLogo}
            alt="Auth Route Logo"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              width: "180px", // Adjust the size of the logo as needed
              height: "auto",
              zIndex: 10
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 1130 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#9f4bad", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#f8a4b8", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#e2e290", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path 
                fill="url(#gradient)" 
                fillOpacity="0.98" 
                d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,117.3C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </>
      )}

      {/* Header only for non-auth routes */}
      {!isAuthRoute && <Header id="header" />} 

      {/* AppLayout handles sidebar and main content */}
      <AppLayout
        headerSelector="#header"
        headerVariant="high-contrast"
        navigation={!isAuthRoute && <Sidebar />} // Sidebar is hidden for auth routes
        toolsHide={true}
        navigationHide={isAuthRoute} // Hide navigation if it's an auth route
        navigationWidth={250}
        content={<MainContent />} // Main content component
      />
    </>
  );
}

function MainContent() {
  return (
    <Routes>
      {/* Default route redirects to signin */}
      <Route path="/" element={<Navigate to="/auth/signin" />} />
      {/* Wildcard route handles all Views-related routes */}
      <Route path="*" element={<Views />} />
    </Routes>
  );
}

export default App;
