import React from 'react'
import { FaArrowAltCircleLeft} from 'react-icons/fa'

const ShowImg=({image,getClick})=>{
  console.log(image)
  const goBack=(id)=>{
    console.log("go back",id)
    getClick(false)
  }
return (
  <div class="col-md-7 offset-2">
  <button type="button" class="btn btn-info"
  onClick={()=>goBack(image.id)}
  style={{marginTop:"10px",marginBottom:"10px"}}>
<FaArrowAltCircleLeft/> &nbsp;
  Go Back</button>
  <img src={image.largeImageURL}/>
  </div>
 )

 }


export default ShowImg;
