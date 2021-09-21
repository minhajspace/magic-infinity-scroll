import {GET_COIN_LIST_START,GET_COIN_LIST_SUCCESS,GET_COIN_LIST_FAILED} from '../../apis/ActionType'

const initailState = {
  coinList : {},
  coinListLoading:false,
  error:{}
}

export default (state = initailState,action) => {
  switch(action.type){
    case GET_COIN_LIST_START:{
      return {
        ...state,
        coinListLoading:true,
      }
    }
    case GET_COIN_LIST_SUCCESS : {
   
      return {
        ...state,
        coinListLoading:false,
        coinList:action.payload,
        error:{}
      }
    }
    case GET_COIN_LIST_FAILED : {
      return {
        ...state,
        coinListLoading:false,
        error:action.payload
      }
    }
   default:
      return state;
  
  }
}