import email from '../img/Email.png'
import company from '../img/Language.png'
import location from '../img/Location.png'
import work from '../img/Shopping-bag.png'
import favorite from '../img/Favorite.png'
import phone from '../img/phone.png'

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="">
                        <h1>Leanne Graham</h1>
                        <h5>Gwenborough</h5>
                    </div>
                    <div className="heart"><button><img src={favorite} alt="" /></button></div>
                </div>
                <div className="card-details">
                    <div className="company"><button><img src={company} alt="" />company</button></div>
                    <div className="website"><button><img src={work} alt="" />Website</button></div>
                </div>
                <div className="card-saying">
                    <h2>“ Multi-layered client-server neural-net ”</h2>
                </div>
                <div className="card-address">
                    <div className="location-add">
                        <div className="location"><img src={location} alt="" /></div>
                        <div className="address">Kulas Light Apt. 556 92998-3874</div>
                    </div>
                    <div className="socials">
                        <div className="email"><img src={email
                        } alt="" /></div>
                        <div className="phone"><img src={phone} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card