import React,{useState} from 'react'


import { FaComment, FaCommentAlt, FaCommentDollar, FaCommentMedical, FaComments, FaCommentSlash, FaEdit, FaRegComment, FaRegThumbsUp, FaThumbsUp, FaTrash } from 'react-icons/fa'
const DispImage = ({data}) => {
  console.log("what is data",data)
 
  
    return (
        <>
        {data.map((image) => {
       
 
         return( <div className="col-md-3">
            <img src={image.webformatURL} alt="" style={{ width: "350px", height: "300px", marginTop: "20px" }} />
           <div class="text-block">
             
             <FaRegThumbsUp /> {image.likes}  <FaRegComment /> {image.comments}
              <p>
                      
                {image.tags}</p>
            </div>
          
          </div>)
      
        })}
           
        </>
    )
}

export default DispImage
