import * as React from "react";
import {
  Textarea,
  Icon,
  Container,
  Toggle,
  Select,
  Input,
  Form,
  SpaceBetween,
  Checkbox,
  FormField,
  Grid,
  ColumnLayout,
} from "@cloudscape-design/components";
import UploadImage from "../../../../assets/img/tomato.png";
import upload2 from "../../../../assets/img/upload-img.png";
import { useParams } from "react-router-dom";

const GetProductById = () => {
  const { id } = useParams();
  console.log(id);

  const [selectedCategory, setSelectedCategory] = React.useState({
    label: "Option 1",
    value: "1",
  });
  const [selectedUnit, setSelectedUnit] = React.useState({
    label: "Option 1",
    value: "1",
  });
  const [selectedStatus, setSelectedStatus] = React.useState({
    label: "Option 1",
    value: "1",
  });
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [description, setDescription] = React.useState("");

  return (
    <SpaceBetween direction="vertical" size="l">
      <Grid
        gridDefinition={[
          { colspan: { default: 3, xxs: 9 } },
          { colspan: { default: 9, xxs: 3 } },
        ]}
      >
        <SpaceBetween direction="vertical" size="l">
          <Container>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form>
                <SpaceBetween direction="vertical" size="l">
                  <div style={{ width: "52vw" }}>
                    <FormField stretch label="Item Name">
                      <Input placeholder="Input Item Name" />
                    </FormField>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                   
                  <div style={{ width: "210px" }}>
                      <FormField label="Category">
                        <Select
                          selectedOption={selectedCategory}
                          onChange={({ detail }) =>
                            setSelectedCategory(detail.selectedOption)
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
                    <div style={{ width: "210px" }}>
                      <FormField label="Units">
                        <Select
                          selectedOption={selectedUnit}
                          onChange={({ detail }) =>
                            setSelectedUnit(detail.selectedOption)
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
                    <div style={{ width: "210px" }}>
                      <FormField label="Status">
                        <Select 
                          selectedOption={selectedStatus}
                          onChange={({ detail }) =>
                            setSelectedStatus(detail.selectedOption)
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
                </div>
              
              
                 
                    <FormField label="Product Description" >
                    <div style={{ width: "52vw" }}>
                      <Textarea
                        
                        rows={5}
                        onChange={({ detail }) => setDescription(detail.value)}
                        value={description}
                      />
                        </div>
                    </FormField>
                
                </SpaceBetween>
              </Form>
            </form>
          </Container>

          <Container>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form>
                <SpaceBetween direction="vertical" size="l">
                <div style={{ display: "flex", gap: "15px" }}>
                  <FormField label="Purchasing Price">
                    <Input size="3xs" placeholder="Input Purchasing Price" />
                  </FormField>
                  <FormField label="Minimum Selling Price">
                    <Input size="3xs" placeholder="Min Selling Price" />
                  </FormField>
                  <FormField label="Compare At Price">
                    <Input size="3xs" placeholder="Min Selling Price" />
                  </FormField>
                </div>
                <Checkbox
                  onChange={({ detail }) => setChecked(detail.checked)}
                  checked={checked}
                >
                  Charge Tax on this Product
                </Checkbox>
                <hr></hr>
                <div style={{ display: "flex", gap: "15px" }}>
                  <FormField label="Online Store Price">
                    <Input size="3xs" placeholder="90" />
                  </FormField>
                  <FormField label="Profit">
                    <Input size="3xs" placeholder="80" />
                  </FormField>
                  <FormField label="Margin">
                    <Input size="3xs" placeholder="70" />
                  </FormField>
                </div>
                </SpaceBetween>
              </Form>
            </form>
          </Container>
        </SpaceBetween>

        <Container>
          <img src={UploadImage} alt="upload" />
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            Additional Images
          </span>
          <div style={{display:"flex", gap:"5px"}}
          >
            {/* <img src={upload2} alt="upload2" width="100px" height="100%" /> */}
            <div
              style={{
                border: "1px dashed gray",
                height: "110px",
                width:"100px",
                textAlign:"center",
                alignContent:"center"
                
                
              }} >
            <Icon name="upload" size="large"
            ></Icon>
            </div>
            <div
              style={{
                border: "1px dashed gray",
                height: "110px",
                width:"100px"
              }} >

            </div>
          </div>
        </Container>
      </Grid>
    </SpaceBetween>
  );
};

export default GetProductById;
