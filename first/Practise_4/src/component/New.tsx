
interface News{
  name:string;
  model:number;

}

function New(props:News) {

   const {name,model} = props
  return (
    <>
      <div>
       name : {name};
       model :{model};

       </div>
    </>
  )
}

export default New;

