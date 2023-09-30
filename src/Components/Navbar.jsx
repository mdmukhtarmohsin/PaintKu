import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
    return <DIV>
        <h1>PaintKu.</h1>
        <div className="linkDiv">
            <Link className="links" to={"/"}>Home</Link>
            <Link className="links" to={"/products"} >Products</Link>
        </div>
        <div >
            <Link className="links" to={"/login"}>Login</Link>
        </div>
    </DIV>
}
export default Navbar;
const DIV = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    text-decoration: none;
    color: black;
    .links{
        text-decoration: none;
        color: black;
    }
    .linkDiv{
        display: flex;
        gap: 20px;
        justify-content: space-between;
    }
`