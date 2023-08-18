import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleCard from "../components/SingleCard";

const Wishlist = () => {
  const { items } = useWishlist();
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {items.map((item) => {
              return <SingleCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
