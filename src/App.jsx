import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Wishlist from "./pages/wishlist";
import Admin from "./pages/admin";
import CreateProduct from "./pages/admin/create-product";
import ManageProduct from "./pages/admin/manage-product";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/admin" element={<Admin />}>
                    <Route path="createProduct" element={<CreateProduct />} />
                    <Route path="manageProduct" element={<ManageProduct />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
