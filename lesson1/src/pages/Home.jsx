import React, { useContext } from "react";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";

const Home = () => {
  const { data } = useContext(GlobalData);
  console.log(data);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              data.slice(0,4).map((item, index)=>{
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
