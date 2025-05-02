import Header from "../UI/Header";
import CategoryLayout from "../features/category/CategoryLayout";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 flex flex-col items-center md:flex-row md:justify-between lg:max-w-screen-xl md:gap-x-12">
        <div>
          <CategoryLayout />
        </div>
        <div>show</div>
      </div>
    </div>
  );
}

export default AppLayout;
