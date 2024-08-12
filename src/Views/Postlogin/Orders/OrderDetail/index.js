import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import { Icon, Grid, Container } from "@cloudscape-design/components";
import Wizard from "@cloudscape-design/components/wizard";
import Input from "@cloudscape-design/components/input";
import FormField from "@cloudscape-design/components/form-field";




const OrderDetail = () => {
  const [
    activeStepIndex,
    setActiveStepIndex
  ] = React.useState(0);

  return (
    <div>
      <BreadcrumbGroup
        items={[
          { text: "Dashboard", href: "/app/dashboard" },
          { text: "Order", href: "/app/orders" },
          { text: "Order Detail", href: "#" },
        ]}
        ariaLabel="Breadcrumbs"
      />
      <Header
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button iconAlign="right" iconName="caret-down-filled">
              In-progress
            </Button>
            <Button iconName="external">Refund</Button>
            <Button iconAlign="right" iconName="angle-down">
              Print
            </Button>
            <Button iconAlign="right" iconName="angle-down">
              Actions
            </Button>
            <button style={{cursor: 'pointer', borderRadius: '1rem', width: '46px', height: '30px', backgroundColor: 'black', color: 'white'}}>
              <Icon name="angle-left" />
              
            </button>
            <button style={{cursor: 'pointer', borderRadius: '1rem', width: '46px', height: '30px', backgroundColor: 'black', color: 'white'}}>
              <Icon name="angle-right" />
              
            </button>
          </SpaceBetween>
        }
      >
        #1110
      </Header>
      <Wizard
      i18nStrings={{
        stepNumberLabel: stepNumber =>
          `Step ${stepNumber}`,
        collapsedStepsLabel: (stepNumber, stepsCount) =>
          `Step ${stepNumber} of ${stepsCount}`,
        skipToButtonLabel: (step, stepNumber) =>
          `Skip to ${step.title}`,
        navigationAriaLabel: "Steps",
        cancelButton: "Cancel",
        previousButton: "Previous",
        nextButton: "Next",
        submitButton: "Launch instance",
        optional: "optional"
      }}
      onNavigate={({ detail }) =>
        setActiveStepIndex(detail.requestedStepIndex)
      }
      activeStepIndex={activeStepIndex}
      allowSkipTo
      steps={[
        {
          title: "Choose instance type",
          description:
            "Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
          content: (
            <Container
              header={
                <Header variant="h2">
                  Form container header
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="First field">
                  <Input />
                </FormField>
                <FormField label="Second field">
                  <Input />
                </FormField>
              </SpaceBetween>
            </Container>
          )
        },
        {
          title: "Add storage",
          content: (
            <Container
              header={
                <Header variant="h2">
                  Form container header
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="First field">
                  <Input />
                </FormField>
                <FormField label="Second field">
                  <Input />
                </FormField>
              </SpaceBetween>
            </Container>
          ),
          isOptional: true
        },
        {
          title: "Configure security group",
          content: (
            <Container
              header={
                <Header variant="h2">
                  Form container header
                </Header>
              }
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="First field">
                  <Input />
                </FormField>
                <FormField label="Second field">
                  <Input />
                </FormField>
              </SpaceBetween>
            </Container>
          ),
          isOptional: true
        },
        {
          title: "Review and launch",
          content: (
            <SpaceBetween size="xs">
              <Header
                variant="h3"
                actions={
                  <Button
                    onClick={() => setActiveStepIndex(0)}
                  >
                    Edit
                  </Button>
                }
              >
                Step 1: Instance type
              </Header>
                          </SpaceBetween>
          )
        }
      ]}
    />

   
    </div>
     
  );
};

export default OrderDetail;
