import { useReducer } from "react";

  
  // An interface for our actions
  interface CountAction {
    type: "ADD"|"MINUS"|"MUL"|"DIV";
    payload: number;
  }
  
  // An interface for our state
  interface CountState {
    count: number;
  }
  
  // Our reducer function that uses a switch statement to handle our actions
  function counterReducer(state: CountState, action: CountAction) {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
        return {
          ...state,
          count: state.count + payload,
        };
      case "MINUS":
        return {
          ...state,
          count: state.count - payload,
        };
      case "MUL" :
        return {
            ...state,
            count :state.count *payload,
         }
       case "DIV" :
       return{
            ...state,
            count :state.count /payload,
       }
         
      default:
        return state;
    }
  }
  
  // An example of using the `useReducer` hooks with our reducer function and an initial state
  const Counter= () => {
    const [state, dispatch] = useReducer(counterReducer, {count: 20});
    return (
      <div>
        Count: {state.count}
        {/* Calling our actions on button click */}
        <button onClick={() => dispatch({ type: "ADD", payload: 5 })}>BTN-1</button>
        <button onClick={() => dispatch({ type: "MINUS", payload: 5 })}>BTN-2</button>
        <button onClick={()=>dispatch({type: "MUL",payload:5})}>BTN-3</button>
        <button onClick={()=>dispatch({type :"DIV" ,payload:5})}>BTN-4</button>
      </div>
    );
}
    export default Counter;