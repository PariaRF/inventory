import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import TextArea from "../../UI/TextArea";
import TextField from "../../UI/TextField";
import { useEffect } from "react";

function AddCategoryForm({ onCancel, category, setCategory }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    if (data.title) {
      const newCategory = {
        ...data,
        createAt: new Date().toISOString(),
        id: new Date().getTime(),
      };

      setCategory([...category, newCategory]);

      reset();
    } else {
      return;
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      onCancel();
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="space-y-2">
      <h2>Add Category</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-primary-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <TextField
          id="category-title"
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
        <TextArea
          id="category-desc"
          name="description"
          label="Description"
          register={register}
          required
          errors={errors}
        />
        <div className="flex items-center justify-between gap-x-4">
          <Button
            buttonName="Cancel"
            btnClass="flex-1 border border-primary-500 text-primary-300 rounded-xl py-2 hover:border-primary-300 hover:text-primary-300 focus:border-primary-300 focus:text-primary-300"
            onClick={onCancel}
          />
          <Button
            buttonName="Add Category"
            type="submit"
            btnClass="flex-1 bg-primary-500 text-primary-200 rounded-xl py-2 hover:bg-primary-600 hover:text-primary-300 focus:bg-primary-600 focus:text-primary-300"
          />
        </div>
      </form>
    </div>
  );
}

export default AddCategoryForm;
