import DarkModeProvider from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="h-screen bg-primary-100 text-primary-300"></div>
    </DarkModeProvider>
  );
}

export default App;
