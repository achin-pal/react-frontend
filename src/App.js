import './App.css';
import ChallangeList from './components/ChallengesList';
import { useEffect, useState } from "react";
import axios from 'axios';
import AddChallange from './components/AddChallange';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [challenges, setChallenges] = useState([
  // {id:1,month:`Jan`,description:`First Challange`},
  // {id:2,month:`Feb`,description:`sec Challange`},
  // {id:3,month:`Mar`,description:`third Challange`}
])

    useEffect(()=>{
    fetchChallange();
    },[])

    const fetchChallange= async () =>{
      try {
        const response = await axios.get('http://taskapp-env.eba-88sstp6n.us-east-2.elasticbeanstalk.com/challenges');
        // const response = await axios.get('http://localhost:8080/challenges');
           setChallenges(response.data)
      } catch (error) {
          console.error("Error fethving" , error) 
      }
     
    };

    const handleChallangeAdded=()=>{
      fetchChallange();
    }

// const challenges = [
//   {id:1,month:`Jan`,description:`First Challange`},
//   {id:2,month:`Feb`,description:`sec Challange`},
//   {id:3,month:`Mar`,description:`third Challange`}
// ]

  return (
    <div className="container mt-5">
     <h1 className="text-center mb-4">Monthly Challanges</h1>
     <AddChallange onChallangeAdded={handleChallangeAdded}></AddChallange>
     <ChallangeList challenges={challenges}></ChallangeList>
    </div>
  );
}

export default App;
