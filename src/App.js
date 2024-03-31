import Navbar from './Navbar';
import Home from './Home';
import Header from './Header';
import ServiceCall from './ServiceCall';
import Footer from './Form';
function App() {
  let content = <Home />;

  if(window.location.pathname === '/service-call') {
    content = <ServiceCall />;
  }

  if(window.location.pathname === '/contact') {
    // TODO: Add Contact and uncomment below
    // content = <Contact />;
  }

  if(window.location.pathname === '/about') {
    // TODO: Add About and uncomment below
    // content = <About />;
  }

  if(window.location.pathname === '/estimate') {
    // TODO: Add Estimate and uncomment below
    // content = <Estimate />;
  }
  return (
    <div className={`App`}>
        <Header />
        <Navbar />
      <div className="content">
      {content}
      </div>
        <Footer />
    </div> 
  );
}

export default App;