import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Nav/Nav";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
import Categories from "./pages/Categories/Categories";
import Countries from "./pages/Countries/Countries";
import Brands from "./pages/Brands/Brands";
import Protocols from "./pages/Protocols/Protocols";
import Orders from "./pages/Orders/Orders";
import Banners from "./pages/Banners/Banners";
import Seminars from "./pages/Seminars/Seminars";
import Code from "./pages/Code/Code";
// import Modal from './pages/Modal/Modal';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <div className="box">
        <Routes>
          <Route path={"/products"} element={<Products />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/categories"} element={<Categories />} />
          <Route path={"/countries"} element={<Countries />} />
          <Route path={"/brands"} element={<Brands />} />
          <Route path={"/protocols"} element={<Protocols />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/banners"} element={<Banners />} />
          <Route path={"/seminars"} element={<Seminars />} />
          <Route path={"/code"} element={<Code />} />
        </Routes>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
