import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { store } from "../redux/store";
import { useEffect, useState } from "react";
import styled from "styled-components";

const star1="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png";
const star2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-V2iaGwhth_mrQa1bMrHcMMhgLpFIFMkYWg_KaC2sIAIwPhVbWfXMRQiFh9Esuno_So&usqp=CAU";

const SingleProduct = () => {
    const {id}=useParams();
    // console.log(id)
    const [singleData,setSingleData]=useState({});
    const products = useSelector(store=> store.productReducer.products);
    
    // console.log(products);
    useEffect(()=>{
        const data= products.filter(item=> item.id==id);
        // console.log(data)
        setSingleData(data[0]);
    },[])

    return <DIV>
        <div className="box-1">
            <img src={singleData.image}/>
        </div>
        <div className="box-2" >
            <p style={{fontSize:"35px", marginBottom:"30px",color:"blue"}}>{singleData.title}</p>
            <p style={{fontSize:"20px",}}>Brand : {singleData.brand}</p>
            <p style={{fontSize:"20px"}}>Price : ${singleData.price}.00</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <p>Rating : </p>
               <DIV1>
                {
                    Array(5).fill(1).map((item,i)=>{
                    return <div key={i}>{( i+1 <= singleData.rating) ? <img  src={star2}/>:<img src={star1}/>} </div>
                    })
                }
               </DIV1>
            </div>
            
        </div>
    </DIV>
}

export default SingleProduct; 

const DIV=styled.div`
    width: 100%;
    /* text-align: center; */
    display: flex;
    margin-top:50px;
    overflow: hidden;
    padding: 10px;

    /* border: 1px solid red; */

    .box-1{
        width: 60%;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 50px;
    }
    img{
        width: 100%;
        height: 300px;
        border-radius:20px;
    }

    .box-2{
        width: 100%;
        text-align: center;
        padding:20px;
        display: flex;
        flex-direction: column;
        align-items:center;
        gap:15px;
    }

`
const DIV1=styled.div`
    width: 100px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 5px;
    margin-left:10px;
    img{
        width: 20px;
        height: 20px;
    }
`