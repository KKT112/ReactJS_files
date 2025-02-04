

interface exchange{
  name : string;
}


function App(property : exchange) {

  return (
   
   <div className="main">
      <h1>My first react</h1>
      <div className="image">
        <img src="download.jpg" alt="nothing"></img>
      </div>
      <p className="title"> Lizard</p>
      <p>hello,i am lezard and how are you?</p>

      <p> message leave : {property.name}</p>
    </div>

  );
}

export default App;
