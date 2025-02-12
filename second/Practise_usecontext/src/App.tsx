import {  MyGlobalProvider } from "./my-global-context";
import Home from "./Home";
import About from "./About";
function App() {
 
  return (
    <MyGlobalProvider>
      <Home />
      <About />
    </MyGlobalProvider>
  );
}
export default App;
