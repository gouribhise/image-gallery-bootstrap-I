import React from 'react'
import { FaArrowAltCircleLeft} from 'react-icons/fa'

const ShowImg=({image,getClick})=>{
   const goBack=(id)=>{
 
    getClick(false)
  }
return (
  <div class="col-md-7 offset-2">
  <button type="button" class="btn btn-info  rounded-pill rounded-lg"
  onClick={()=>goBack(image.id)}
  style={{marginTop:"10px",marginBottom:"10px"}}>
<FaArrowAltCircleLeft/> &nbsp;
  Go Back</button><br />
    <h5 className="takenBy"> Image By:&nbsp;
    <img src={image.userImageURL} alt={image.id} style={{ width: "50px", heigh: "50px",borderRadius:"50%"}}/>
     &nbsp;  <span class="badge badge-info" style={{padding:"15px"}}>{image.user} </span>
 </h5>
    <img src={image.largeImageURL} alt={image.id} className="imgFrame" />
  </div>
 )

 }


export default ShowImg;
