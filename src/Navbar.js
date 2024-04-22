import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
    
    const handleButtonClick = (event) => {
        window.location.href = event.target.href;
    }
    
    return ( 
        <nav className="navbar">
            <div className="links">
                <Button variant="contained" color="primary" href="/" onClick={handleButtonClick}>
                    <HomeIcon color="primary" sx={{ marginRight: '8px' }} />
                    home
                </Button>
                <Button variant="contained" color="primary" href="/contact" onClick={handleButtonClick}>
                    <ContactPhoneIcon color="primary" sx={{ marginRight: '8px' }} />
                    contact
                </Button>
                <Button variant="contained" color="primary" href="/about" onClick={handleButtonClick}>
                    <InfoIcon color="primary" sx={{ marginRight: '8px' }} />
                    about
                </Button>
                <Button variant="contained" color="primary" href="/estimate" onClick={handleButtonClick}>
                    estimate
                </Button>
                <Button variant='contained' color='primary' href="/service-call" onClick={handleButtonClick}>
                    <HomeRepairServiceIcon color="primary" sx={{ marginRight: '8px' }} />
                    service call
                </Button>
            </div>
        </nav>
     );
}
export default Navbar;
