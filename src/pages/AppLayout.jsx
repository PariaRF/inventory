import { useEffect, useState } from "react";
import Header from "../UI/Header";
import CategoryLayout from "../features/category/CategoryLayout";
import AddProductForm from "../features/product/AddProductForm";
import useLocalStorage from "../hooks/useLocalStorage";
import Filters from "../features/filters/Filters";
import { useForm } from "react-hook-form";
import ProductList from "../features/product/ProductList";
import Swal from "sweetalert2";
let isDark;

function AppLayout() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
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

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const darkMode = localStorage.getItem("isDarkMode") === "true";
      setIsDark(darkMode);
    });

    // Observe changes to classList (if you use Tailwind's class-based dark mode)
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

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

  const handleDelete = async (productId) => {
    console.log("dard", isDark);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      background: isDark ? "#1f2937" : "#fff",
      color: isDark ? "#f9fafb" : "#111827",
      confirmButtonColor: isDark ? "#EF4444" : "#dc2626",
      cancelButtonColor: isDark ? "#4B5169" : "#4B5563", // Tailwind blue-500
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setProduct((prev) => prev.filter((p) => p.id !== productId));

      Swal.fire({
        title: "Deleted!",
        text: "Product has been removed.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        background: isDark ? "#1f2937" : "#fff",
        color: isDark ? "#f9fafb" : "#111827",
      });
    }
  };

  return (
    <div>
      <Header productNumber={product.length} />
      <div className="container mx-auto p-4 flex flex-col items-center gap-8 md:gap-0 md:items-start md:flex-row md:justify-between lg:max-w-screen-xl md:gap-x-12">
        <div className="space-y-9 flex-1 w-full">
          <CategoryLayout category={category} setCategory={setCategory} />
          <AddProductForm
            category={category}
            product={product}
            setProduct={setProduct}
          />
        </div>
        <div className="space-y-9 flex-1">
          <Filters category={category} register={register} />
          <ProductList products={sortedProducts} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
