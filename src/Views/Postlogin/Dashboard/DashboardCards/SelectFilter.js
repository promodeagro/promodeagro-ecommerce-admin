import React from 'react';
import { Select } from '@cloudscape-design/components';

const SelectFilter = ({ selectedFilter, onFilterChange, filterOptions }) => {
  return (
    <Select
      selectedOption={{ label: selectedFilter, value: selectedFilter }}
      onChange={onFilterChange}
      options={filterOptions}
      ariaLabel="Filter by date"
    />
  );
};

export default SelectFilter;
