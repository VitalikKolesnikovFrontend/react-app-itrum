import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./Nav/Nav";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";
// import Categories from "./pages/Categories/Categories";
// import Countries from "./pages/Countries/Countries";
// import Modal from './pages/Modal/Modal';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <div className="box">
        <Routes>
          <Route path={"/products"} element={<Products />} />
          <Route path={"/users"} element={<Users />} />
          {/* <Route path={"/categories"} element={<Categories />} />
          <Route path={"/countries"} element={<Countries />} /> */}
        </Routes>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
