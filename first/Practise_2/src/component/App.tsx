import '../index.css'
function App() {


const age:number=27;

  return(
 
    
     <div className="main-contain">
       <img src="bed.jpg" alt="image error"></img>
       <p className="title">Breking Bed</p>
       <p>IMD : 9.4</p>
       <button className="btn">{age>18? "youcan watch":"you cannot watch" }</button>
     </div>
     


     
  ) 
}

export default App;
