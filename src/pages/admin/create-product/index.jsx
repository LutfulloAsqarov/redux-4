import React from "react";
import "./createProduct.scss";
const CreateProduct = () => {
    return (
        <div className="createProduct">
            <h2>Create Product</h2>
            <form className="form">
                <div className="form__input">
                    <label> Title</label>
                    <input type="text" />
                </div>
                <div className="form__input">
                    <label> Price</label>
                    <input type="number" />
                </div>
                <div className="form__input">
                    <label> Image</label>
                    <input type="text" />
                </div>
                <div className="form__input">
                    <label> Category</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
