import React, { useContext, useEffect } from "react";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
import styles from "./Home.module.scss"
import Aos from "aos";
const Home = () => {
  const { data } = useContext(GlobalData);
  console.log(data);

  useEffect(()=>{
    Aos.init()
  })
  
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className="row">
            <h1>Salam</h1>
            {
              data.map((item, index)=>{
                return <SingleCard product={item} key={item.id}/>
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
