import { useState } from "react"

const SingleCart=({i})=>{

    const [qty, setQty]=useState(1);

    return <div style={{width:"100%" , display:"flex",border:"1px solid black",padding:"10px"}}>
        <div style={{width:"60%"}}>
            <img src="" alt="" style={{width:"70%"}} />
        </div>
        <div style={{width:"100%",display:"flex",flexDirection:"column", alignItems:"flex-start"}}>
            <h1>Ljjjajaklhlkjafhlkghf</h1>
            <p>Ref:{16232+i}</p>
            <p>✅ click & Collect</p>
            <p>✅ Home Delivery</p>
            <p>Price : ₹ {1200*qty}.00</p>
            <div>
                <span>QTY: </span>
                <button style={{width:"40px"}} onClick={e=> setQty(prev=> prev-1)} disabled={qty<=1}>-</button>
                <span>{qty}</span>
                <button style={{width:"40px"}} onClick={e=> setQty(prev=> prev+1)}>+</button>
                <button style={{width:"100px",backgroundColor:"red"}}>Remove</button>
            </div>
            
        </div>
    </div>
}

export {SingleCart}