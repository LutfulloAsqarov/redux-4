import React from "react";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import "./products.scss";

import ProductsItem from "../productsItem";
const Products = () => {
    const { data } = useGetAllProductsQuery();

    // const wishlistData = useSelector((state) => state.wishlist.value);
    // console.log(wishlistData);
    // let products = data?.map((el) => (

    // ));
    return (
        <div className="products">
            <div className="products__cards">
                {data?.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
