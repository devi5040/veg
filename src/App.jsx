import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, Products } from "./customerPages";
import Header from "./include/Header";
import Footer from "./include/Footer";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import Login from "./Login";
import Navbar from "./admin/Navbar";
import { useNavigate } from "react-router-dom/dist";
import AdminHome from "./admin/AdminHome";
import AddProduct from "./admin/AddProduct";
import AddEquipment from "./admin/AddEquipment";
import AddTutorial from "./admin/AddTutorial";
import AddLand from "./admin/AddLand";

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route Component={Home} path="/" />
          <Route path="/products" Component={Products} />
          <Route path="/cart" Component={Cart} />
          <Route path="/login" Component={Login} />
          <Route path="/admin/" Component={AdminHome} />
          <Route path="/admin/add-product" Component={AddProduct} />
          <Route path="/admin/add-equipment" Component={AddEquipment} />
          <Route path="/admin/add-tutorial" Component={AddTutorial} />
          <Route path="/admin/add-land" Component={AddLand} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
