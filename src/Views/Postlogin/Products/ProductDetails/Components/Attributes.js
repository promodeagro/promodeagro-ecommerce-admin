import React from 'react';
import {
  Container,
  Input,
  Form,
  SpaceBetween,
  FormField,
  Header,
  Box,
  Button,
  Modal,
  TokenGroup,
  Table,
  Grid,
} from "@cloudscape-design/components";
import edit from "../../../../../assets/img/icons/edit.png";
import deleteIcon from "../../../../../assets/img/icons/Icon.png"; // Ensure this path is correct
import "../../../../../assets/styles/CloudscapeGlobalstyle.css"
const Attributes = () => {
  const [option, setOption] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [isCollectionSaved, setIsCollectionSaved] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(null);

  const handleOptionKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddOption();
    }
  };

  const handleAddOption = () => {
    if (option) {
      if (editingIndex !== null) {
        // Edit existing option
        const updatedOptions = [...options];
        updatedOptions[editingIndex] = { label: option, value: option };
        setOptions(updatedOptions);
        setEditingIndex(null);
      } else {
        // Add new option
        setOptions([...options, { label: option, value: option }]);
      }
      setOption("");
    }
  };

  const handleEditOption = (index) => {
    setOption(options[index].label);
    setEditingIndex(index);
  };

  const handleDeleteOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    setIsModalOpen(false);
    setIsCollectionSaved(true);
  };

  return (
    <Container className='container-box-shadow' variant='borderless'
      header={
        <Grid
          gridDefinition={[
            { colspan: { default: 10, xxs: 9 } },
            { colspan: { default: 2, xxs: 3 } },
          ]}
        >
          <Header variant="h3">{isCollectionSaved ? title : "Attributes"}</Header>
          {isCollectionSaved && (
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Add Attribute 
            </Button>
          )}
        </Grid>
      }
    >
      {isCollectionSaved ? (
        <SpaceBetween direction="vertical" size="l">
          <Table
            variant="borderless"
            columnDefinitions={[
              { header: "Variant", cell: item => item.label },
              { header: "Quantity", cell: item => <Input placeholder="Enter quantity" /> },
              { header: "Price", cell: item => <Input placeholder="Enter price" /> },
              {
                header: "Action",
                cell: (item, rowIndex) => (
                  <>
                    <Button variant="inline-link"  onClick={() => handleDeleteOption(rowIndex)}>
                      <img src={deleteIcon} alt="Delete" style={{ width: '16px', height: '16px' }} />
                    </Button>
                    <Button variant="inline-link" onClick={() => handleEditOption(rowIndex)}>
                      <img src={edit} alt="Edit" style={{ width: '16px', height: '16px' }} />
                    </Button>
                  </>
                ),
              },
            ]}
            items={options}
            empty={
              <Box textAlign="center" color="inherit">
                <b>No attributes added yet.</b>
              </Box>
            }
          />
        </SpaceBetween>
      ) : (
        <SpaceBetween direction="vertical" size="l">
          <Box variant="h3" textAlign="center">
            Create attributes to add variants to your product
          </Box>
          <Box variant="p" textAlign="center">
            Attributes describe the characteristics of a product, such as
            size, color, or material. You can add a maximum of three
            attributes for every product.
          </Box>
          <Box textAlign="center">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Add Attribute
            </Button>
          </Box>
        </SpaceBetween>
      )}

      {/* Modal for Adding/Editing Attribute */}
      <Modal
        visible={isModalOpen}
        header={editingIndex !== null ? "Edit Attribute" : "Add Attribute"}
        onDismiss={() => {
          setIsModalOpen(false);
          setEditingIndex(null);
          setOption("");
        }}
        closeAriaLabel="Close modal"
        footer={
          <Box textAlign="center" float="right">
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                variant="link"
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingIndex(null);
                  setOption("");
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save
              </Button>
            </SpaceBetween>
          </Box>
        }
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Form>
            <SpaceBetween direction="vertical" size="l">
              <FormField label="Title">
                <Input
                  value={title}
                  onChange={({ detail }) => setTitle(detail.value)}
                  placeholder="Enter title"
                />
              </FormField>
              <FormField label="Options">
                <Input
                  value={option}
                  onChange={({ detail }) => setOption(detail.value)}
                  onKeyPress={handleOptionKeyPress}
                  placeholder="Enter an option and press Enter"
                />
                <div style={{ marginTop: "2px" }}>
                  <TokenGroup
                    items={options.map((opt) => ({ label: opt.label }))}
                    onDismiss={({ detail }) =>
                      setOptions((prev) =>
                        prev.filter((_, index) => index !== detail.itemIndex)
                      )
                    }
                    alignment="horizontal"
                  />
                </div>
              </FormField>
              <Button
                variant="primary"
                onClick={handleAddOption}
                disabled={!option}
              >
                {editingIndex !== null ? "Edit Option" : "Add Option"}
              </Button>
            </SpaceBetween>
          </Form>
        </form>
      </Modal>
    </Container>
  );
};

export default Attributes;
