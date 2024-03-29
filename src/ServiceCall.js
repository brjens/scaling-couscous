import React, { useState } from 'react';

const Form = () => {
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
  const [consentToMarketingEmails, setConsentToMarketingEmails] = useState(false);

  return (
    <form>
      <select value={prefix} onChange={(e) => setPrefix(e.target.value)}>
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="dr">Dr</option>
      </select>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
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
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} />
      <input type="time" value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} />
      <label>
        Will you be home at the time of service?
        <input type="checkbox" checked={isHomeAtServiceTime} onChange={(e) => setIsHomeAtServiceTime(e.target.checked)} />
      </label>
      <label>
        Consent to receive marketing emails and such
        <input type="checkbox" checked={consentToMarketingEmails} onChange={(e) => setConsentToMarketingEmails(e.target.checked)} />
      </label>
    </form>
  );
};

export default Form;