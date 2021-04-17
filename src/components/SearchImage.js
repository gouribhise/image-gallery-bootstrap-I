import React, { useState,useCallback,useEffect } from 'react'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY
const url = `https://pixabay.com/api/?key=${API_KEY}`

const SearchImage = ({dataDisp}) => {
    const [text,setText]=useState('')
    const [term, setTerm] = useState('')
    const fetchImages = useCallback(async () => {
         try {
          const response = await fetch(`${url}&q=${term}&image_type=photo&pretty=true`);
          const data = await response.json();
           console.log("The data:", data)
           const {hits}=data
           dataDisp(hits)
        }
        catch (error) {
          console.log(error)
        }
    }, [term]) 
    
    useEffect(() => {
        fetchImages();
         
      },[fetchImages,term])
   
    const onSubmit = (e) => {
        e.preventDefault();
        setTerm(text)

    }
    return (
        <div className=''>
          <form  onSubmit={onSubmit}>
            <div className="">
                    <input onChange={(e)=>setText(e.target.value)}className="searchBox" type="text" placeholder="Search Image Term..." />
                    <button className="btn btn-secondary btn-sm rounded-pill rounded-lg" style={{marginLeft:"20px",paddingRight:"20px",paddingLeft:"20px"}} type="submit">
          Search
          </button>
          </div>
          </form>
            </div>
      )
}

export default SearchImage
