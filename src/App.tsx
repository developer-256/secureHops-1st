import Home from "./pages/home";

function App() {
  return (
    // fixWidth is a custom utility so that on very large screens (>1440px) width of content become constant
    <div className="font-Outfit fixWidth">
      <Home />
    </div>
  );
}

export default App;
