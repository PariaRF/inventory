import { useForm } from "react-hook-form";
import useLocalStorage from "../../hooks/useLocalStorage";
import TextField from "../../UI/TextField";
import Button from "../../UI/Button";
import Select from "../../UI/Select";
import { useEffect } from "react";

let selectedCategoryId = "";

function AddProductForm({ category }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useLocalStorage("product", []);

  useEffect(() => {
    selectedCategoryId = watch("categoryId");
  }, []);

  useEffect(() => {}, [selectedCategoryId]);

  const onSubmit = (data) => {
    const newProduct = {
      ...data,
      createAt: new Date().toISOString(),
      id: new Date().getTime(),
      categoryId: selectedCategoryId,
    };
    setProduct([...product, newProduct]);

    reset();
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-primary-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <TextField
          id="product-title"
          name="title"
          label="Title"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "Title is required!",
            minLength: {
              value: 5,
              message: "Length must be more than 15 characters.",
            },
          }}
        />
        <TextField
          id="product-quantity"
          name="quantity"
          label="Quantity"
          type="number"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "Quantity is required!",
            min: {
              value: 1,
              message: "Quantity must be greater than 0.",
            },
          }}
        />

        <Select
          label="Category"
          options={category}
          name="categoryId"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "Select a category is required!",
          }}
        />

        <div className="flex items-center justify-between gap-x-4">
          <Button
            buttonName="Add Product"
            type="submit"
            btnClass="flex-1 bg-primary-500 text-primary-200 rounded-xl py-2 hover:bg-primary-600 hover:text-primary-300 focus:bg-primary-600 focus:text-primary-300"
          />
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
