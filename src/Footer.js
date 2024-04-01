import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="topFooter">
            <div className="iconLinks">
                <p>follow us</p>
                <a href='https://www.facebook.com'><FontAwesomeIcon icon={faFacebook} className='social-icon'/></a>
                <a href='https://www.twitter.com'><FontAwesomeIcon icon={faTwitter} className='social-icon'/></a>
                <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} className='social-icon'/></a>
                <a href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} className='social-icon'/></a>
            </div>
            <div className="contactLists">
                <p>connect with us</p>
                <p>address</p>
                <p>phone</p>
                <p>toll-free phone</p>
                <p>email</p>
           </div>
        </div>
        <div className="bottomFooter">
            <p>copyright</p>
            <a href="">privacy policy</a>
        </div>
        </footer>
     );
}
 
export default Footer;