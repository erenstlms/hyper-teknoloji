import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product-list" element={<ProductList />} />
          </Routes>
        </CartProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;
