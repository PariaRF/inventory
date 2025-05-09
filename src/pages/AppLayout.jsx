import { useEffect, useState } from "react";
import Header from "../UI/Header";
import CategoryLayout from "../features/category/CategoryLayout";
import AddProductForm from "../features/product/AddProductForm";
import useLocalStorage from "../hooks/useLocalStorage";
import Filters from "../features/filters/Filters";
import { useForm } from "react-hook-form";
import ProductList from "../features/product/ProductList";
import Swal from "sweetalert2";

function AppLayout() {
  const [category, setCategory] = useLocalStorage("category", []);
  const [product, setProduct] = useLocalStorage("product", []);
  const { watch, register } = useForm({
    defaultValues: {
      search: "",
      sort: "earliest",
      category: "",
    },
  });

  const search = watch("search");
  const sort = watch("sort");
  const selectedCategory = watch("category");

  let filteredProducts = product.filter((p) =>
    p.title.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => Number(p.categoryId) === Number(selectedCategory)
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const dateA = new Date(a.createAt);
    const dateB = new Date(b.createAt);
    return sort === "latest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div>
      <Header productNumber={product.length} />
      <div className="container mx-auto p-4 flex flex-col items-center md:items-start md:flex-row md:justify-between lg:max-w-screen-xl md:gap-x-12">
        <div className="space-y-9 flex-1">
          <CategoryLayout category={category} setCategory={setCategory} />
          <AddProductForm
            category={category}
            product={product}
            setProduct={setProduct}
          />
        </div>
        <div className="space-y-9 flex-1">
          <Filters category={category} register={register} />
          <ProductList products={sortedProducts} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
