import axios from 'axios'
import {FETCH_RANDOM_IMAGE_START,FETCH_RANDOM_IMAGE_SUCCESS,FETCH_RANDOM_IMAGE_FAILED} from '../actionType'

export function fetchImage (page,params){
    return  async (dispatch) => {
        dispatch({type:FETCH_RANDOM_IMAGE_START})
     try{
      const response =await axios.get(`https://api.unsplash.com/search/photos/?page=${page}&query=${params}&client_id=rKp1E7a0U0BgA1ia34UUHTVUKlTUUzZh9Ke_FpHcyao&per_page=10&order_by=relevant;`)
      dispatch({type:FETCH_RANDOM_IMAGE_SUCCESS,payload:response.data.results})
     }catch(err){ 
      dispatch({type:FETCH_RANDOM_IMAGE_FAILED,err:err.response.data})
     }
    }
}