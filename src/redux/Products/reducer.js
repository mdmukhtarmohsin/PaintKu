import { FETCH_FAILURE, FETCH_RQUEST, HOME_PRODUCT } from "../actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    homeProducts:[]
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_RQUEST: {
            return { ...state, isLoading:true }
        }
        case FETCH_FAILURE: {
            return { ...state, isLoading:false,  isError:true }
        }
        case HOME_PRODUCT :{
            return { ...state, isLoading:false, homeProducts:payload}
        }
        default:
            return state;
    }
}
