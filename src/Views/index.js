import React, { lazy, Suspense, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import { AuthContext } from "context/Authcontext"; 

const Inventory = lazy(() => import("./Postlogin/Inventory"));
const SalesAndReport = lazy(() => import("./Postlogin/salesAndReport"));
const ContentManagement = lazy(() => import("./Postlogin/ContentManagement"));
const OrderDetail = lazy(() => import("./Postlogin/Orders/OrderDetail"));
const Refund = lazy(() => import("./Postlogin/Orders/OrderDetail/Refund"));
const ProductDetail = lazy(() => import("./Postlogin/Products/ProductDetails"));
const Invoice = lazy(() => import("./Postlogin/Orders/OrderDetail/Invoice"));
const Dashboards = lazy(() => import("./Postlogin/Dashboard"));
const Customers = lazy(() => import("./Postlogin/Customers"));
const AddNewCustomer = lazy(() => import("./Postlogin/Customers/AddNewCustomer"));
const Products = lazy(() => import("./Postlogin/Products"));
const Orders = lazy(() => import("./Postlogin/Orders"));
const PathNotFound = lazy(() => import("./PathNotFound"));
const Signin = lazy(() => import("./PreLogin/Signin"));
const ForgotPassword = lazy(() => import("./PreLogin/ForgotPassword"));
const OtpVerification = lazy(() => import("./PreLogin/otpVerification"));
const NewPassword = lazy(() => import("./PreLogin/newPassword"));

// Protected Route Wrapper: Ensures user is authenticated
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to={`${PREFIX_AUTH_PATH}/signin`} />;
};

const Views = () => {
  const { isAuthenticated } = useContext(AuthContext); // Access authentication state

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Protected Routes */}
        <Route path="/app/dashboard" element={isAuthenticated ? <Dashboards /> : <Navigate to="/auth/signin" />} />

        <Route
          exact
          path={`${PREFIX_APP_PATH}/orders`}
          element={<ProtectedRoute element={<Orders />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/salesandreport`}
          element={<ProtectedRoute element={<SalesAndReport />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/contentmanagement`}
          element={<ProtectedRoute element={<ContentManagement />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/inventory`}
          element={<ProtectedRoute element={<Inventory />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/customers`}
          element={<ProtectedRoute element={<Customers />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/add-new-customer`}
          element={<ProtectedRoute element={<AddNewCustomer />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/products`}
          element={<ProtectedRoute element={<Products />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/products/:id`}
          element={<ProtectedRoute element={<ProductDetail />} isAuthenticated={isAuthenticated} />}
        />
        {/* Authentication Routes */}
        <Route
          exact
          path={`${PREFIX_AUTH_PATH}/signin`}
          element={<Signin />}
        />
        <Route
          exact
          path={`${PREFIX_AUTH_PATH}/forgot-password`}
          element={<ForgotPassword />}
        />
        <Route
          exact
          path={`${PREFIX_AUTH_PATH}/otp-verification`}
          element={<OtpVerification />}
        />
        <Route
          exact
          path={`${PREFIX_AUTH_PATH}/newpassword`}
          element={<NewPassword />}
        />
        {/* Default Route */}
        <Route exact path="/" element={<Navigate to={`${PREFIX_APP_PATH}/dashboard`} isAuthenticated={isAuthenticated} />} />
        {/* Specific Order Routes */}
        <Route
          exact
          path={`${PREFIX_APP_PATH}/order/orderdetail/:id`}
          element={<ProtectedRoute element={<OrderDetail />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/order/orderdetail/refund`}
          element={<ProtectedRoute element={<Refund />} isAuthenticated={isAuthenticated} />}
        />
        <Route
          exact
          path={`${PREFIX_APP_PATH}/order/orderdetail/invoice/:id`}
          element={<ProtectedRoute element={<Invoice />} isAuthenticated={isAuthenticated} />}
        />
        {/* Catch-all for 404 */}
        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Views;
