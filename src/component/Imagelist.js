import React,{useState,useEffect} from 'react'
import SearchBox from './Searchbox';
import ImageComponent from './Imagecomponent';
import {useSelector,useDispatch} from "react-redux"
import {fetchImage} from '../store/actions/image.action'
import InfinitScroll from "react-infinite-scroll-component";
import {CLEAR_IMAGE_STATE} from '../store/actionType'



function ImageList ()  {
    const images = useSelector(state => state.unsplaceImages.images)
    const dispatch = useDispatch()
    const [page , setPage] = useState(1)
    const [params ,setParams] = useState("car")

    const handleSearchSubmit = (e) => {
      console.log(params)
      e.preventDefault()
      dispatch({type:CLEAR_IMAGE_STATE})
      dispatch(fetchImage(page,params))
    }

     const handleNextImageCall = () => {
       setPage(page + 1)
    }

    useEffect(()=>{
       dispatch(fetchImage(page,params))
    },[page])

   const displayLoadingText = () => {
     return   <div className='emply-container'>{ images.length === 0 ?<p>Nothing to display </p>: <p>Loading...</p>}</div>
    }



 
  return <>
         <SearchBox handleSearchSubmit={handleSearchSubmit} setParams={setParams}/>
         <InfinitScroll
          dataLength={images.length}
          next={()=>handleNextImageCall()}
          hasMore={true}
          loader={displayLoadingText()}
         
        >
          <div className='image-container'>
             {images && images.map((imageItem,index)=>{
              return <ImageComponent  image={imageItem} index={index}/>
          })}
          </div>

            
         
        </InfinitScroll>
        
        </>
}

export default ImageList