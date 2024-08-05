import React, { Component } from "react";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import status from "Redux-Store/Constants";
import { fetchBatchSheet } from "Redux-Store/BatchSheet/BatchThunk";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";

const columns = [
  {
    field: "batch_sheet",
    headerName: "Batch Sheet",
    width: 180,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "product",
    headerName: "Product Name",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "manufacturing_data",
    headerName: "Manufacturing Date",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "expiry_date",
    headerName: "Expiry Date",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "lot_numbers",
    headerName: "Lot Numbers",
    width: 280,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "batch_size",
    headerName: "Batch Size",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "qc_number",
    headerName: "QC Number",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
];

class BatchSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchsheetsData: [],
      paginationDetails: { pageSize: 10, page: 0 },
    };
  }

  componentDidMount = () => {
    this.props.fetchBatchSheet();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.batchSheetData.status !== this.props.batchSheetData.status &&
      this.props.batchSheetData.status === status.SUCCESS &&
      this.props.batchSheetData?.data
    ) {
      this.manipulationData(
        this.props.batchSheetData?.data.finish_products || []
      );
    }
  }
  manipulationData(data, searchData = "") {
    let { batchsheetsData } = this.state;
    batchsheetsData = [];
    if (data?.length) {
      let batchsheets = JSON.parse(JSON.stringify(data));
      if (searchData) {
        batchsheets = data.filter((tableData) => {
          if (
            tableData?.product
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.batch_sheet
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.batch_size.includes(searchData) ||
            tableData?.expiry_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.lot_numbers
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.manufacturing_data
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.qc_number
              .toLowerCase()
              .includes(searchData.toLowerCase())
          ) {
            return true;
          } else {
            return null;
          }
        });
      }

      batchsheets.forEach((batchsheets) => {
        batchsheetsData.push({
          ...batchsheets,
          veganClass: batchsheets?.product_catogory
            ?.toLowerCase()
            ?.replace("-", "_"),
        });
      });
    }
    this.setState({ batchsheetsData, searchData });
  }
  render() {
    const {
      batchsheetsData,
      paginationDetails: { page, pageSize },
      searchData,
    } = this.state;
    const startDataNo = page * pageSize + 1;
    const endDataNo = page * pageSize + pageSize;
    return (
      <Box className="main-container">
        <Box className="qutations-container">
          <TablesHeaderFilters
            details={{
              header: "Batch Sheet List",
              filterLabel: "",
              exportCsv: "",
              btnLabel: "",
            
              isOnlySearchVisible: true,
              dataLength: batchsheetsData.length,
              searchData,
              dataRange: batchsheetsData.length ? (
                <>
                  <strong>
                    {startDataNo} -{endDataNo}
                  </strong>
                </>
              ) : (
                0
              ),
            }}
            handleSearch={(searchData) => {
              this.manipulationData(
                this.props.batchSheetData?.data.finish_products || [],
                searchData
              );
            }}
          />

          {this.props.batchSheetData.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: batchsheetsData,
                columns,
                checkboxSelection: false,
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
  const { batchSheetData } = state.batchsheet;
  return { batchSheetData };
}

const mapDispatchToProps = { fetchBatchSheet };

export default connect(mapStateToProps, mapDispatchToProps)(BatchSheet);
