import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';


function App() {
    const[movies, setMovies] = useState();

    const getMovies  = {

      axios.get('http://localhost:8080/api/minimoviemr/', { withCredentials: true })
.then(response => {
// Handle the response
 api.get("/api/minimoviemr/"); 

    console.log(response.data);

    setMovies(response.data);
        
})
.catch(error => {
// Handle the error
console.log(error);
});

     
      
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
