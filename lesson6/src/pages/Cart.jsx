import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard"
const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, setItems } =
    useCart();

  const location = useNavigate();

  const {data} = useContext(GlobalData)

  const chechkUser = () => {
    if (localStorage.getItem("NewUser") || localStorage.getItem("Admin")) {
      setItems([]);
    } else {
      toast.error("create an account");
      location("/register");
    }
  };
  return (
    <>
      <div className="container mt-5">
        {items.length === 0 ? (
          <section style={{width:"100%", height:"100vh", backgroundColor:"red"}}>
            <h1>Your cart is empyt</h1>
          </section>
        ) : (
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

            <h1>Cart Total : {cartTotal} azn</h1>
            <button className="btn btn-success" onClick={chechkUser}>
              Buy Now
            </button>
          </table>
        )}
      </div>


<h1>Recommended products</h1>
<div className="container">
  <div className="row">
    {
          data.slice(0,4).map((item)=>{
             return <SingleCard product={item} key={item.id}/>
          })
      }
  </div>
</div>
      
    </>
  );
};

export default Cart;
