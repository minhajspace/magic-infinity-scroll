import React from 'react'
import {useSelector, useselector} from "react-redux"


const  ImageComponent = ({image,index}) => {  
  return <>
     <div style={{border:"border 1px solid black"}}>
         <img key={image.key} src={image.urls.small} />
     </div>
    
    </>

}
export default ImageComponent