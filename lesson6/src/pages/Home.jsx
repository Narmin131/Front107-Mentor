import React, { useContext, useEffect, useState } from "react";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
import styles from "./Home.module.scss";
import Aos from "aos";
import Pagination from "../components/Pagination";
const Home = () => {
  const { data } = useContext(GlobalData);
  console.log(data);

  useEffect(() => {
    Aos.init();
  });

  const [a, setA] = useState(data);

  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(5);
  const [activePg, setActivePg] = useState(1);

  const last = current * count; // 2*5 =10
  const first = last - count; // 10 - 5 = 5

  const values = data.slice(first, last);

  const buttonCount = [];
  for (let i = 1; i <= Math.ceil(data.length / count); i++) {
    buttonCount.push(i);
  }

  const handleClick = (i) => {
    console.log(i);
    setCurrent(i);
    setActivePg(i);
  };

  // Change page
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    shuffle(a);
  });

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="row">
            <h1>Salam</h1>

            {a.slice(0, 3).map((item, index) => {
              return <SingleCard product={item} key={item.id} />;
            })}
            <hr />
            <hr />

            <div className="d-flex">
              {buttonCount.map((btn) => (
                <button
                  key={btn}
                  className={
                    btn == activePg ? "btn btn-success" : "btn btn-default"
                  }
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>

            {values.map((item, index) => {
              return <SingleCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
