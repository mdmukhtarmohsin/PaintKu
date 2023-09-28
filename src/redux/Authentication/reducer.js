import { LOGIN_FAILURE, LOGIN_RQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"


const initialState = {

    isLoading: false,
    isError: false,
     user : {},
    isAuth: false,
    
}


export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LOGIN_RQUEST: {
            return { ...state, isLoading: true }
        }

        case LOGIN_FAILURE: {
            return { ...state, isLoading : false,  isError: true , errorMessage: payload }
        }

      

        case LOGIN_SUCCESS: {
            return { ...state, isLoading: false, isError: false,   isAuth: true, user : payload }

        }



        //  signup

        case SIGNUP_REQUEST: {
            return { ...state, isLoading: true, isError: false }

        }
        case SIGNUP_SUCCESS: {
            return { ...state, isLoading: false, isError: false, user : payload  }

        }
        case SIGNUP_FAILURE: {
            return { ...state, isLoading: false, isError: true }

        }
        

       
        default:
            return state
    }
}
