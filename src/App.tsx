import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Book from "./pages/Book";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <div className="px-4 bg-slate-100 max-w-[1700px] min-h-[590px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/store/:id" element={<Book />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
