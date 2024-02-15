import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

function accountReducer(state = initialState, action) {
  if (action.type == "deposit") {
    return { ...state, balance: state.balance + action.payload };
  } else if (action.type == "withdraw") {
    return { ...state, balance: state.balance - action.payload };
  } else if (action.type == "mobileupdate") {
    return { ...state, mobile: action.payload };
  } else if (action.type == "nameupdate") {
    return { ...state, fullName: action.payload };
  } else return { ...state };
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
