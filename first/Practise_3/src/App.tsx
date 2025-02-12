import './index.css'
import Data from './Data.json'

function App() {
  return (
<>
         <ul>
          {
            Data.map((element)=>{
              return(
                <li key={element.id}>

                  <div>
                  <img src={element.img_url} alt="image error"></img>
                  </div>
                  <h2>{element.name}</h2>
                  <h2>{element.cast}</h2>
                  <h3>{element.rating}</h3>
                  <p>{element.description}</p>
                  <p>{element.genre}</p>
                </li>

              )

            })
          }
        
         </ul>
         </>
  )
}

export default App
