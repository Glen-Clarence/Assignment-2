/* eslint-disable react/prop-types */
import email from '../img/Email.png'
import companyImg from '../img/Language.png'
import location from '../img/Location.png'
import work from '../img/Shopping-bag.png'
// import favorite from '../img/Favorite.png'
import phone from '../img/phone.png'

const Card = ({name , company, address, website}) => {
    return (
        <div className="card-container">
            <div className="card-wrapper">
                <div className="card-header">
                    <div className="">
                        <h1>{name}</h1>
                        <h5>{address.city}</h5>
                    </div>
                    <div className="heart"><input type="checkbox" id={name} />
                        <label htmlFor={name}> 
                        </label>
                    </div>
                </div>
                <div className="card-details">
                    <div className="company"><button><img src={companyImg} alt="" />{website}</button></div>
                    <div className="website"><button><img src={work} alt="" />{company.name}</button></div>
                </div>
                <div className="card-saying">
                    <h2>“ {company.catchPhrase} ”</h2>
                </div>
                <div className="card-address">
                    <div className="location-add">
                        <div className="location"><img src={location} alt="" /></div>
                        <div className="address"><span>{address.street}</span><span>{address.suite}</span><span>{address.zipcode}</span></div>
                    </div>
                    <div className="socials">
                        <div className="email"><img src={email} alt="" /></div>
                        <div className="phone"><img src={phone} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card