import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import Inventory from "./Postlogin/Inventory";
import SalesAndReport from "./Postlogin/salesAndReport";
import ContentManagement from "./Postlogin/ContentManagement";
import OrderDetail from "./Postlogin/Orders/OrderDetail";
import Refund from "./Postlogin/Orders/OrderDetail/Refund";
import ProductDetail from "./Postlogin/Products/ProductDetails";
import Invoice from "./Postlogin/Orders/OrderDetail/Invoice";
const Dashboards = lazy(() => import("./Postlogin/Dashboard"));
const Customers = lazy(() => import("./Postlogin/Customers"));
const AddNewCustomer = lazy(() =>
  import("./Postlogin/Customers/AddNewCustomer")
);
const Products = lazy(() => import("./Postlogin/Products"));
const Orders = lazy(() => import("./Postlogin/Orders"));

const PathNotFOund = lazy(() => import("./PathNotFound"));

const ForgotPassword = lazy(() => import("./PreLogin/ForgotPassword"));
const Views = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            exact
            path={`${PREFIX_APP_PATH}/dashboard`}
            element={<Dashboards />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/orders`}
            element={<Orders />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/salesandreport`}
            element={<SalesAndReport />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/contentmanagement`}
            element={<ContentManagement />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory`}
            element={<Inventory />}
          />

          <Route
            exact
            path={`${PREFIX_APP_PATH}/customers`}
            element={<Customers />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-new-customer`}
            element={<AddNewCustomer />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/products`}
            element={<Products />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/products/:id`}
            element={<ProductDetail/>}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/forgot-password`}
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/app/inventory"
            element={<Navigate to="/app/inventory" />}
          />
          <Route exact path="/" element={<Navigate to="/app/dashboard" />} />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/order/orderdetail/:id`}
            element={<OrderDetail />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/order/orderdetail/refund`}
            element={<Refund />}
          />
                    <Route
            exact
            path={`${PREFIX_APP_PATH}/order/orderdetail/invoice/:id`}
            element={<Invoice />}
          />


          <Route path="*" element={<PathNotFOund />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
