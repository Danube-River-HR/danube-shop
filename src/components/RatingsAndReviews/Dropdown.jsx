import React from "react";
import { Dropdown } from "semantic-ui-react";

const sortOptions = [
  {
    key: "relevant",
    text: "Relevance",
    value: "relevant"
  },
  {
    key: "helpful",
    text: "Helpfulness",
    value: "helpful"
  },
  {
    key: "newest",
    text: "Newest",
    value: "newest"
  }
];

const DropdownInline = ({ changeValue }) => (
  <span>
    {" "}
    sorted by{" "}
    <Dropdown
      inline
      options={sortOptions}
      defaultValue={sortOptions[0].value}
      onChange={changeValue}
    />
  </span>
);

export default DropdownInline;
