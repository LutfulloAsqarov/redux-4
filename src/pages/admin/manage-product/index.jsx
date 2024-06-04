import React from "react";
import "./manageProduct.scss";
import Products from "../../../components/products";

const ManageProduct = () => {
    return (
        <div className="manageProduct">
            <h2>Manage Product</h2>
            <Products />
        </div>
    );
};

export default ManageProduct;
