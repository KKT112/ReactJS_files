

import {App2} from "./App2";

const App = () => {
const { count, incrementCount } = App2();


return (
<div>
<p>The state is {count}</p>
<button  className=" border-1"onClick={() => incrementCount()}>Increment State</button>
</div>
);
};


export default App; 