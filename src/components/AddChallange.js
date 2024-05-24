import axios from "axios";
import { useState } from "react";

function AddChallange({onChallangeAdded}){

    const[month ,setMonth]= useState('');
    const[description ,setDescription]= useState('');

    const handleSubmit =async (e) =>{
      e.preventDefault();
      try {
        await axios.post('http://taskapp-env.eba-88sstp6n.us-east-2.elasticbeanstalk.com/challenges', {month,description})
        setMonth('');
        setDescription('');
        onChallangeAdded();
      } catch (error) {
          console.error("error adding")
      }
    }
    return(
        <div className="card my-5">
        <div className="card-header">
         Add Task
        </div>
        <div className="card-body">
        <form onSubmit={handleSubmit}>
           <div className="mb-3">
               <label htmlFor="month" className="form-label">Month</label>
               <input type="text" placeholder="month" className="form-control" id="month" value={month} onChange={(e)=>setMonth(e.target.value)} required></input>
           </div>
           <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
               <input type="text" placeholder="describe the task" className="form-control" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} required></input>
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
           </form>
           </div>
           </div>
    )
}

export default AddChallange;