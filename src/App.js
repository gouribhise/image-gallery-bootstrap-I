import React,{useState} from 'react'
import './App.css';
//import all components
import Header from './components/Header'
import SearchImage from './components/SearchImage'
import DispImages from './components/DispImages'
import ShowImg from './components/ShowImg'

function App() {
  //this data will come from searchImage component
  //which we will use to display images in other component
  const [data, setData] = useState([]);
  // get the image id to display
  const [imgId,setImgId]=useState(0);

  // if image is clicked or not
  const [isClick, setIsClick] = useState(false);

  //get clicked image
  const newImages=data.filter((image)=>image.id===imgId)
  //console.log(newImages)


   return (
    <div className="App">
      <Header />
      <div class="hero-image">
        <div class="hero-text">
           <h5>Stunning free images for your next project</h5>
           {/* get data and store it in setData*/}
           {/*setisclick to false to load images again*/}
           <SearchImage
                dataDisp={(data)=>setData(data)}
                dispImgs={(val)=>setIsClick(val)}/>
        </div>
      </div>
      {/*if image is clicked display big image else
        show all images in grid*/}
       {isClick?
          <div>
          {/* send all data of particular image to showimg component
            setisclick back to false when go back button is clicked
            */}
             {newImages.map((image)=>

                <ShowImg image={image} getClick={(val)=>setIsClick(val)}/>
              )}
          </div>
         :
         <div className="row">
         {/* send data to dispimages get the clicked image and set isclick to true*/}
           <DispImages data={data} imageId={(id)=>setImgId(id)} getClick={(val)=>setIsClick(val)}/>
         </div>
      }

     </div>
  );
}

export default App;
