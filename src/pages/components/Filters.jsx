import React from "react";
import RangeSelector from "../../styledComponents/RangeSelector";
import { categories } from "../../constants";
import Checkbox from "../../styledComponents/Checkbox";
import Button from "../../styledComponents/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Filters = () => {
  const handleChange = (event, newValue) => {
    setValues({ ...values, range: newValue });
  };

  const initialValues = {
    range: [50,75],
    categories: [],
  };

  const [values, setValues] = React.useState(initialValues);

  const updateChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setValues({
        ...values,
        categories: [...values.categories, name],
      });
    } else {
      setValues({
        ...values,
        categories: values.categories.filter((category) => category !== name),
      });
    }
  };

  const applyFilters = () => {
    console.log(values);
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <p className="text-gray-500 font-bold">PRICE RANGE</p>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={values.range}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </div>
      <div>
        <p className="text-gray-500 font-bold">CATEGORIES</p>
        {categories.map((category) => {
          return (
            <div className="flex items-center">
              <Checkbox
                type="checkbox"
                className="mr-2"
                name={category}
                onChange={updateChange}
              />
              <p>{category}</p>
            </div>
          );
        })}
      </div>
      <Button className="mt-4" onClick={applyFilters}>
        APPLY
      </Button>
    </div>
  );
};

export default Filters;

5;
