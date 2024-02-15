import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "mobileupdate":
      return { ...state, mobile: action.payload };
    case "nameupdate":
      return { ...state, fullName: action.payload };
    default:
      return { ...state };
  }
}

const store = createStore(accountReducer);

console.log(store.getState());

store.dispatch({ type: "deposit", payload: 1000 });
console.log(store.getState());

store.dispatch({ type: "withdraw", payload: 100 });
console.log(store.getState());

store.dispatch({ type: "mobileupdate", payload: "realme" });
console.log(store.getState());

store.dispatch({ type: "nameupdate", payload: "vashni roy" });
console.log(store.getState());
