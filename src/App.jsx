import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
