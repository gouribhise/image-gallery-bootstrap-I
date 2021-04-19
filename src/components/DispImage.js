import React,{useState} from 'react'


import { FaEdit, FaTrash } from 'react-icons/fa'
const DispImage = ({data}) => {
  console.log("what is data",data)
 
    const showInfo = () => {
        console.log("hovered")
        
    }
    return (
        <>
            {data.map(image => (
        
         <>
             
           <div className="col-md-3 img-container">
             <img onMouseOver={() =>showInfo()} src={image.webformatURL} alt="" style={{ width: "300px", height: "300px", marginTop: "20px" }} />
             <div class="text-block">
             <p>{image.tags}</p>  
             </div>
          
         </div>
          </>
       ))}
           
        </>
    )
}

export default DispImage
