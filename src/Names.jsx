import "./App.css"


function Names() {
    let st_name=[{st:"mays",attend:false},{st:"ula",attend:true},{st:"nada",attend:true},{st:"fatima",attend:false}];
    return(
      <div>
        <h1>Students List</h1>
        {st_name.map((std)=>{
          if(std.attend===false){
          return   <ul>
              <li className="nothere">{std.st}</li>
              <p>she is not here</p>
              
            </ul>
          }
         else {
           return <ul>
              <li className="here">{std.st}</li>
              <p>she is here</p>
              
            </ul>
          }
        })}
      </div>
    )
    
}
export default Names