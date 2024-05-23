import Challange from "./Challange";

function ChallangeList ({challenges}) {
    
    return(
        <div class="list-group">
        {challenges.map(challange => (
          
           <Challange key={challange.id} challange={challange}></Challange>
           
        ))}
           
        </div>
    );
}

export default ChallangeList