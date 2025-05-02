import DarkModeProvider from "./context/DarkModeContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <div className="h-screen bg-primary-100 text-primary-300">
        <AppLayout />
      </div>
    </DarkModeProvider>
  );
}

export default App;
