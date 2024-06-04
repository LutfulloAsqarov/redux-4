import React from "react";
import { useLocation } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import { FaHeart } from "react-icons/fa";

const ProductsItem = ({ product }) => {
    let { pathname } = useLocation();
    const dispatch = useDispatch();
    const wishlistData = useSelector((state) => state.wishlist.value);
    console.log(wishlistData);
    // console.log(product);

    return (
        <div key={product.id} className="products__card">
            <div className="products__card__img">
                <img src={product.image} alt="" />
            </div>
            <div className="products__card__info">
                <h3>{product.title}</h3>
                <div className="products__card__price">
                    <p>${product.price}</p>
                    <div>
                        {pathname.includes("/admin") ? (
                            <div className="products__card__btns">
                                <button>
                                    <CiEdit />
                                </button>
                                <button>
                                    <RiDeleteBin6Line />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => dispatch(like(product))}
                                className="products__card__like-btn"
                            >
                                {wishlistData.some(
                                    (el) => el.id === product.id
                                ) ? (
                                    <FaHeart style={{ color: "crimson" }} />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;
