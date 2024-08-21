const BASE_URL = "https://lou294nkli.execute-api.us-east-1.amazonaws.com";

const Config = {
  BASE_URL,
  FETCH_QUOTATIONS: `${BASE_URL}/users`,
  FINISH_PRODUCT_SPECIFICATIONS: `${BASE_URL}/users`,
  FINISH_PRODUCT_VIEW_ATACHMENTS: `${BASE_URL}/users`,
  FINISH_PRODUCT_DETAILS: `${BASE_URL}/users`,
  FETCH_ORDERS: `${BASE_URL}/order`,
  ORDERS_DETAILS:`${BASE_URL}/order/{id}`,
  UPDATE_ORDER_STATUS:`${BASE_URL}/order/proceed?ids=`,
  ASSIGN_DELIVERY_BOY: `${BASE_URL}/order/proceed?ids=`, // Will append `&assignee={assignee}` dynamically

  ORDERS_STATUS:`${BASE_URL}/order/stats`,
  ORDERS_VIEWATTACHMENTS:`${BASE_URL}/users`,
   FETCH_BATCH_SHEET:`${BASE_URL}/users`,
   FETCH_PRODUCTS:`${BASE_URL}/inventory`,
   FETCH_PRODUCTS_DETAIL:`${BASE_URL}/inventory`,
   PUT_PRODUCTS_DETAIL:`${BASE_URL}/publish`,
   PUT_PRICING:`${BASE_URL}/inventory`,
   PUT_ACTIVE_INACTIVE:`${BASE_URL}/inventory/status`,
   FETCH_RAW_MATERIALS:`${BASE_URL}/users`,
   FETCH_PURCHASE_ORDER:`${BASE_URL}/users`,
   FETCH_PURCHASE_REQUSTION_LIST:`${BASE_URL}/users`,
   VENDOR_PROFILE:`${BASE_URL}/users`,
   FETCH_CUSTOMER:`${BASE_URL}/user`,
};

export default Config;
