import React,{useState} from 'react'
import './App.css';
import Header from './components/Header'
import SearchImage from './components/SearchImage'
import DispImage from './components/DispImage'
function App() {
  //this data will come from searchImage component
  //which we will use to display images in other component
  const [data, setData] = useState([]);
 
 
  
   return (
    <div className="App">
   
      <Header />
      <div class="hero-image">
      <div class="hero-text">
          <h5>Stunning free images for your next project</h5>
          <SearchImage dataDisp={(data)=>setData(data)}/>
        </div>
       </div>
       <div className="row">
         <DispImage data={data}/>
       </div>
    
     </div>
  );
}

export default App;
