
import {Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter=(props)=>{

    const isAuth = useSelector((store) => store.authReducer.isAuth);
    if(isAuth==false)
    {
        return <Navigate to="/login"/>
    }
    return props.children
}


export {PrivateRouter}