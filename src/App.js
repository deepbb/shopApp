import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react"
import axios from "axios"
import Card from "./Card"


function App() {
const [details,setDetails] = useState([])

useEffect(()=> {
  const fetchUser = async ()=> {
    const {data} = await axios.get("https://commercebb.herokuapp.com/api/categories")
    console.log(data);
    setDetails(data)

  }
  fetchUser()
  
},[])

console.log(details);

  return (
    <div className="App" >
     <Card details={details} />
    </div>
  );
}

export default App;

//https://randomuser.me/api/?results=50