import React, { useContext, useState, useEffect } from "react";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
import Aos from "aos";

const Shop = () => {
  useEffect(() => {
    Aos.init();
  });

  const { data } = useContext(GlobalData);

  //   search

  const [state, setState] = useState(data);

  const [query, setQuery] = useState("");

  //   useEffect(() => {
  //     setState(data);
  //   }, [query]);

  //   category

  const myCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
    "all"
  ];

  const changeCategory = (myCategory)=>{
    if(myCategory === 'all'){
        setState(data)
        return
    }

    const filteredArray = data.filter((item)=>item.category === myCategory)
    setState(filteredArray)
  }

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
<div className="d-flex flex-column justify-content-start align-items-center">
 {myCategories.map((item, index) => {
        return <button onClick={()=>changeCategory(item)} key={index}>{item}</button>;
      })}
</div>
     
      <div className="container">
        <div className="row">
          {state
            .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
            .map((item, index) => {
              return <SingleCard product={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Shop;
