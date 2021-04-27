import React, { useState,useCallback,useEffect } from 'react'
import {   FaSearch } from 'react-icons/fa'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY
const url = `https://pixabay.com/api/?key=${API_KEY}`

const SearchImage = ({dataDisp,dispImgs,getTerm}) => {
    const [text,setText]=useState('')
   const [term, setTerm] = useState('')
   const [data, setData] = useState([])
     dataDisp(data);
     getTerm(term)
     console.log("searchimage:",data)
    const fetchImages = useCallback(async () => {
         try {
          const response = await fetch(`${url}&q=${term}&image_type=photo&pretty=true&safesearch=true`);
          const data = await response.json();
           console.log("The data:", data)
           const { hits } = data
           //get hits and store inside setdat which will send it back to dataDisp
           setData(hits)
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
        dispImgs(false)

    }
    return (
        <div className=''>
          <form  onSubmit={onSubmit}>
            <div className="">
                    <input onChange={(e)=>setText(e.target.value)}className="searchBox" type="text" placeholder="Search Image Term..." />
                    <button
                    className="btn btn-secondary btn-sm
                    rounded-pill rounded-lg"
                    style={{marginLeft:"20px",
                    paddingRight:"20px",paddingLeft:"20px"}}
              type="submit">

              <FaSearch />
              &nbsp;
          Search
          </button>
          </div>
          </form>
            </div>
      )
}

export default SearchImage
