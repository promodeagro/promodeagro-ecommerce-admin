import React, { Component } from "react";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import status from "Redux-Store/Constants";
import { fetchFinishProductSpecification } from "Redux-Store/FinishProductSpecification/FinishProductSpecThunk";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";
import { PREFIX_APP_PATH } from "Config/Config";

const columns = [
  {
    field: "product",
    headerName: "Product Name",
    width: 150,
    renderCell: (params) => <Link to={params.row.link}>{params.value}</Link>
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
    field: "product_code",
    headerName: "Product Code",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "quotation",
    headerName: "Quotation",
    width: 200,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "product_type",
    headerName: "Product Type",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "package_type",
    headerName: "Package Type",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "moq",
    headerName: "MOQ",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 180,
    renderCell: (data) => {
      return data.value;
    },
  },
];

class FinishProductSpecification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishProductSpecificationsData: [],
      paginationDetails: { pageSize: 10, page: 0 },
    };
  }

  componentDidMount = () => {
    this.props.fetchFinishProductSpecification();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.finishProducts.status !== this.props.finishProducts.status &&
      this.props.finishProducts.status === status.SUCCESS &&
      this.props.finishProducts?.data
    ) {
      this.manipulationData(
        this.props.finishProducts?.data.finish_products || []
      );
    }
  }
  manipulationData(data, searchData = "") {
    let { finishProductSpecificationsData } = this.state;
    finishProductSpecificationsData = [];
    if (data?.length) {
      let finishProductSpecifications = JSON.parse(JSON.stringify(data));
      if (searchData) {
        finishProductSpecifications = data.filter((tableData) => {
          if (
            tableData?.product
              .toLowerCase()
              .includes(searchData?.toLowerCase()) ||
            tableData?.customer_name
              .toLowerCase()
              .includes(searchData?.toLowerCase()) ||
            tableData?.package_type
              .toLowerCase()
              .includes(searchData?.toLowerCase())
              ||
              tableData?.product_code
              .toLowerCase()
              .includes(searchData.toLowerCase())
              ||
              tableData?.product_type
              .toLowerCase()
              .includes(searchData.toLowerCase())
              ||
              tableData?.quotation
              .toLowerCase()
              .includes(searchData.toLowerCase())
              ||
              tableData?.cost?.toLowerCase().includes(searchData?.toLowerCase())
          ) {
            return true;
          } else {
            return null;
          }
        });
      }

      finishProductSpecifications.forEach((finishProductSpecifications) => {
        finishProductSpecificationsData.push({
          ...finishProductSpecifications,
          statusClass: finishProductSpecifications?.status
            ?.toLowerCase()
            ?.replace(" ", "_"),
          link: `${PREFIX_APP_PATH}/finish-product-specification/view-fps-details`,
        });
      });
    }
    this.setState({ finishProductSpecificationsData, searchData });
  }
  render() {
    const {
      finishProductSpecificationsData,
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
              isOnlySearchVisible: true,
              header: "Finish Product Specifications",
              filterLabel: "",
              btnLabel: "",
              dataLength: finishProductSpecificationsData.length,
              searchData,
              dataRange: finishProductSpecificationsData.length ? (
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
                this.props.finishProducts?.data.finish_products || [],
                searchData
              );
            }}
          />

          {this.props.finishProducts?.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: finishProductSpecificationsData,
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
  const { finishProducts } = state.finishProductSpecifications;
  return { finishProducts };
}

const mapDispatchToProps = { fetchFinishProductSpecification };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishProductSpecification);
