import './cardProductMB.css'
import favorite from '../images/favorite.png'

export default function cardProductMB({ image, info, price }) {
    return(
        <div className="cardProductMB">
            <img id='likesCards' src={favorite} alt="" />
            <img id='imgProduct' src={image} alt="" />
            <p>{info}</p>
            <h3>{price}</h3>
            <button id='btnProduct' type="button">Buy Now</button>
        </div>
    )


}