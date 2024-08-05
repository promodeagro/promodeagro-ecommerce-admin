import React, { Component } from "react";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import status from "Redux-Store/Constants";
import { fetchVendorProfiles } from "Redux-Store/Inventory/VendorProfile/VendorProfileThunk";
import { Loader } from "Utils/helperFunctions";
import GridTableWithPagination from "../../Components/GridTableWithPagination";
import { Link } from "react-router-dom";
import TablesHeaderFilters from "Views/Postlogin/Components/TablesHeaderFilters";

const columns = [
  {
    field: "vendor_name",
    headerName: "Vendor Name",
    width: 200,
    renderCell: (params) => <Link to={params.value}>{params.value}</Link>,
  },
  {
    field: "contact_info",
    headerName: "Contact Info.",
    width: 250,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "primary_contact",
    headerName: "Primary Contact",
    width: 250,
    renderCell: (data) => {
      return data.value;
    },
  },
  {
    field: "last_purchased_date",
    headerName: "Last purchased Date",
    width: 280,
    renderCell: (data) => {
      return data.value;
    },
  },
];

class VendorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorListData: [],
      paginationDetails: { pageSize: 10, page: 0 },
    };
  }

  componentDidMount = () => {
    this.props.fetchVendorProfiles();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.vendorlist.status !== this.props.vendorlist.status &&
      this.props.vendorlist.status === status.SUCCESS &&
      this.props.vendorlist?.data
    ) {
      this.manipulationData(this.props.vendorlist?.data.vendor_list || []);
    }
  }

  manipulationData(data, searchData = "") {
    let { vendorListData } = this.state;
    vendorListData = [];
    if (data?.length) {
      let vendorlist = JSON.parse(JSON.stringify(data));
      if (searchData) {
        vendorlist = data.filter((tableData) => {
          if (
            tableData?.vendor_name
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.contact_info
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.email.toLowerCase().includes(searchData.toLowerCase()) ||
            tableData?.last_purchased_date
              .toLowerCase()
              .includes(searchData.toLowerCase()) ||
            tableData?.primary_contact
              .toLowerCase()
              .includes(searchData.toLowerCase())
          ) {
            return tableData;
          } else {
            return null;
          }
        });
      }

      vendorlist.forEach((vendorlist, index) => {
        vendorListData.push({
          ...vendorlist,
          id: index + 1,
        });
      });
    }
    this.setState({ vendorListData, searchData });
  }
  render() {
    const {
      vendorListData,
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
              header: "Vendor List",
              filterLabel: "",
              exportCsv: "",
              importCsv:"",
              btnLabel: "Create Order",
              btnLabel2: "Vendor",
              isOnlySearchVisible: true,
              dataLength: vendorListData.length,
              searchData,
              dataRange: vendorListData.length ? (
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
                this.props.vendorlist?.data.vendor_list || [],
                searchData
              );
            }}
          />

          {this.props.vendorlist.status === status.IN_PROGRESS ? (
            Loader.commonLoader()
          ) : (
            <GridTableWithPagination
              details={{
                paginationDetails: { page, pageSize },
                pagSize: 10,
                data: vendorListData,
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
  const { vendorlist } = state.vendorprofile;
  return { vendorlist };
}

const mapDispatchToProps = { fetchVendorProfiles };

export default connect(mapStateToProps, mapDispatchToProps)(VendorProfile);
