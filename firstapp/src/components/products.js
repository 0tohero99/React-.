import react from "react";
import "./products.css"
const Products = (props) => {
    // console.log(props)
    const renderProducts = props.Products.map((items) => {
        return (
            <div className="cards">
                <img src={items.image} />
                <div>
                    <div>{items.name}</div>
                    <div>{items.description}</div>
                    <div>{items.discount}</div>
                    <div>Rs.{items.cost}</div>
                </div>
            </div>
        )
    })
    return (
        <div className="outerbox">
            <h2>{renderProducts}</h2>
        </div>
    )
}
export default Products  