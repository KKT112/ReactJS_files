
//useref

import { useRef /*useState*/ } from "react";

export function App() {
  //const [count,setCount] = useState(0);

  const inputRef = useRef(0);

  const btnhandle = () => {
    //setCount(count+1);
    inputRef.current++;

    //console.log ( "state :", count);
    console.log("ref :", inputRef.current);
  };

  return (
    <div>
      <h1> count :{inputRef.current}</h1>
      <h1> count : {/*count*/}</h1>

      <button onClick={btnhandle}> submit </button>
    </div>
  );
}

export default App;
