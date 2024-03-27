import { useState } from 'react';

const Navbar = () => {

    const [isDark, toggleDark] = useState(false);

    const toggleDarkMode = () => {
        toggleDark(!isDark);
    }

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
                <button onClick={toggleDarkMode}>Dark Mode</button>
            </div>
        </nav>
     );
}
export default Navbar;