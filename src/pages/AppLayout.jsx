import { useState } from "react";
import Header from "../UI/Header";
import CategoryLayout from "../features/category/CategoryLayout";
import AddProductForm from "../features/product/AddProductForm";
import useLocalStorage from "../hooks/useLocalStorage";

function AppLayout() {
  const [category, setCategory] = useLocalStorage("category", []);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center md:flex-row md:justify-between lg:max-w-screen-xl md:gap-x-12">
        <div className="space-y-9 flex-1">
          <CategoryLayout category={category} setCategory={setCategory} />
          <AddProductForm category={category} />
        </div>
        <div className="space-y-9 flex-1"></div>
      </div>
    </div>
  );
}

export default AppLayout;
