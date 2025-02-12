function Question (){

    const student :number[] = [] 
    return(
        <div>
          <p>{student.length && "no of student"}</p>
         // <p>{ student.length === 0 && "no of student"}</p>
          <p>no of student :{student.length}</p>
        </div>
    )

}
export default Question;