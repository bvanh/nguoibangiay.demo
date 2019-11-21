import { useState } from "react";
import Router from "next/router";
import { CustomInput, Button, FormGroup, Label } from "reactstrap";
const FilterforPrice = () => {
  const [CustomRange, setCustomRange] = useState(1000000);
  const changeprice = e => setCustomRange(([e.target.name] = e.target.value));
  const sortPrice = (e) => {
      let gia_lte=CustomRange;
    Router.push({
      pathname: "/shoes",
      query: { gia_lte }
    });
  };
  return (
    <FormGroup>
      <CustomInput
        type="range"
        id="exampleCustomRange"
        name="customRange"
        value={CustomRange}
        min="500"
        max="2000000"
        onChange={changeprice}
      />
      <Label for="exampleCustomRange">
        {Number(CustomRange).toLocaleString()} đ
        <Button color="secondary" size="sm" onClick={sortPrice}value={CustomRange}>
          Lọc
        </Button>
      </Label>
    </FormGroup>
  );
};
export default FilterforPrice;
