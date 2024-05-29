import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/action";
import ProductCard from "./ProductCard";

function Products() {
  const dispatch = useDispatch();

  let product = useSelector((state) => state.products.product);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  console.log(product);

  return (
    <div className="m-10 p-4 grid grid-cols-4 space-x-5 ">
      {product.map((item) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Products;
