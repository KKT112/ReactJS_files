import New from './New.tsx'
interface Car{
  name:string;
  model:number;

}

function App(props:Car) {

  <New name='kuldeep' model = {25} ></New>
   const {name,model} = props
  return (
    <>
      <div>
       name : {name};
       model :{model};

       greeting = {
            <p>hello, world</p>
       }
       </div>
    </>
  )
}

export default App
