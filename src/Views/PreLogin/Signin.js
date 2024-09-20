import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "Redux-Store/authenticate/signin/signinThunk";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormField,
  Input,
  Container,
} from "@cloudscape-design/components";
import { LuEyeOff } from "react-icons/lu";
import { FiEye } from "react-icons/fi";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [items, setItems] = React.useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false); // Track visibility of error.message

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");
    setEmailInvalid(false);
    setPasswordInvalid(false);
    setShowErrorMessage(false); // Reset error message visibility

    let hasError = false;

    if (!email) {
      setEmailError("Email is required.");
      setEmailInvalid(true);
      hasError = true;
    }
    if (!password) {
      setPasswordError("Password is required.");
      setPasswordInvalid(true);
      hasError = true;
    }

    if (hasError) {
      return; // Prevent login if there are errors
    }

    dispatch(authSignIn({ email, password }))
      .unwrap()
      .then((response) => {
        console.log("Signin Response:", response.accessToken);
        localStorage.setItem("user", JSON.stringify(response));
        localStorage.setItem("userEmail", JSON.stringify(email));

        setItems([{
          type: "success",
          content: "Signin Successful!",
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setItems([]),
          id: "message_1",
        }]);
        navigate("/app/dashboard");
      })
      .catch((error) => {
        setEmailInvalid(true); // Mark email invalid if login fails
        setPasswordInvalid(true); // Mark password invalid if login fails
        setShowErrorMessage(true); // Show error message on failure
        setItems([{
          type: "error",
          content: `Signin Failed: ${error.message}`,
          dismissible: true,
          dismissLabel: "Dismiss message",
          onDismiss: () => setItems([]),
          id: "message_2",
        }]);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.detail.value);
    if (emailInvalid) setEmailInvalid(false); // Clear invalid state for email when typing
    if (emailError) setEmailError(""); // Clear error when typing
    if (showErrorMessage) setShowErrorMessage(false); // Hide error message when typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.detail.value);
    if (passwordInvalid) setPasswordInvalid(false); // Clear invalid state for password when typing
    if (passwordError) setPasswordError(""); // Clear error when typing
    if (showErrorMessage) setShowErrorMessage(false); // Hide error message when typing
    // Check if error message is visible and set both fields to valid
    if (showErrorMessage) {
      setEmailInvalid(false);
      setPasswordInvalid(false);
      setShowErrorMessage(false);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "24rem",
          height: "22rem",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.2)",
          zIndex: "12929",
        }}
      >
        <Container variant="borderless">
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h2>Welcome</h2>
            <p style={{ color: "gray", marginTop: "6px" }}>Login to your account</p>
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <FormField label="Email" errorText={emailError}>
              <Input
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
                invalid={emailInvalid} // Mark as invalid if emailInvalid is true
              />
            </FormField>
            <FormField label="Password" errorText={passwordError}>
              <div style={{ position: "relative", width: "100%" }}>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ paddingRight: "40px" }} // Adjust padding for the icon
                  invalid={passwordInvalid} // Mark as invalid if passwordInvalid is true
                />
                <div
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: "#8B8D97", // Adjust color as needed
                  }}
                >
                  {passwordVisible ? <FiEye /> : <LuEyeOff />}
                </div>
              </div>
            </FormField>
            {showErrorMessage && error && (
              <p style={{ color: "red", fontSize: '13px' }}>{error.message}</p>
            )}
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button href="/auth/forgot-password" variant="inline-link">
                Forgot Password
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0vh 2vw 0 2vw",
              }}
            >
              <Button
                fullWidth
                ariaExpanded
                variant="primary"
                disabled={loading}
                onClick={handleLogin}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </Container>
      </div>
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
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
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
    </div>
  );
};

export default Signin;
