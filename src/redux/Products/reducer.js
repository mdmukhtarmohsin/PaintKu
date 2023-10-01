import { All_PRODUCT, FETCH_FAILURE, FETCH_RQUEST, HOME_PRODUCT } from "../actionTypes"


const initialState = {
    isLoading:false,
    isError:false,
    homeProducts:[],
    products:[]
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
        case All_PRODUCT :{
            return { ...state, isLoading:false, products:payload}
        }
        default:
            return state;
    }
}
