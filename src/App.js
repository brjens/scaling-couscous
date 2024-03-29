import Navbar from './Navbar';
import Home from './Home';
import Header from './Header';
import ServiceCall from './ServiceCall';
import Footer from './Form';
function App() {

  return (
    <div className={`App`}>
        <Header />
        <Navbar />
      <div className="content">
        <ServiceCall />
      </div>
        <Footer />
    </div> 
  );
}

export default App;