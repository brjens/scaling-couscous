import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';
function App() {


    const [isDark, toggleDark] = useState(false);

    const toggleDarkMode = () => {
        toggleDark(!isDark);
    }


  return (
    <div className={`App ${isDark ? 'darkMode' : ''}`}>
        <Navbar toggleDarkMode={toggleDarkMode}/>
      <div className="content">
        <Home />
      </div>
    </div> 
  );

}

export default App;