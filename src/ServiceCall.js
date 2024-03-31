import React, { useState } from 'react';

const Form = () => {

  // TODO: Add validation
  // TODO: Add error handling
  // TODO: Add success message
  // TODO: send to database

  const [prefix, setPrefix] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [isHomeAtServiceTime, setIsHomeAtServiceTime] = useState(false);
  const [problemDescription, setProblemDescription] = useState('');
  const [consentToMarketingEmails, setConsentToMarketingEmails] = useState(false);

  return (
    <form className="Service">

      <h1>Personal information</h1>
      <select value={prefix} onChange={(e) => setPrefix(e.target.value)}>
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="dr">Dr</option>
      </select>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <br />

      <h1>Address</h1>
      <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <select value={province} onChange={(e) => setProvince(e.target.value)}>
        <option value="ontario">Ontario</option>
        <option value="quebec">Quebec</option>
        <option value="british columbia">British Columbia</option>
        <option value="alberta">Alberta</option>
        <option value="new brunswick">New Brunswick</option>
        <option value="nova scotia">Nova Scotia</option>
      </select>
      <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Zip Code" />
      <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <br />

      <h1>Contact info</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} />
      <p>Prefered time of service:</p>
      <div className="time-of-day">
        <p>
          AM: <input type="radio" name="time"  onChange={() => setServiceTime("AM")} />
          PM: <input type="radio" name="time"  onChange={() => setServiceTime("PM")} />
        </p>
      </div>
      <label>
        Will you be home at the time of service?
        <input type="checkbox" checked={isHomeAtServiceTime} onChange={(e) => setIsHomeAtServiceTime(e.target.checked)} />
      </label>
      <textarea 
        onChange={(e) => setProblemDescription(e.target.value)} 
        placeholder="Describe your problem here" 
        rows={5} 
        cols={50} 
      />
      <label>
        Consent to receive marketing emails and such
        <input type="checkbox" checked={consentToMarketingEmails} onChange={(e) => setConsentToMarketingEmails(e.target.checked)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;