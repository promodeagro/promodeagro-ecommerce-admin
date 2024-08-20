import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ColumnLayout,
  Container,
  Header,
  SpaceBetween,
  ContentLayout,
  Table,
  BreadcrumbGroup,
  Toggle,
  TextFilter,
  Select,
  Pagination,
  Input,
  Modal
} from '@cloudscape-design/components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, PutToggle, putPricingById } from 'Redux-Store/Products/ProductThunk';
import "../../../assets/styles/CloudscapeGlobalstyle.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { data = [] } = products;

  const [activeButton, setActiveButton] = useState('All');
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const [filteringText, setFilteringText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [editedProducts, setEditedProducts] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBulkModifySuccess, setBulkModifySuccess] = useState(false); 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleInputChange = (id, field, value) => {
    setEditedProducts(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const getStockAlertStyle = (stockAlert) => {
    switch (stockAlert) {
      case 'Low':
        return { color: 'red' };
      case 'Available':
        return { color: 'blue' };
      default:
        return {};
    }
  };

  const handleToggleChange = (item) => {
    const newStatus = !item.active;

    dispatch(PutToggle({ id: item.id, active: newStatus })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled' && response.payload.status === 200) {
        dispatch(fetchProducts());
      } else {
        dispatch(fetchProducts());
      }
    });
  };

  const filteredProducts = data
    ? data.filter((item) => {
        const matchesStatus =
          activeButton === 'All' ||
          item.active === (activeButton === 'Active');
        const matchesSearch =
          item.itemCode.toLowerCase().includes(filteringText.toLowerCase()) ||
          item.name.toLowerCase().includes(filteringText.toLowerCase()) ||
          (item.active ? 'active' : 'inactive').includes(filteringText.toLowerCase());
        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;

        return matchesStatus && matchesSearch && matchesCategory;
      })
    : [];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex + 1);
  };

  const handleSelectChange = ({ detail }) => {
    setSelectedCategory(detail.selectedOption.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setFilteringText(e.detail.filteringText);
    setCurrentPage(1);
  };

  const selectOptions = [
    { label: "All", value: "All" },
    { label: "Leafy", value: "Leafy" },
    { label: "Fruit", value: "Fruit" },
    { label: "Vegetable", value: "Vegetable" },
    { label: "Bengali Vegetable", value: "Bengali Vegetable" },
  ];

  const handleSelectionChange = ({ detail }) => {
    setSelectedItems(detail.selectedItems);
  };

  const handleBulkModifyPrice = () => {
    setModalVisible(true);
  };
  const confirmBulkModifyPrice = () => {
    let success = true;

    selectedItems.forEach(item => {
      const pricingData = {
        onlineStorePrice: editedProducts[item.id]?.onlineStorePrice || item.onlineStorePrice,
        compareAt: editedProducts[item.id]?.compareAt || item.compareAt
      };

      dispatch(putPricingById({ id: item.id, pricingData }))
        .then(response => {
          if (response.meta.requestStatus !== 'fulfilled' || response.payload.status !== 200) {
            success = false;
          }
      
        });
      
    });
// after succesfully hitting put api after reload then  i want this  if
    if (success) {
      setBulkModifySuccess(true);
    
    }
    
    setModalVisible(false);
  };

  // Function to navigate to Google
  const navigatetogoogle = () => {
    window.open('https://promodeagro.com/', '_blank');
  };

  return (
    <ContentLayout
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "Dashboard", href: "/app/dashboard" },
            { text: "Products", href: "/app/dashboard/products" }
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      headerVariant="high-contrast"
      header={
        <Header
          actions={
            <SpaceBetween alignItems="center" direction="horizontal" size="xs">
              <Button variant="normal">Export</Button>
            </SpaceBetween>
          }
          variant="h1"
        >
          Products
        </Header>
      }
    >
      <SpaceBetween direction="vertical" size="s">
        <Container>
          <ColumnLayout columns={5} variant="default" minColumnWidth={170}>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Published Products</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Stock</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>₹436K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Total Orders</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>123</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Net Profit</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>1238K</span>
            </div>
            <div>
              <Box variant="awsui-key-label">
                <p style={{ fontSize: 12 }}>Stopped Products</p>
              </Box>
              <span style={{ fontSize: 36, fontWeight: '900', lineHeight: 1.3, color: "#0972D3" }}>12</span>
            </div>
          </ColumnLayout>
        </Container>

        <div>
        
          <Table
          header={
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width:"390px" }}>
              <TextFilter
                filteringPlaceholder="Search"
                filteringText={filteringText}
                onChange={handleSearchChange}
              />
              </div>
              <div style={{ width:"140px"}}>
              <Select
                options={selectOptions}
                selectedOption={selectOptions.find(
                  (option) => option.value === selectedCategory
                )}
                onChange={handleSelectChange}
                placeholder="Select Category"
              />
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
            {isBulkModifySuccess ? (
              <Button 
                variant='normal'
                onClick={navigatetogoogle}
              >
                View Product Page
              </Button>
            ) : (
              <Button 
                disabled={selectedItems.length === 0} 
                variant='normal'
                onClick={handleBulkModifyPrice}
              >
                Bulk Modify Price
              </Button>
            )}
            <Pagination currentPageIndex={currentPage - 1} onChange={handlePageChange} pagesCount={Math.ceil(filteredProducts.length / productsPerPage)} />
            
           </div>
          </div>
            
          }
            variant='borderless'
            columnDefinitions={[
              {
                id: 'code',
                header: 'Item Code',
                cell: item => <Link to={`/app/products/${item.id}`}>{item.itemCode}</Link>,
              },
              {
                id: 'name',
                header: 'Name',
                cell: item => (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={item?.images[0]} alt={item.name} height={35} width={35} style={{ borderRadius: '8px', marginRight: '10px' }} />
                    <p style={{ width:"50px"}}>{item.name}</p>
                  </div>
                ),
              },
              {
                id: 'stock',
                header: 'On Hand Stock',
                cell: item => <Box textAlign='center'>{item?.stockQuantity}</Box>
              },
              {
                id: 'alert',
                header: 'Stock Alert',
                cell: item => (
                  <div style={getStockAlertStyle(item?.stockAlert)}>
                    Available
                  </div>
                ),
              },
              {
                id: 'onlineStorePrice',
                header: 'OSP',
                cell: item => (
                  <div style={{width:"80px"}}>
                  <Input
                        type='text'               
                    value={
                      editedProducts[item.id]?.onlineStorePrice ?? item.onlineStorePrice
                    }
                    onChange={e => handleInputChange(item.id, 'onlineStorePrice', e.detail.value)}
                  />
                  </div>
                )
              },
              {
                id: 'compareAt',
                header: 'CP',
                cell: item => (
                  <div style={{width:"80px"}}>
                  <Input
                   type='text'
             
                    value={
                      editedProducts[item.id]?.compareAt ?? item.compareAt
                    }
                    onChange={e => handleInputChange(item.id, 'compareAt', e.detail.value)}
                  />
                  </div>
                )
              },
              {
                id: 'status',
                header: 'Status',
                cell: item => (
                  <Toggle
                    onChange={() => handleToggleChange(item)}
                    checked={item.active}
                  >
                    {item.active ? 'Active' : 'Inactive'}
                  </Toggle>
                ),
              },
            ]}
            items={currentProducts}
            selectionType="multi"
            selectedItems={selectedItems}
            onSelectionChange={handleSelectionChange}
           
          />
        </div>
      </SpaceBetween>

      {/* Modal for confirming bulk modify price */}
      {isModalVisible && (
        <Modal
        size='medium'
          onDismiss={() => setModalVisible(false)}
          visible={isModalVisible}
          header="Confirm Bulk Modify Price"
          footer={
            <Box float="right">
              <SpaceBetween direction="horizontal" size="xs">
                <Button variant="link" onClick={() => setModalVisible(false)}>Cancel</Button>
                <Button variant="primary" onClick={confirmBulkModifyPrice}>Confirm</Button>
              </SpaceBetween>
            </Box>
          }
        >
          Are you sure you want to update the prices ? This Changes will be reflect in the Online Store
        </Modal>
      )}
    </ContentLayout>
  );
};

export default Products;
