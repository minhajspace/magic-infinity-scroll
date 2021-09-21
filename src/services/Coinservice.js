import {coinListUrl} from '../apis//ApiUrl'
import {authHeader} from '../services/authHeader'
import { secureFetch } from './secureFetch'
export const coinService = {
    getCoinList
}

async function getCoinList(currency) {
   console.log("currency===",currency)
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  const res = await secureFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, requestOptions)
  return res
}
