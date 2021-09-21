import {GET_COIN_LIST_START,GET_COIN_LIST_SUCCESS,GET_COIN_LIST_FAILED} from '../../apis/ActionType'
import {coinService} from '../../services/Coinservice'


export const getCoinList = () => {
  return async (dispatch) => {
      dispatch({type:GET_COIN_LIST_START})
      try{
        const res = await coinService.getCoinList("usd") 
        const response =await res.json()
        dispatch({type:GET_COIN_LIST_SUCCESS,payload:response})
      }catch(err){
       dispatch({type:GET_COIN_LIST_FAILED,payload:err})
      }
  }
}

