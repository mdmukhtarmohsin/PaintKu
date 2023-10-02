import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup"
import SingleProduct from "./SingleProduct";
import Products from "../Pages/Products";
import { PrivateRouter } from "../ContextProvider/PrivateRouter";
const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<PrivateRouter><SingleProduct /></PrivateRouter>} />
    </Routes>
}
export default AllRoutes;