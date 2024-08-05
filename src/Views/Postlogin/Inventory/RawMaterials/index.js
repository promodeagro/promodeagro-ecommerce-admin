import React, { Component } from "react";
import { fetchRawMaterials } from "Redux-Store/Inventory/RawMaterials/RawMaterialsThunk";
import status from "Redux-Store/Constants";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "Views/Postlogin/Components/GridTableWithPagination";

const columns = [
  {
    field: "item_code",
    headerName: "Item Code",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
    // renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "ingredeints",
    headerName: "Ingredients",
    width: 150,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "units",
    headerName: "Unit",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "threshold_value",
    headerName: "Threshold Value",
    width: 200,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "stock_availble",
    headerName: "Stock Available",

    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "availability",
    headerName: "Availability",

    width: 130,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "expiry",
    headerName: "Expiry Date",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
];
class RawMaterials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paginationDetails: { pageSize: 10, page: 0 },
      rawMaterialsTableData: [],
    };
  }
  componentDidMount() {
    this.props.fetchRawMaterials();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.rawmaterialslist.status !==
        this.props.rawmaterialslist.status &&
      this.props.rawmaterialslist.status === status.SUCCESS &&
      this.props.rawmaterialslist?.data
    ) {
      this.manipulationData(
        this.props.rawmaterialslist?.data.feed_stocks || []
      );
    }
  }

  manipulationData(data, searchData = "") {
    let { rawMaterialsTableData } = this.state;
    rawMaterialsTableData = [];
    if (data?.length) {
      let orders = JSON.parse(JSON.stringify(data));
      if (searchData) {
        orders = data.filter((tableData) => {
          if (
            tableData?.item_code
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.ingredeints
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.units.toLowerCase().includes(searchData.toLowerCase()) ||
            tableData?.threshold_value
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.stock_availble
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.availability
              .toLowerCase()
              .includes(searchData.toLowerCase())
          ) {
            return true;
          } else {
            return null;
          }
        });
      }

      orders.forEach((orders) => {
        rawMaterialsTableData.push({
          ...orders,
          statusClass: orders?.status?.toLowerCase()?.replace(" ", "_"),
        });
      });
    }
    this.setState({ rawMaterialsTableData, searchData });
  }
  render() {
    const {
      rawMaterialsTableData,
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
              header: "Feedstock",
              exportCsv: "Export File",
              btnLabel: "Add Product",
              btnLabel2: "",
              isOnlySearchVisible: true,
              dataLength: rawMaterialsTableData.length,
              searchData,

              dataRange: rawMaterialsTableData.length ? (
                <>
                  <strong>
                    {startDataNo} -{endDataNo}
                  </strong>
                </>
              ) : (
                0
              ),
              filter: {
                label: "",
                data: "",
                header: "",
                selectedFilters: "",
              },
            }}
            handleSearch={(searchData) => {
              this.manipulationData(
                this.props.rawmaterialslist?.data.feed_stocks || [],
                searchData
              );
            }}
          />

          {this.props.rawmaterialslist.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: rawMaterialsTableData,
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
  const { rawmaterialslist } = state.rawmaterials;
  return { rawmaterialslist };
}

const mapDispatchToProps = { fetchRawMaterials };

export default connect(mapStateToProps, mapDispatchToProps)(RawMaterials);
