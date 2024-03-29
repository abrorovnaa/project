import Header from "./components/header";
import "./assets/styles/main.scss";
import Footer from "./components/footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Connect from "./components/connect";
import ProductPage from "./pages/Product";

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Company />} path="/company" />
        <Route element={<ProductPage />} path="/products" />
      </Routes>
      <Connect />
     <Footer />
    </div>
  );
}

export default App;
