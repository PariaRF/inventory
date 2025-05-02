import { useState } from "react";
import AddCategoryForm from "./AddCategoryForm";

function CategoryLayout() {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  return (
    <>
      {showCategoryForm ? (
        <AddCategoryForm onCancel={() => setShowCategoryForm(false)} />
      ) : (
        <button
          className="text-primary-600 text-lg mb-4 font-medium"
          onClick={() => setShowCategoryForm(true)}
        >
          Add New Category?
        </button>
      )}
    </>
  );
}

export default CategoryLayout;
