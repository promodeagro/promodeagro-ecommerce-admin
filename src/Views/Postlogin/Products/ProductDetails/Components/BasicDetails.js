import { Container, Input, Form, FormField, Textarea, Select, SpaceBetween } from '@cloudscape-design/components';
import React, { useEffect } from 'react';
import "../../../../../assets/styles/CloudscapeGlobalstyle.css"
import Grid from "@cloudscape-design/components/grid";


const BasicDetails = ({ product, onChange }) => {
  const [description, setDescription] = React.useState(product.data?.description || "");
  const [name, setName] = React.useState(product?.data?.name || "");
  const [selectedCategory, setSelectedCategory] = React.useState({
    label: product.data?.category || "",
    value: product.data?.category || "",
  });
  const [selectedUnit, setSelectedUnit] = React.useState({
    label: product.data?.units || "",
    value: product.data?.units || "",
  });
  const [selectedStatus, setSelectedStatus] = React.useState({
    label: "Option 1",
    value: "1",
  });

  // Update state when product prop changes
  useEffect(() => {
    // Only update the state if the product data has actually changed
    setDescription(product.data?.description || "");
    setName(product.data?.name || "");
    setSelectedCategory({
      label: product.data?.category || "",
      value: product.data?.category || "",
    });
    setSelectedUnit({
      label: product.data?.units || "",
      value: product.data?.units || "",
    });
    setSelectedStatus({
      label: "Option 1",
      value: "1",
    });
  }, [product]); // Only rerun this effect if the product prop changes
  
  // useEffect(() => {
  //   onChange({
  //     name,
  //     description,
  //     category: selectedCategory.value,
  //     units: selectedUnit.value,
  //     status: selectedStatus.value,
  //   });
  // }, [name, description, selectedCategory, selectedUnit, selectedStatus,onChange]); 

  return (
    <Container variant='borderless' className='container-box-shadow' fitHeight>
      <Form>
        <SpaceBetween direction="vertical" size="l">

            <FormField stretch label="Product Name">
              <Input
                placeholder="Input Item Name"
                value={name}
                onChange={({ detail }) => setName(detail.value)}
              />
            </FormField>
            <Grid
      disableGutters
      gridDefinition={[
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 },
        { colspan: 4 }
      ]}
    >

              <div style={{marginRight: "1rem"}}>
                <FormField label="Category">
                <Select
                  disabled
                  selectedOption={selectedCategory}
                  onChange={({ detail }) => setSelectedCategory(detail.selectedOption)}
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                  placeholder="Select Category"
                />
              </FormField></div>
              <div style={{marginRight: "1rem"}}>
              <FormField label="Units">
                <Select
                  disabled
                  selectedOption={selectedUnit}
                  onChange={({ detail }) => setSelectedUnit(detail.selectedOption)}
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                />
              </FormField></div>
              <div>
              <FormField label="Status">
                <Select
                  disabled
                  selectedOption={selectedStatus}
                  onChange={({ detail }) => setSelectedStatus(detail.selectedOption)}
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                />
              </FormField> </div>   </Grid>


          <FormField label="Product Description">
              <Textarea
                disabled
                placeholder="Input Item Description"
                value={description}
                onChange={({ detail }) => setDescription(detail.value)}
              />
          </FormField>
        </SpaceBetween>
      </Form>
    </Container>
  );
};

export default BasicDetails;
