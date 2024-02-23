import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {registerTournament} from '../Services/user-service';

import backgroundImage from '../Assests/registerTournamentImage.jpg'


const Register_Tournament = () => 
{
  const [formData, setFormData] = useState
  ({
    tournamentName: '',
    organizerName: '',
    tournamentDescription: '',
    startDate: '',
    endDate: '',
    phnNumber: '' ,
    locationVenue: '',
    tournamentFormat: '',
    entryFees: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    if (e.target.name === 'phnNumber' && !e.target.value.startsWith('+91')) 
    {
      setFormData({ ...formData, [e.target.name]: '+91' + e.target.value });
    } 
    else 
    {
      setFormData({ ...formData, [e.target.name]: e.target.value }); 
    }
    // Remove Error Messages
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };


  const handleBlurTournamentName = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'tournamentName' && value.trim().length <= 3) {
      validationErrors.tournamentName = 'Tournament name must have at least 3 characters';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };


  const handleBlurOrganizerName = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'organizerName' && value.trim() === "") {
      validationErrors.organizerName = 'Organizer name cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };


  const handleBlurTournamentDescription = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'tournamentDescription' && value.trim() === "") {
      validationErrors.tournamentDescription = 'Tournament Description name cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };


  const handleBlurStartDate = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'startDate' && value.trim() === "") {
      validationErrors.startDate = 'Start Date name cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };

  const handleBlurEndDate = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'endDate' && value.trim() === "") {
      validationErrors.endDate = 'End Date name cannot be empty.';
    }
    if (name === 'endDate') {
      const startDate = new Date(formData.startDate);
      const newEndDate = new Date(value);
      if (newEndDate <= startDate) {
        validationErrors.endDate = 'End date cannot be before start date';
      } else {
        delete validationErrors.endDate; // Clear error if valid
      }
    }
    if (name === 'endDate')
    {
      const currentDate = new Date();
      const newEndDate = new Date(formData.endDate);
      if (newEndDate < currentDate) {
        validationErrors.endDate = 'End date must be after the current date';
      }
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };

  const handleBlurLocation = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'locationVenue' && value.trim() === "") {
      validationErrors.locationVenue = 'Location name cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };

  const handleBlurTournamentFormat = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'tournamentFormat' && value.trim() === "") {
      validationErrors.tournamentFormat = 'Tournament Format cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };

  
  const handleBlurEntryFees = (e) => {
    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};
    if (name === 'entryFees' && value.trim() === "") {
      validationErrors.entryFees = 'Entry Fees cannot be empty.';
    }
    // Add more validation rules as needed

    setErrors({ ...errors, ...validationErrors });
  };

  const handleBlurPhnNumber = (e) => {

    const { name, value } = e.target;
    // Perform validation on the field when it loses focus
    const validationErrors = {};

    if (name === 'phnNumber') {
      if (value.trim() === "") {
          validationErrors.phnNumber = 'Phone number cannot be empty.';
      } else if (!/^\+91\d{10}$/.test(value)) {
        validationErrors.phnNumber = 'Phone number must start with +91 and be followed by exactly 10 digits.';
      }
    }
  

    setErrors({ ...errors, ...validationErrors });
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Validate data if you want
    
    const validationErrors = {};
    
    if (formData.tournamentName.trim().length < 3) {
      validationErrors.tournamentName = 'Tournament name must have at least 3 characters';
    }

    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    if (endDate <= startDate) {
      validationErrors.endDate = 'End date must be after start date';
    }


    if (formData.organizerName.trim().length < 3) {
      validationErrors.organizerName = 'Organizer name must have at least 3 characters';
    }
  
    // Validate tournament description
    if (formData.tournamentDescription.trim().length === 0) {
      validationErrors.tournamentDescription = 'Tournament description is required';
    }
  
    // Validate start date
    if (!formData.startDate) {
      validationErrors.startDate = 'Start date is required';
    }
  
    // Validate end date
    if (!formData.endDate) {
      validationErrors.endDate = 'End date is required';
    } else {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      if (endDate <= startDate) {
        validationErrors.endDate = 'End date must be after start date';
      }
    }
    
    const currentDate = new Date();
    const newEndDate = new Date(formData.endDate);
    if (newEndDate < currentDate) {
      validationErrors.endDate = 'End date must be after the current date';
    }

    const phnNumberWithoutPrefix = formData.phnNumber.trim().replace(/^\+91/, '');
    if (phnNumberWithoutPrefix.length === 0) {
      validationErrors.phnNumber = 'Phone number is required';
  } else if (phnNumberWithoutPrefix.length !== 10) {
      validationErrors.phnNumber = 'Phone number must be exactly 10 digits';
  }  
    
  
    // Validate location/venue
    if (formData.locationVenue.trim().length === 0) {
      validationErrors.locationVenue = 'Location/venue is required';
    }
  
    // Validate tournament format
    if (formData.tournamentFormat.trim().length === 0) {
      validationErrors.tournamentFormat = 'Tournament format is required';
    }
  
    // Validate entry fees
    if (formData.entryFees.trim().length === 0) {
      validationErrors.entryFees = 'Entry fees is required';
    }
  
    // Update errors state with all validation errors

    setErrors(validationErrors);

    //Send Form Data to Backend
    console.log(Object.keys(validationErrors).length)
    if(Object.keys(validationErrors).length === 0)
      {
        registerTournament(formData).then((resp)=>
        {
          console.log("HII" + resp)
          console.log("success log")
          setFormData({
            tournamentName: '',
            organizerName: '',
            tournamentDescription: '',
            startDate: '',
            endDate: '',
            phnNumber: '',
            locationVenue: '',
            tournamentFormat: '',
            entryFees: ''
          });
          window.alert("SuccessFully Registered your tournament.!!");
        }).catch
          (
            (error)=> {
              setFormData({
                tournamentName: '',
                organizerName: '',
                tournamentDescription: '',
                startDate: '',
                endDate: '',
                phnNumber: '',
                locationVenue: '',
                tournamentFormat: '',
                entryFees: ''
              });
              window.alert("Some Error Occured. Please Try again later. After Some time!!");
              console.log(error)
            }
          );
      }
      else
      {
        window.alert('Form submission failed due to validation errors');
        console.log('Form submission failed due to validation errors');
      }
    
  };


  return (
    <div>
      <div style={{backgroundColor:'lightblue'}}>
        <div style={{marginTop:'2%', marginLeft:'25%', marginRight:"25%"}}>
          <h2 style={{marginLeft:'9%'}}>Get Your Tournament Registered Here!</h2>
          <div style={{marginTop:'4%', padding: "2%" ,backgroundImage: `url(${backgroundImage})`}}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="tournamentName">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Tournament Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter tournament name"
                    name="tournamentName"
                    value={formData.tournamentName}
                    onChange={handleChange}
                    onBlur={handleBlurTournamentName}
                    isInvalid={!!errors.tournamentName}
                    style={{opacity:'85%'}}
                  />
                  <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                    {errors.tournamentName}
                  </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="organizerName">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Organizer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter organizer name"
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  onBlur={handleBlurOrganizerName}
                  isInvalid={!!errors.organizerName}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                    {errors.organizerName}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="tournamentDescription">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Tournament Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter tournament description"
                  name="tournamentDescription"
                  value={formData.tournamentDescription}
                  onChange={handleChange}
                  onBlur={handleBlurTournamentDescription}
                  isInvalid={!!errors.tournamentDescription}
                  style={{opacity:'85%'}}
                />
                  <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                    {errors.tournamentDescription}
                  </Form.Control.Feedback>
                
              </Form.Group>
              <br />
              <Form.Group controlId="startDate">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  onBlur={handleBlurStartDate}
                  isInvalid={!!errors.startDate}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                  {errors.startDate}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="endDate">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  onBlur={handleBlurEndDate}
                  isInvalid={!!errors.endDate}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                  {errors.endDate}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="phnNumber">
                  <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    name="phnNumber"
                    value={formData.phnNumber}
                    onChange={handleChange}
                    onBlur={handleBlurPhnNumber}
                    isInvalid={!!errors.phnNumber}
                    style={{opacity:'85%'}}
                  />
                  <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                    {errors.phnNumber}
                  </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="locationVenue">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Location/Venue</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location/venue"
                  name="locationVenue"
                  value={formData.locationVenue}
                  onChange={handleChange}
                  onBlur={handleBlurLocation}
                  isInvalid={!!errors.locationVenue}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                  {errors.locationVenue}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="tournamentFormat">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Tournament Format</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter tournament format"
                  name="tournamentFormat"
                  value={formData.tournamentFormat}
                  onChange={handleChange}
                  onBlur={handleBlurTournamentFormat}
                  isInvalid={!!errors.tournamentFormat}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                  {errors.tournamentFormat}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="entryFees">
                <Form.Label style={{color:'white', backgroundColor:'black', opacity:'75%'}}>Entry Fees</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter entry fees"
                  name="entryFees"
                  value={formData.entryFees}
                  onChange={handleChange}
                  onBlur={handleBlurEntryFees}
                  isInvalid={!!errors.entryFees}
                  style={{opacity:'85%'}}
                />
                <Form.Control.Feedback type="invalid" style={{color:'red', fontWeight:'bolder', backgroundColor:'lightblue', width:'60%', textAlign:'center'}}>
                  {errors.entryFees}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Button type="submit" style={{backgroundColor:'white', color:'black'}}>
                Submit
              </Button>
            </Form>
          </div>
        
        </div>
      </div>
      
    </div>
    
    
  );
};

export default Register_Tournament;



