import React from 'react'
import {

    Container,
    Toggle,
    Input,
    Form,
    SpaceBetween,
    Checkbox,
    FormField,

    Header,
 
  } from "@cloudscape-design/components";
  import "../../../../../assets/styles/CloudscapeGlobalstyle.css"

const InventoryTracking = ({product}) => {
    
  const [checked, setChecked] = React.useState(false);
  const [toggleChecked, setToggleChecked] = React.useState(false);
  return (
    <Container variant='borderless'  className='container-box-shadow' header={<Header variant="h3">Inventory Tracking</Header>}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Form>
                <SpaceBetween direction="vertical" size="l">
                  <Checkbox
                    onChange={({ detail }) => setChecked(detail.checked)}
                    checked={checked}
                  >
                    Track Inventory
                  </Checkbox>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <FormField label="Low Stock Limit">
                      <Input size="3xs" placeholder="stock" />
                    </FormField>
                    <FormField label="Quantity">
                      <Input value={product.data?.stockQuantity} disabled size="3xs" placeholder="Quantity" />
                    </FormField>
                  </div>
                  <Toggle
                    onChange={({ detail }) => setToggleChecked(detail.checked)}
                    checked={toggleChecked}
                  >
                    Quantity Restriction
                  </Toggle>

                  <div style={{ display: "flex", gap: "15px" }}>
                    <FormField label="Minimum">
                      <Input disabled size="3xs" placeholder="90" />
                    </FormField>
                    <FormField label="Maximum">
                      <Input disabled size="3xs" placeholder="80" />
                    </FormField>
                  </div>
                </SpaceBetween>
              </Form>
            </form>
          </Container>

  )
}

export default InventoryTracking