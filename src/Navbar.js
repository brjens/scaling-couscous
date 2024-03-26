const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>JAMS Garage Doors</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/contact">contact</a>
                <a href="/about">about</a>
                <a href="/estimate" style={{
                    color: "white",
                    backgroundColor: "#e0842e",
                    borderRadius: "8px" 
                }}>estimate</a>
            </div>
        </nav>
     );
}
 
export default Navbar;