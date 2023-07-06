import Carousel1 from "../component/shop/Carousel1";
import data from "../goodsdata";
import React, { useEffect, Component, useState } from "react";
import ProductCard from "../component/shop/ProductCard";
import "./ShopPage.css";

export default function ShopPage() {
  return (
    <>
      <Carousel1 />
      <ProductCard goods={data} />
    </>
  );
}
