import { useState } from "react"

const SingleCart=({i,id,title,price,image,deleteCart})=>{

    const [qty, setQty]=useState(1);

    return <div style={{width:"100%" , display:"flex",border:"1px solid green",padding:"10px"}}>
        <div style={{width:"60%",padding:"10px"}}>
            <img src={image} alt="" style={{width:"90%",height:"100%"}} />
        </div>
        <div style={{width:"100%",display:"flex",flexDirection:"column", alignItems:"flex-start"}}>
            <h1 style={{color: "#4AAB76" ,fontWeight:"600px"}}>{title}</h1>
            <p>Ref:{16232+i}</p>
            <p>✅ click & Collect</p>
            <p>✅ Home Delivery</p>
            <p>Price : ₹ {price*qty}.00</p>
            <div>
                <span>QTY: </span>
                <button style={{width:"40px",backgroundColor: "#4AAB76"}} onClick={e=> setQty(prev=> prev-1)} disabled={qty<=1}>-</button>
                <span>{qty}</span>
                <button style={{width:"40px",backgroundColor: "#4AAB76"}} onClick={e=> setQty(prev=> prev+1)}>+</button>
                <button style={{width:"100px",backgroundColor:"red"}} onClick={()=>deleteCart(id)}>Remove</button>
            </div>
            
        </div>
    </div>
}

export {SingleCart}