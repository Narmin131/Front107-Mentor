import React, { useContext, useState, useEffect } from "react";
import { GlobalData } from "../context/GlobalContext";
import SingleCard from "../components/SingleCard";
import Aos from "aos";
import { Select } from "antd";
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
    "all",
  ];

  const changeCategory = (myCategory) => {
    if (myCategory === "all") {
      setState(data);
      return;
    }

    const filteredArray = data.filter((item) => item.category === myCategory);
    setState(filteredArray);
  };

  // sort

  const sortProducts = (value) => {
    if (value === "all") {
      setState(data);
      return;
    } else if (value === "lowest-price") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortProducts);
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortProducts);
    }
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Select
        defaultValue="All"
        style={{
          width: 120,
        }}
        onChange={sortProducts}
        options={[
          {
            value: "highest-price",
            label: "Highest(price)",
          },
          {
            value: "lowest-price",
            label: "Lowest(price)",
          },
          {
            value: "a-z",
            label: "A-Z",
          },
          {
            value: "z-a",
            label: "Z-A",
          },
          {
            value: "all",
            label: "All",
          },
        ]}
      />
      <div className="d-flex flex-column justify-content-start align-items-center">
        {myCategories.map((item, index) => {
          return (
            <button onClick={() => changeCategory(item)} key={index}>
              {item}
            </button>
          );
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
