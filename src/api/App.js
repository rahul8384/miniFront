import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
    const[movies, setMovies] = useState();

    const getMovies = async () => {

      try{
        const response = await axios.get("/api/minimoviemr/",{withCredentials: true}); 

        console.log(response.data);

         setMovies(response.data);
        
      }catch(err){
        console.log(err);
      }
      
    }

    useEffect(() =>{
      getMovies();
    },[])

  return (
    <div className="App">
       
    </div>
  );
}

export default App;
