import axios from "axios";
const deleteTask =async (e) =>{
     
      try {
        await axios.delete(`http://taskapp-env.eba-88sstp6n.us-east-2.elasticbeanstalk.com/challenges/${e.id}`)
        removeElement()
      } catch (error) {
          console.error("error adding")
      }
    }

  function removeElement(){
    const element=document.getElementsByClassName('remove');
    // console.log(element)
    element[0].remove();
    
  }
function Challange({challange}){

    return (

    <div className="remove">
      <div className="card" >
      <div className="card-body">
      <h5 className="card-title">{challange.month}</h5>
      <p className="card-text">{challange.description}</p>
      <button type="submit" className="btn btn-danger"
      onClick={()=>deleteTask(challange)}>Delete</button>
  </div>
</div>
    </div>
    )
}

export default Challange;