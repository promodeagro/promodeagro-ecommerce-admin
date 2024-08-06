import * as React from "react";
import {
  ContentLayout,
  Textarea,
  Icon,
  Container,
  Toggle,
  Select,
  Header,
  Button,
  ColumnLayout,
  Input,
  Form,
  SpaceBetween,
  Checkbox,
  FormField,
  Grid,
} from "@cloudscape-design/components";
import UploadImage from "../../../../assets/img/upload-img.png"
import upload2 from "../../../../assets/img/upload-img.png";

import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProductById } from 'Redux-Store/Products/ProductThunk';
const GetProductByid = () => {
    const { id } = useParams();
    console.log(id);
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Option 1",
    value: "1",
  });
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
     <Grid
    gridDefinition={[
      { colspan: { default: 3, xxs: 9 } },
      { colspan: { default: 9, xxs: 3 } }
    ]}
  > 
  <Container>
 
    <form onSubmit={(e) => e.preventDefault()}>
      <Form>
        <SpaceBetween direction="vertical" size="l">
        <div style={{ width: "1000px" }}>
          <FormField label="Item Name">
            <Input placeholder="Input Item Name" />
          </FormField>
          </div>
          <ColumnLayout minColumnWidth={45} columns={3} gutter={20}>
          
            <div style={{ width: "220px" }}>
              <FormField label="Category">
                <Select
                  selectedOption={selectedOption}
                  onChange={({ detail }) =>
                    setSelectedOption(detail.selectedOption)
                  }
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                  placeholder="Select Category"
                />
              </FormField>
            </div>
            <div style={{ width: "220px" }}>
              <FormField label="Units">
                <Select
                  selectedOption={selectedOption}
                  onChange={({ detail }) =>
                    setSelectedOption(detail.selectedOption)
                  }
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                />
              </FormField>
            </div>
            <div style={{ width: "220px" }}>
              <FormField label="Status">
                <Select
                  selectedOption={selectedOption}
                  onChange={({ detail }) =>
                    setSelectedOption(detail.selectedOption)
                  }
                  options={[
                    { label: "Option 1", value: "1" },
                    { label: "Option 2", value: "2" },
                    { label: "Option 3", value: "3" },
                    { label: "Option 4", value: "4" },
                    { label: "Option 5", value: "5" },
                  ]}
                />
              </FormField>
            </div>
          </ColumnLayout>
          <div style={{ width: "1000px" }}>
          <FormField label="Product Description">
        <Textarea
          rows={5}
          onChange={({ detail }) => setValue(detail.value)}
          value={value}
        />
      </FormField>
      </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <FormField label="Purchasing Price">
              <Input
                size="3xs"
                placeholder="Input Purchasing Price"
              />
            </FormField>
            <FormField label="Min Selling Price">
              <Input size="3xs" placeholder="Min Selling Price" />
            </FormField>
          </div>
          <FormField label="Quantity In Stock">
            <Input
              size="xs"
              placeholder="Quantity available in stock"
            />
          </FormField>
          <Toggle
            onChange={({ detail }) => setChecked(detail.checked)}
            checked={checked}
          >
            Quantity on hand
          </Toggle>
          {checked && (
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ width: "200px" }}>
                <FormField label="Quantity In Stock">
                  <Select
                    selectedOption={selectedOption}
                    onChange={({ detail }) =>
                      setSelectedOption(detail.selectedOption)
                    }
                    options={[
                      { label: "Option 1", value: "1" },
                      { label: "Option 2", value: "2" },
                      { label: "Option 3", value: "3" },
                      { label: "Option 4", value: "4" },
                      { label: "Option 5", value: "5" },
                    ]}
                  />
                </FormField>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <FormField label="Quantity">
                  <Input size="3xs" placeholder="Enter Quantity" />
                </FormField>
                <div style={{ paddingTop: "30px" }}>
                  <Icon name="remove" />
                </div>
              </div>
            </div>
          )}
        </SpaceBetween>
      </Form>
    </form>
    <SpaceBetween direction="vertical" size="l">
     
      <Toggle
        onChange={({ detail }) => setChecked1(detail.checked)}
        checked1={checked}
      >
        Add Expiry
      </Toggle>
      <Input />
      <Checkbox
        onChange={({ detail }) => setChecked(detail.checked)}
        checked1={checked}
      >
        Keep me informed when items expire
      </Checkbox>
    </SpaceBetween>

</Container>
<Container>

            <img src={UploadImage} alt="upload"></img>
            <span style={{fontSize:"15px",fontWeight:"bold"}}>Additional Images</span>
            <Grid
    gridDefinition={[
      { colspan: { default: 6, xxs: 6 } },
      { colspan: { default: 6, xxs: 6 } }
    ]}
  > 
             
              <img src={upload2} alt="upload2" width="full" height="110px"></img>
              <div style={{ border: "1px dashed gray",borderRadius:"8px",height:"110px" }}></div>
           
    </Grid>
    </Container>
    </Grid>
  );
};

export default GetProductByid;