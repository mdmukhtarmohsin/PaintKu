import axios from "axios";
import { FETCH_FAILURE, FETCH_RQUEST, HOME_PRODUCT } from "../actionTypes";


export const getData=(url)=>(dispatch)=>{
    return (
        dispatch({type:FETCH_RQUEST}),
        axios( {url: url,
            method: 'get',
            params: {
              _limit: 8 
            }
        }).then(res=> {dispatch({type:HOME_PRODUCT,payload:res.data})})
        .catch(err=> dispatch({type:FETCH_FAILURE}))
    )
}