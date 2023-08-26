import React from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import WishlistBtn from "./WishlistBtn";
import { NavLink } from "react-router-dom";

const SingleCard = ({ product }) => {

  const {addItem} = useCart()

  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-6 col-12 p-3" data-aos="flip-down">
        <div className="card" style={{ width: "100%", height: "100%" }}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary" onClick={()=>{
              addItem(product)
              toast.success('Product added successfully')
            }}>Add to cart</button>
            <WishlistBtn oturduyumMehsul={product}/>
            <NavLink to={`/product/${product.id}`} className='btn btn-dark'>Etrafli</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
