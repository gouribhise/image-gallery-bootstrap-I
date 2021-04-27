import React from 'react'
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'

const DispImages = ({data,imageId,getClick}) => {
  console.log("what is data",data)
const getImage=(id)=>{
  console.log("image clicked",id)
  imageId(id)
  getClick(true)
}

    return (
        <>
        {data.map((image) => {


          return (
            <div className="col-md-3">
                <article className='photo'>
                    <img src={image.webformatURL} alt="" onClick={() => console.log("clicked")}
                    />
                      <div className='photo-info'>
                          <div>
                           <strong className="likes"><FaRegThumbsUp />  {image.likes}
                            &nbsp; &nbsp; <FaRegComment /> {image.comments} </strong>
                           <h5 className="tags">{image.tags}</h5>
                          </div>

                      </div>
                </article>
            </div>
          )

        })}

        </>
    )
}

export default DispImages
