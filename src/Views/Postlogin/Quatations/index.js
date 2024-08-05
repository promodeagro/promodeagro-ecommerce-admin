import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { connect } from "react-redux";
import status from "Redux-Store/Constants";
import { fetchQuotations } from "Redux-Store/Quotations/QuotationsThunk";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";
import { QUOTATIONS_FILTER_STATUS, TABLE_STATUS } from "CommonData";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const columns = [
  {
    field: "quotation_no",
    headerName: "Quotation No",
    width: 150,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "customer_name",
    headerName: "Customer Name",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "product",
    headerName: "Product",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "shiping_address",
    headerName: "Shipping Adress",
    width: 200,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "quotated_by",
    headerName: "Quotated By",
    description: "This column has a value getter and is not sortable.",
    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "quotation_date",
    headerName: "Quotation Date",
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
    width: 200,
    renderCell: (data) => {
      return data.value;
    },
    renderCell: () => {
      return (
        <div className="table-btns">
          <Button className="primary" variant="primary">
            Convert to Order
          </Button>
          <IconButton aria-label="more" id="long-button" aria-haspopup="true">
            <MoreVertIcon />
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
class Quotations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotationData: [],
      paginationDetails: { pageSize: 10, page: 0 },
      selectedFilters: [],
    };
  }

  componentDidMount = () => {
    this.props.fetchQuotations();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.quotations.status !== this.props.quotations.status &&
      this.props.quotations.status === status.SUCCESS &&
      this.props.quotations?.data
    ) {
      this.manipulationData(this.props.quotations?.data.quotations || []);
    }
  }
  manipulationData(data, searchData = "", isApply = 0) {
    let { quotationData, selectedFilters } = this.state;
    quotationData = [];
    if (data?.length) {
      let quotations = JSON.parse(JSON.stringify(data));
      if (searchData) {
        quotations = data.filter((tableData) => {
          if (
            tableData?.quotation_no
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.customer_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.product
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.shiping_address
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.quotated_by
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.quotation_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.status.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return true;
          } else {
            return null;
          }
        });
      }

      if (isApply) {
        quotations = quotations.filter((tableData) => {
          return selectedFilters.includes(
            tableData.status.toLowerCase().replace(" ", "_")
          );
        });
      } else {
        selectedFilters = [];
      }

      quotations.forEach((quotation) => {
        quotationData.push({
          ...quotation,
          statusClass: quotation?.status?.toLowerCase()?.replace(" ", "_"),
        });
      });
    }

    this.setState({ quotationData, searchData, selectedFilters });
  }
  render() {
    const {
      quotationData,
      paginationDetails: { page, pageSize },
      searchData,
      selectedFilters,
    } = this.state;
    const startDataNo = page * pageSize + 1;
    const endDataNo = page * pageSize + pageSize;
    return (
      <Box className="main-container">
        <Box className="qutations-container">
          <TablesHeaderFilters
            details={{
              header: "Quotations",
              exportCsv: "Export as CSV",
              btnLabel: "Quotation",
              dataLength: quotationData.length,
              searchData,
              isOnlySearchVisible: false,
              dataRange: quotationData.length ? (
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
              this.manipulationData(
                this.props.quotations?.data.quotations || [],
                searchData
              );
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
                this.props.quotations?.data.quotations || [],
                searchData,
                isApply ? 1 : 0
              );
            }}
          />

          {this.props.quotations.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: quotationData,
                columns,
              }}
              handlePageChange={(paginationDetails) => {
                this.setState({ paginationDetails });
              }}
            />
          )}
        </Box>
      </Box>
    );
  }
}
function mapStateToProps(state) {
  const { quotations } = state.savedQuotations;
  return { quotations };
}

const mapDispatchToProps = { fetchQuotations };

export default connect(mapStateToProps, mapDispatchToProps)(Quotations);
