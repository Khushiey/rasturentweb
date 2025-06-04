import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/Footer.css'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <>
            <div className="end">
                <div className="footer">
                    <div className="fcont">
                        <div className="logo">
                            <h1><FontAwesomeIcon icon={faBowlFood} /></h1>
                            <h2><span>C</span>ompany</h2>
                        </div>
                        <div className="links">
                            <h1>Main Link</h1>
                            <h4>Order Tracking</h4>
                            <h4>New Order</h4>
                            <h4>Contact Us</h4>
                            <h4>News & Blogs</h4>
                        </div>
                         <div className="links">
                            <h1>Support</h1>
                            <h4>About Us</h4>
                            <h4>Privacy Policy</h4>
                            <h4>Terms & Conditions</h4>
                            
                        </div>
                         <div className="links">
                            <h1>Join Our Newsletter</h1>
                            <button>Enter Your Email Address</button>
                            <h3>Follow Us</h3>
                            <div className="sm">
                                <FontAwesomeIcon icon={faFacebook}/>
                                <FontAwesomeIcon icon={faTwitter}/>
                                <FontAwesomeIcon icon={faInstagram}/>
                                <FontAwesomeIcon icon={faYoutube}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}