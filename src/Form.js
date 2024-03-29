const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="topFooter">
            <div className="iconLinks">
                <p>follow us</p>
                <i className="fab fa-facebook">icon here</i>
                <i className="fab fa-twitter">icon here</i>
                <i className="fab fa-instagram">icon here</i>
                <i className="fab fa-linkedin">icon here</i>
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