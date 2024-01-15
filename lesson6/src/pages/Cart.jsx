import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, setItems } =
    useCart();

  const location = useNavigate();

  const { data } = useContext(GlobalData);

  const chechkUser = () => {
    if (localStorage.getItem("NewUser") || localStorage.getItem("Admin")) {
      setItems([]);
    } else {
      toast.error("create an account");
      location("/register");
    }
  };

  let cartCost = JSON.parse(localStorage.getItem("react-use-cart"));
  const [totalCost, setTotalCost] = useState(cartCost.cartTotal);
  const [a, b] = useState(JSON.parse(localStorage.getItem("totalCost")));

  useEffect(() => {
    setTotalCost(cartCost.cartTotal);
    b(totalCost)
    localStorage.setItem("totalCost", JSON.stringify(totalCost));
  }, [cartCost]);

  // DISCOUNT FUNCTIONALITY
  function discountCart(e) {
    e.preventDefault();
    var discount = 20;
    let value = a - discount;
    if (a >= 300) {
      b(value);
      localStorage.setItem("totalCost", JSON.stringify(a));
      console.log("discount", value);
    }
  }
  return (
    <>
      <div className="container mt-5">
        {items.length === 0 ? (
          <section
            style={{ width: "100%", height: "100vh", backgroundColor: "red" }}
          >
            <h1>Your cart is empyt</h1>
          </section>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: "120px" }}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price * item.quantity} azn</td>
                        <td>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              removeItem(item.id);
                              toast.error("Product removed from cart");
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <h1 style={{ width: "600px" }}>Cart Total : {a} azn</h1>
            <button className="btn btn-success" onClick={chechkUser}>
              Buy Now
            </button>

            <form onSubmit={discountCart}>
              <input type="text" name="" id="" placeholder="enter promocode" />
              <button className="btn btn-danger">apply coupon</button>
            </form>
          </>
        )}
      </div>

      <h1>Recommended products</h1>
      <div className="container">
        <div className="row">
          {data.slice(0, 4).map((item) => {
            return <SingleCard product={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
