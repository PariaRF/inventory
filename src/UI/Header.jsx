import ThemeToggle from "./ThemeToggle";

function Header({ productNumber = 0 }) {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-primary-700 mb-6 sticky top-0">
      <h1 className="md:text-xl text-sm font-bold text-primary-300">
        Inventory App
        <span className="hidden md:inline"> using Tailwind & React.js</span>
      </h1>
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 border-2 border-primary-300 font-bold text-primary-300 font-serif">
        {productNumber}
      </span>
      <ThemeToggle />
    </div>
  );
}

export default Header;
