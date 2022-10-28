import React, { useState, useEffect } from "react";
import Orders from "../Orders.json";
export default function Form() {
  const [type, setType] = useState("");
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [batter, setBatter] = useState("");
  const [topping, setTopping] = useState("");

  const result = Array.from(new Set(Orders.map((order) => order.type))).map(
    (type) => {
      return {
        type: Orders.find((order) => order.type === type).type,
      };
    }
  );
  const handleChange = (e) => {
    setType(e.target.value);
  };
  const handleChange1 = (e) => {
    setName(e.target.value);
  };
  const handleBatter = (e) => {
    setBatter(e.target.value);
    console.log(batter);
  };
  const handleTopping = (e) => {
    setTopping(e.target.value);
    console.log(topping);
  };
  const handleSubmit=(e)=>{
    alert("Order Successful!!!"+"\n"+"Type :"+type+ "\n" +"Name :"+name+ "\n"+"Batter :"+batter+"\n"+"Topping :"+topping);
  }
  var option;
  option = Orders.map(function (res, i) {
    if (res.type === type) {
      return <option key={res.name} value={res.name}>{res.name}</option>;
    }
    return null;
  });

  useEffect(() => {
    setIndex(
      Orders.findIndex(function (item, i) {
        return item.name === name;
      })
    );
  }, [type, name]);

  return (
    <div className="frm">
      <form className="frm1">
        <div>
          <label>Orders</label>
        </div>
        <div>
          <label>Type:</label>
          <select
            className="slt"
            name="type"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option selected disabled>
              Select..
            </option>
            {result.map((res) => {
              return <option key={res.type} value={res.type}>{res.type}</option>;
            })}
          </select>
        </div>
        <div>
          <label>Name:</label>
          <select
            className="slt"
            onClick={(e) => {
              handleChange1(e);
            }}
          >
            <option selected disabled>
              Select...
            </option>
            {option}
          </select>
        </div>
        <div className="flx">
          <div>
            {" "}
            <label>PPU :</label>
          </div>
          <div>{index >= 0 ? Orders[index].ppu : "----"}</div>
        </div>
        <div>
          <label>Batters:</label>
          <select
            className="slt"
            onClick={(e) => {
              handleBatter(e);
            }}
          >
            <option selected disabled>
              Select...
            </option>
            {index >= 0
              ? Orders[index].batters.batter.map((batter1) => {
                  return <option key={batter1.id} value={batter1.type}>{batter1.type}</option>;
                })
              : null}
          </select>
        </div>
        <div>
          <label>Toppings:</label>
          <select
            className="slt"
            onClick={(e) => {
              handleTopping(e);
            }}
          >
            <option selected disabled>
              Select...
            </option>
            {index >= 0
              ? Orders[index].topping.map((topping1) => {
                  return <option key={topping1.id} value={topping1.type}>{topping1.type}</option>;
                })
              : null}
          </select>
        </div>
        <div>
          <input type="submit" className="submit" onClick={(e)=>{handleSubmit(e)}}/>
        </div>
      </form>
    </div>
  );
}
