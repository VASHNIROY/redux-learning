import { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { deposit, withdraw, mobileupdate, nameupdate } from "../action";

function Form() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [fullname, setfullname] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="container">
      <h2 className="heading">Form </h2>
      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
        <button
          onClick={() => {
            dispatch(deposit(amount));
            setAmount("");
          }}
          className="deposit-btn"
        >
          {" "}
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch(withdraw(amount));
            setAmount("");
          }}
          className="deposit-btn"
        >
          {" "}
          withdraw
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          type="text"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
          placeholder="Enter Full Name"
        />
        <button
          onClick={() => {
            dispatch(nameupdate(fullname));
            setfullname("");
          }}
          className="deposit-btn"
        >
          {" "}
          Update
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <input
          className="form-control"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter Mobile number"
        />
        <button
          onClick={() => {
            dispatch(mobileupdate(number));
            setNumber("");
          }}
          className="deposit-btn"
        >
          {" "}
          Update
        </button>
      </div>
    </div>
  );
}

export default Form;
