import React,{useState} from 'react'


import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'
const DispImage = ({data}) => {
  console.log("what is data",data)
 
  
    return (
        <>
        {data.map((image) => {
       
 
          return (<div className="col-md-3 img-container">
           <div className="holder">
              <img src={image.webformatURL} alt=""
                style={{ border: "1px solid black", width:"100%", height: "300px", marginTop: "20px" }} />
           <div class="text-block">
             
             <strong><FaRegThumbsUp />  {image.likes}  &nbsp; <FaRegComment />  {image.comments}
              <p>                     
                {image.tags}</p></strong>
              </div>
              </div>
          
          </div>)
      
        })}
           
        </>
    )
}

export default DispImage
