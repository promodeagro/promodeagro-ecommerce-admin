import React, { Component } from "react";
import { Box, Button, Tabs, Tab, IconButton, Tooltip } from "@mui/material";
import { connect } from "react-redux";
import status from "Redux-Store/Constants";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "../../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";
import { QUOTATIONS_FILTER_STATUS, TABLE_STATUS } from "CommonData";
import {
  fetchPurchaseOrder,
  fetchPurchaseOrderRequisitions,
} from "Redux-Store/Inventory/PurchaseOrders/PurchaseOrderThunk";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const columns = [
  {
    field: "order_id",
    headerName: "Order Id",
    width: 180,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "order_date",
    headerName: "Order Date",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "vendor_name",
    headerName: "Vendor Name",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "no_of_ingredients",
    headerName: "No. of Ingredients",
    width: 200,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "total_cost",
    headerName: "Total Cost",
    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "delivery_date",
    headerName: "Delivery Date",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: function (params) {
      return <div>{params.value}</div>;
    },
  },
];
const requitionColumns = [
  {
    field: "purchase_order_no",
    headerName: "Purchase Order No.",
    width: 150,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "order_date",
    headerName: "Purchase Order Date",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "vendor_name",
    headerName: "Vendor Name",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "vendor_email",
    headerName: "Vendor Email",
    width: 300,
    renderCell: (data) => {
      return (
        <div className="d-flex align-items-center">
          <Tooltip title={data.value}>
            <div className="email">{data.value}</div>
          </Tooltip>
          <ContentCopyIcon className="copy-icon" />{" "}
        </div>
      );
    },
  },
  {
    field: "requestor_name",
    headerName: "Requestor",
    description: "This column has a value getter and is not sortable.",
    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: function (params) {
      return (
        <div className={`status ${TABLE_STATUS[params.row.statusClass]}`}>
          {params.value}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 300,
    renderCell: (data) => {
      return data.value;
    },
    renderCell: () => {
      return (
        <div className="table-btns">
          <Button className="primary create-order-btn" variant="primary">
            Create Order
          </Button>
          <IconButton aria-label="more" id="long-button" aria-haspopup="true">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="more" id="long-button" aria-haspopup="true">
            <EditIcon />
          </IconButton>
        </div>
      );
    },
  },
];

let { APPROVED, UNDER_REVIEW, REJECTED, PENDING, DELETED } =
  QUOTATIONS_FILTER_STATUS;

const filterItems = [
  {
    label: "All",
  },
  {
    label: APPROVED,
  },
  {
    label: UNDER_REVIEW,
  },
  {
    label: REJECTED,
  },
  {
    label: PENDING,
  },
  {
    label: DELETED,
  },
];
class PurchaseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseData: [],
      paginationDetails: { pageSize: 10, page: 0 },
      selectedFilters: [],
      value: 0,
      requisitionsData: [],
    };
  }

  componentDidMount = () => {
    this.props.fetchPurchaseOrder();
    this.props.fetchPurchaseOrderRequisitions();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.purchaseorderlist.status !==
        this.props.purchaseorderlist.status &&
      this.props.purchaseorderlist.status === status.SUCCESS &&
      this.props.purchaseorderlist?.data
    ) {
      this.manipulationData(
        this.props.purchaseorderlist?.data.purchase_order_list || []
      );
    }
    if (
      prevProps.purchaserequisitions.status !==
        this.props.purchaserequisitions.status &&
      this.props.purchaserequisitions.status === status.SUCCESS &&
      this.props.purchaserequisitions?.data
    ) {
      this.manipulationRequitionData(
        this.props.purchaserequisitions?.data.purchase_requition_list || []
      );
    }
  }

  manipulationData(data, searchData = "", isApply = 0) {
    let { purchaseData, selectedFilters } = this.state;
    purchaseData = [];
    if (data?.length) {
      let purchaseDatas = JSON.parse(JSON.stringify(data));
      if (searchData) {
        purchaseDatas = data.filter((tableData) => {
          if (
            tableData?.order_id
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.order_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.vendor_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.no_of_ingredients
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.total_cost
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.delivery_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.status.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return tableData;
          } else {
            return null;
          }
        });
      }

      purchaseDatas.forEach((order) => {
        purchaseData.push({
          ...order,
        });
      });
      console.log(purchaseData);
    }

    this.setState({ purchaseData });
  }

  manipulationRequitionData(data, searchData = "", isApply = 0) {
    let { requisitionsData, selectedFilters } = this.state;
    requisitionsData = [];
    if (data?.length) {
      let requisitionsDatas = JSON.parse(JSON.stringify(data));
      if (searchData) {
        requisitionsDatas = data.filter((tableData) => {
          if (
            tableData?.purchase_order_no
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.order_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.vendor_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.vendor_email
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.requestor_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.status.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return tableData;
          } else {
            return null;
          }
        });
      }

      requisitionsDatas.forEach((order, index) => {
        requisitionsData.push({
          ...order,
          id: index + 1,
        });
      });
      console.log(requisitionsData);
    }

    this.setState({ requisitionsData });
  }
  handleChange = (event, newValue) => {
    debugger;
    if (newValue !== this.state.value) {
      this.setState({ value: newValue });
    }
  };
  render() {
    const {
      purchaseData,
      paginationDetails: { page, pageSize },
      searchData,
      selectedFilters,
      value,
      requisitionsData,
    } = this.state;
    const startDataNo = page * pageSize + 1;
    const endDataNo = page * pageSize + pageSize;
    return (
      <Box className="main-container">
        <Box className="purchase-order-container">
          <TablesHeaderFilters
            details={{
              header:
                value === 0
                  ? "All Purchase Orders"
                  : "Purchase Requisitions List",
              exportCsv: "",
              btnLabel:  value === 1
              ? "Create Order"
              : "",
              dataLength: purchaseData.length,
              searchData,
              isOnlySearchVisible: true,
              dataRange: purchaseData.length ? (
                <>
                  <strong>
                    {startDataNo} -{endDataNo}
                  </strong>
                </>
              ) : (
                0
              ),
              filter: {
                label: "Filters",
                data: filterItems,
                header: "Status",
                selectedFilters,
              },
            }}
            handleSearch={(searchData) => {
              {
                value === 0
                  ? this.manipulationData(
                      this.props.purchaseorderlist?.data.purchase_order_list ||
                        [],
                      searchData
                    )
                  : this.manipulationRequitionData(
                      this.props.purchaserequisitions?.data
                        .purchase_requition_list || [],
                      searchData
                    );
              }
            }}
            handleFilters={(label, prevFilters) => {
              let { selectedFilters } = this.state;
              if (prevFilters) {
                selectedFilters = prevFilters;
              } else {
                if (selectedFilters.includes(label)) {
                  if (label === "all") {
                    selectedFilters = [];
                  } else {
                    selectedFilters = selectedFilters.filter(
                      (item) => ![label, "all"].includes(item)
                    );
                  }
                } else {
                  if (label === "all") {
                    selectedFilters = filterItems.map((item) =>
                      item.label.toLowerCase().replace(" ", "_")
                    );
                  } else {
                    selectedFilters.push(label);
                  }
                }
              }
              console.log(selectedFilters, prevFilters);
              this.setState({ selectedFilters });
            }}
            applyOrCancelFilter={(isApply) => {
              this.manipulationData(
                this.props.requisitionslist?.data.requisitionslist || [],
                searchData,
                isApply ? 1 : 0
              );
            }}
          />
          <Box className="purchase-order-tab-container">
            <Tabs
              value={value}
              onChange={this.handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Purchase Orders" />
              <Tab label="Purchase Requisitions" />
            </Tabs>
            {value === 0 && (
              <Box>
                {this.props.purchaseorderlist.status === status.IN_PROGRESS ? (
                  Loader.commonLoader()
                ) : (
                  <GridTableWithPagination
                    details={{
                      paginationDetails: { page, pageSize },
                      pagSize: 10,
                      data: purchaseData,
                      columns,
                      checkboxSelection: false,
                    }}
                    handlePageChange={(paginationDetails) => {
                      this.setState({ paginationDetails });
                    }}
                  />
                )}
              </Box>
            )}
            {value === 1 && (
              <Box>
                {this.props.purchaserequisitions.status ===
                status.IN_PROGRESS ? (
                  Loader.commonLoader()
                ) : (
                  <GridTableWithPagination
                    details={{
                      paginationDetails: { page, pageSize },
                      pagSize: 10,
                      data: requisitionsData,
                      columns: requitionColumns,
                      checkboxSelection: false,
                    }}
                    handlePageChange={(paginationDetails) => {
                      this.setState({ paginationDetails });
                    }}
                  />
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}
function mapStateToProps(state) {
  const { purchaseorderlist, purchaserequisitions } = state.purchaseorders;
  return { purchaseorderlist, purchaserequisitions };
}

const mapDispatchToProps = {
  fetchPurchaseOrder,
  fetchPurchaseOrderRequisitions,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);
