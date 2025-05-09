import TextField from "../../UI/TextField";
import Select from "../../UI/Select";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const sortOptions = [
  {
    title: "Erliest",
    id: "earliest",
  },
  {
    title: "Latest",
    id: "latest",
  },
];

function Filters({ category, register }) {
  return (
    <div>
      <h2 className="text-secondary-500 font-bold mb-5 border-b-primary-500 border-b">
        Filters
      </h2>
      <div className="space-y-6">
        <TextField
          label="Search"
          id="search"
          name="search"
          register={register}
          extraClass="flex justify-between text-primary-600"
        />
        <Select
          label="Sort"
          options={sortOptions}
          name="sort"
          register={register}
          width="40"
          extraClass="flex justify-between text-primary-600"
          firstOption="option"
        />
        <Select
          label="Category"
          options={category}
          name="category"
          register={register}
          width="40"
          extraClass="flex justify-between text-primary-600"
          firstOption="category"
        />
      </div>
    </div>
  );
}

export default Filters;
