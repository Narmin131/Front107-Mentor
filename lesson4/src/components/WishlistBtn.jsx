import React from "react";
import { toast } from "react-toastify";
import { useWishlist } from "react-use-wishlist";

const WishlistBtn = ({oturduyumMehsul}) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunction = (myProduct) => {
    if (inWishlist(myProduct.id)) {
      removeWishlistItem(myProduct.id);
      toast.error('Wishlistden silindi')
    } else {
      addWishlistItem(myProduct);
      toast.success('Wishliste elave olunud')
    }
  };

  return (
    <>
      <button onClick={()=>toggleFunction(oturduyumMehsul)}  className="btn btn-light">
        {
            inWishlist(oturduyumMehsul.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
        }
      </button>
    </>
  );
};

export default WishlistBtn;
