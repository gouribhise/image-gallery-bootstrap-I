import React from 'react'
import { FaRegComment, FaRegThumbsUp } from 'react-icons/fa'

const DispImages = ({data,imageId,getClick}) => {

const getImage=(id)=>{
 
  imageId(id)
  getClick(true)
}

    return (
        <>
        {data.map((image) => {


          return (
            <div className="col-md-3">
                <article className='photo'>
                    <img src={image.webformatURL} alt="" onClick={() => getImage(image.id)}
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
