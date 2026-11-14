import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData({ ...formData });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="row two-columns">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          </div>
        </div>

        <div className="field">
          <label htmlFor="address">Address</label>
          <input id="address" type="text" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />
        </div>

        <div className="field">
          <label htmlFor="address2">Address 2</label>
          <input id="address2" type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
        </div>

        <div className="row three-columns">
          <div className="field">
            <label htmlFor="city">City</label>
            <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="province">Province</label>
            <select id="province" name="province" value={formData.province} onChange={handleChange}>
              <option value="">Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Nova Scotia</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="postalCode">Postal Code</label>
            <input id="postalCode" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </div>
        </div>

        <div className="terms">
          <input id="terms" type="checkbox" />
          <label htmlFor="terms">Agree Terms &amp; Condition?</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="results">
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
