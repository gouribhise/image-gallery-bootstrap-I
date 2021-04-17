import React from 'react'

const DispImage = ({data}) => {
  console.log(data)
    const newItem = data.map((item) =>
        <h1>{item}</h1>);
 
 
  
    return (
        <div>
           
           {data.map(image => (
               <h1>{image.id}</h1>
                     ))}
        </div>
    )
}

export default DispImage
