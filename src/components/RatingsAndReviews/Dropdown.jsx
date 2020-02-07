import React from "react";
import { Dropdown } from "semantic-ui-react";

const sortOptions = [
  {
    key: "relevance",
    text: "Relevance",
    value: "relevance"
  },
  {
    key: "helpfulness",
    text: "Helpfulness",
    value: "helpfulness"
  },
  {
    key: "newest",
    text: "Newest",
    value: "newest"
  }
];

const DropdownInline = () => (
  <span>
    {" "}
    sorted by{" "}
    <Dropdown
      inline
      options={sortOptions}
      defaultValue={sortOptions[0].value}
    />
  </span>
);

export default DropdownInline;
