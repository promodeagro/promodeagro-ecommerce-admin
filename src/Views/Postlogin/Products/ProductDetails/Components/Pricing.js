import React, { useEffect } from "react";
import {
  Container,
  Input,
  Form,
  FormField,
  Checkbox,
  SpaceBetween,
  Header,
} from "@cloudscape-design/components";

const Pricing = ({ product }) => {
  const [checked, setChecked] = React.useState(false);
  const [purchaseprice, setpurchaseprice] = React.useState(
    product.data?.purchasingPrice
  );
  return (
    <Container header={<Header variant="h3">Pricing</Header>}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Form>
          <SpaceBetween direction="vertical" size="l">
            <div style={{ display: "flex", gap: "15px" }}>
              <FormField label="Purchasing Price">
                <Input
                  value={purchaseprice}
                  disabled
                  size="3xs"
                  onChange={({ detail }) => setpurchaseprice(detail.value)}
                  placeholder="Input Purchasing Price"
                />
              </FormField>
              <FormField label="Minimum Selling Price">
                <Input disabled size="3xs" placeholder="Min Selling Price" />
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
            <hr />
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
  );
};

export default Pricing;
