import React from 'react'

const DispImage = ({data,index}) => {
  
 
 
  
    return (
       <>
           
           {data.map(image => (
           
                   <div className="col-md-3">
                   <img src={image.webformatURL} alt="" style={{width:"300px",height:"300px",marginTop:"20px"}}/>
                       </div>
               
                     ))}
        </>
    )
}

export default DispImage
