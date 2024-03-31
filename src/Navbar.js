const Navbar = () => {
    
    const handleButtonClick = (event) => {
        window.location.href = event.target.href;
    }
    
    return ( 
        <nav className="navbar">
            <div className="links">
                <a href="/" onClick={handleButtonClick}>home</a>
                <a href="/contact" onClick={handleButtonClick}>contact</a>
                <a href="/about" onClick={handleButtonClick}>about</a>
                <a href="/estimate" onClick={handleButtonClick} style={{
                    color: "white",
                    backgroundColor: "#e0842e",
                    borderRadius: "8px" 
                }}>estimate</a>
                <a href="/service-call" onClick={handleButtonClick}>service call</a>
            </div>
        </nav>
     );
}
export default Navbar