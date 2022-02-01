
import {FETCH_RANDOM_IMAGE_START,FETCH_RANDOM_IMAGE_SUCCESS,FETCH_RANDOM_IMAGE_FAILED,CLEAR_IMAGE_STATE} from '../actionType'

const initialState = {
  images : [],
  isLoading : false,
  error : []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE_START:
      return {
       ...state , 
       isLoading : true
      }
     case FETCH_RANDOM_IMAGE_SUCCESS:
       const tempimages = [...state.images , ...action.payload]
      return {
       ...state , 
       isLoading : false,
       images : tempimages
      }
      
    case FETCH_RANDOM_IMAGE_FAILED:
      return {
       ...state , 
       isLoading : false,
       error : action.payload
      }
    case CLEAR_IMAGE_STATE :{
      return {
        ...state,
        images:[],
        error:[]
      }
    } 

    default:
      return state
  }
}
