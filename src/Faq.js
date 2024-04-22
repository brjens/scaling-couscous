import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Faq = () => {

return (
    <div className="faq">
      <h1 style={{marginBottom: '30px'}}>Frequently Asked Questions</h1>
      <Accordion color="primary">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Are your Doors Insulated?
        </AccordionSummary>
        <AccordionDetails>
          All of our doors are insolulated with a 21 R-value. 
          Which means you can enhance your home's energy efficiency, reduce your heating bill, and unlock your garage as a living/working space.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How long does it take to install?
        </AccordionSummary>
        <AccordionDetails>
          Typically we can get the old door out and the new door in no longer than 4 hours
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How long do doors take to come from the manufacturer?
        </AccordionSummary>
        <AccordionDetails>
          Tpyically we recieve new doors in about 4 - 6 weeks
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
 
export default Faq;