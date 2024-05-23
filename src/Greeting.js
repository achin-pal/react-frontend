import { useState } from "react";

function Greeting({name, message}) {

    const [messageState,setMessage]= useState(message);
   
    return(
        <>
          <h1>Hey this is {name}</h1>
          <p>{messageState}</p>
          <button onClick={()=>setMessage('goodbye')}>change the message</button>
        </>
       );
}

export default Greeting;