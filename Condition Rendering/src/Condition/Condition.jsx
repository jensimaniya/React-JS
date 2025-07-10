import React from "react";

const Conditionui = () => {
  return (
    <>
      <Productlist />
    </>
  );
};

export const Product = (props) => {
 
  if (props.stock < 20) {
    return <li style={{ color: "red", listStyle: "none" }}>{props.name}</li>;
  } else if (props.stock > 35) {
    return <li style={{ color: "green", listStyle: "none" }}>{props.name}</li>;
  } else if (props.stock >= 35) {
    return <li style={{ color: "blue", listStyle: "none" }}>{props.name}</li>;
  }
};

export const Productlist = () => {
  return (
    <>
      <ul>
        <Product name="AC" stock={10}></Product>
        <Product name="Laptop" stock={10}></Product>
        <Product name="Computer" stock={30}></Product>
        <Product name="Fridge" stock={50}></Product>
        <Product name="TV" stock={90}></Product>
        <Product name="Mixer" stock={35}></Product>
        <Product name="Blender" stock={45}></Product>
        
      </ul>
    </>
  );
};

export default Conditionui;
