import SingleProduct from "../Components/SingleProduct"

const Products = () => {
    return <div style={{ marginLeft: "5%" }}>
        <p style={{ fontSize: "45px", fontWeight: "300px" }}>Featured <span style={{ color: "green" }}>Artworks</span></p>
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            <SingleProduct />
        </div>
    </div>
}
export default Products 