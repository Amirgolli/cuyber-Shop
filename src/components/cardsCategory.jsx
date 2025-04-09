import './cardsCategory.css'

export default function cardsCategory ({icon , txt}){
    return(
        <div id="cardBox">
            <img src={icon} alt="img" />
            <h5>{txt}</h5>
        </div>
    )
}