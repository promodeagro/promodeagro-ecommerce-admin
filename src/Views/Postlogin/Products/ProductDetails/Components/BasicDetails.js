import { Container, Input,
    Form, FormField,  Textarea, Select, SpaceBetween } from '@cloudscape-design/components';
import React from 'react'

const BasicDetails = ({product}) => {
   console.log("prod from basic",product);
    const [description, setDescription] = React.useState(product.data.description)
    const [name, setname] = React.useState(product.data.name) 
  const [selectedCategory, setSelectedCategory] = React.useState({
    label: product.data?.category,
    value: product.data?.category,
  });
  const [selectedUnit, setSelectedUnit] = React.useState({
    label: product.data?.units,
    value: product.data?.units,
  });
  const [selectedStatus, setSelectedStatus] = React.useState({
    label: "Option 1",
    value: "1",
  });
  return (
    <Container>
    <form onSubmit={(e) => e.preventDefault()}>
      <Form>
        <SpaceBetween direction="vertical" size="l">
          <div style={{ width: "52vw" }}>
            <FormField stretch label="Product Name">
              <Input placeholder="Input Item Name" value={name}
               onChange={({ detail }) =>
                setname(detail.value)
              }/>
            </FormField>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <div style={{ width: "210px" }}>
              <FormField label="Category">
                <Select
                  disabled
                  selectedOption={selectedCategory}
                  onChange={({ detail }) =>
                    setSelectedCategory(detail.value)
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
                  disabled
                  selectedOption={selectedUnit}
                  onChange={({ detail }) =>
                    setSelectedUnit(detail.value)
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
                  disabled
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

          <FormField label="Product Description">
            <div style={{ width: "52vw" }}>
              <Textarea
                name="TextArea"
                disabled
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

  )
}

export default BasicDetails