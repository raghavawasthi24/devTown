import React from "react";
import { categories } from "../../constants";
import Checkbox from "../../styledComponents/Checkbox";
import Button from "../../styledComponents/Button";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { applyFilter } from "../../store/slices/filterSlice";

const Filters = () => {
  //chnage the range value
  const handleChange = (event, newValue) => {
    setValues({ ...values, range: newValue });
  };

  const initialValues = {
    range: [150, 50000],
    categories: [],
  };

  const [values, setValues] = React.useState(initialValues);
  const dispatch = useDispatch();

  //update the categories
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
    dispatch(applyFilter(values));
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      <div>
        <p className="text-gray-500 font-bold">PRICE RANGE</p>
        <Slider
          getAriaLabel={() => "price range"}
          value={values.range}
          min={100}
          max={100000}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </div>
      <div>
        <p className="text-gray-500 font-bold">CATEGORIES</p>
        {categories.map((category, key) => {
          return (
            <div className="flex items-center" key={key}>
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
