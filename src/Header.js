import Reviews from './Reviews';
const Header = () => {
    return ( 
        <header className="header">
            <h1>JAMS Garage Doors</h1>
            <div className="numbers">
                <div className="phone">
                    <p>Regular Phone Number</p>
                    <p>(555) 555-5555</p>
                </div>
                <div className="toll-free">
                    <p>Toll Free Number</p>
                    <p>1-(800) 555-5555</p>
                </div>
            </div>
            <div className="reviews">
                <Reviews />
            </div>
        </header>
     );
}
 
export default Header;