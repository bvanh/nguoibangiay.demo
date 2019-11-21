import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
const FilterToOrder = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const sortData = event => {
    const sorting = event.target.value;
    let sort = "";
    let order = "";
    if (sorting === "price-asc") {
      sort = "gia";
      order = "asc";
    } else if (sorting === "price-desc") {
      sort = "gia";
      order = "desc";
    }
    Router.push({
      pathname: "/shoes",
      query: { sort, order }
    });
  };
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Thứ tự mặc định</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Mới nhất</DropdownItem>
        <DropdownItem>Thứ tự theo điểm đánh giá</DropdownItem>
        <DropdownItem value="price-asc" onClick={sortData}>
          Thứ tự theo giá: Thấp => Cao{" "}
        </DropdownItem>
        <DropdownItem value="price-desc" onClick={sortData}>
          Thứ tự theo giá: Cao => Thấp{" "}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default FilterToOrder

