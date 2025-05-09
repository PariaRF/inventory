function ProductList({ products }) {
  return (
    <div>
      <h2 className="text-secondary-500 font-bold mb-5 border-b-primary-500 border-b">
        Product List
      </h2>
      <div className="max-h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-primary-500 pr-3">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between mt-5">
            <span>{product.title}</span>
            <div className="flex gap-x-4 items-center">
              <span>{new Date(product.createAt).toLocaleDateString()}</span>
              <span className="block max-w-[110px] truncate whitespace-nowrap overflow-hiddenblock px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                {product.categoryTitle}
              </span>
              <span className="flex items-center justify-center w-9 h-9  rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
