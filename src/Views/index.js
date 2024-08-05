import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PREFIX_APP_PATH, PREFIX_AUTH_PATH } from "./../Config/Config";
import ViewFpsDetails from "./Postlogin/FinishProductSpecification/ViewFpsDetails";
import PurchasedOrder from "./Postlogin/FinishProductSpecification/PurchasedOrder";
import QuotationCreateFPS from "./Postlogin/Quatations/QuotationCreateFPS";
import ProductDetails from "./Postlogin/FinishProductSpecification/ProductDetails";
import QuatationsForm from "./Postlogin/Quatations/QutationForm";
const Dashboards = lazy(() => import("./Postlogin/Dashboard"));
const Quotations = lazy(() => import("./Postlogin/Quatations"));
const FinishProductSpecification = lazy(() =>
  import("./Postlogin/FinishProductSpecification")
);
const Customers = lazy(() => import("./Postlogin/Customers"));
const AddNewCustomer = lazy(() => import("./Postlogin/Customers/AddNewCustomer"));
const Products = lazy(() => import("./Postlogin/Products"));
const BatchSheet = lazy(() => import("./Postlogin/BatchSheet"));
const Orders = lazy(() => import("./Postlogin/Orders"));
const RawMaterials = lazy(() => import("./Postlogin/Inventory/RawMaterials"));
const AddProduct = lazy(() => import("./Postlogin/Inventory/RawMaterials/AddProduct"));
const VendorProfile = lazy(() => import("./Postlogin/Inventory/VendorProfile"));
const AddNewVendor = lazy(() => import("./Postlogin/Inventory/VendorProfile/AddNewVendor"));
const PurchaseOrders = lazy(() =>
  import("./Postlogin/Inventory/PurchaseOrders")
);
const PathNotFOund = lazy(() => import("./PathNotFound"));
const Signin = lazy(() => import("./PreLogin/Signin"));
const Signup = lazy(() => import("./PreLogin/Signup"));
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
            path={`${PREFIX_APP_PATH}/quotations`}
            element={<Quotations />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/quotations/quotation-create-fps`}
            element={<QuotationCreateFPS />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/quotations/quotation-form`}
            element={<QuatationsForm />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification`}
            element={<FinishProductSpecification />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/view-fps-details`}
            element={<ViewFpsDetails />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/purchased-order`}
            element={<PurchasedOrder />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/finish-product-specification/product-details`}
            element={<ProductDetails />}
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
            path={`${PREFIX_APP_PATH}/batch-sheet`}
            element={<BatchSheet />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/orders`}
            element={<Orders />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/raw-materials`}
            element={<RawMaterials />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-product`}
            element={<AddProduct />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/vendor-profile`}
            element={<VendorProfile />}
          />
          <Route
            exact
            path={`${PREFIX_APP_PATH}/add-new-vendor`}
            element={<AddNewVendor />}
          />
          
          <Route
            exact
            path={`${PREFIX_APP_PATH}/inventory/purchase-orders`}
            element={<PurchaseOrders />}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signin`}
            element={<Signin />}
          />
          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/signup`}
            element={<Signup />}
          />

          <Route
            exact
            path={`${PREFIX_AUTH_PATH}/forgot-password`}
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/app/inventory"
            element={<Navigate to="/app/inventory/raw-materials" />}
          />
          <Route exact path="/" element={<Navigate to="/app/dashboard" />} />

          <Route path="*" element={<PathNotFOund />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Views;
