import React, { useCallback,useState,memo } from "react";

function UserCallBackPage() {
  const [count, setCount] = useState(0);

  const getMyName = useCallback(() => {
    return "kuldeep";
  },[]);

  

  return (
    <div>
      <p>{count}</p>
      <MyNameCom getMyName={getMyName} />
      <button onClick={() => setCount((p) => p + 1)}>Click me</button>
   
    </div>
  );
}

export default UserCallBackPage;

const MyNameCom = memo(({ getMyName }: { getMyName: () => string}) => {
  console.log("I am called");
  return <p>{getMyName()}</p>;
});