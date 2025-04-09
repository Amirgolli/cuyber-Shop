
import './products.css';

export default function products({ image, title, info }) {
    return (
        <div className="productBox">
            <img id='img-producta' src={image} alt="image" />
            <div className="txtProduct">
                <h4>{title}</h4>
                <p id='info'>{info}</p>
            </div>
        </div>
    )
}