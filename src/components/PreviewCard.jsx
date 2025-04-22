import './PreviewCard.css'
import Frame from '../images/Frame.png'
export default function PreviewCard({ image, title, Bgcolor,border,clasNm }) {
    return (
        <div className={clasNm} style={{ backgroundColor: Bgcolor }}>
            <img id='img-preview' src={image} alt="image" />
            <h3 style={{color: border }} id='title-Preveiw'>{title}</h3>
            <p id='p-Preveiw'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button id='btn-Preveiw' type="button" style={{ backgroundColor: Bgcolor , color: border }}>Shop Now</button>
            <img src={Frame} alt="" id='framePreview' />
        </div>
    )
}