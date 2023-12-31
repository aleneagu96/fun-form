import { Button, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Typography, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


function Form() {

    const [name, setname] = useState(null);
    const [nameError, setNameError] = useState(null);

    const [treat, setTreat] = useState(null);
    const [treatError, setTreatError] = useState(null);

    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [phoneError, setPhoneError] = useState(null);

    const [birthDate, setBirthDate] = useState(null);
    const [birthDateError, setBirthDateError] = useState(null);

    const [gender, setGender] = useState(null);

    const [terms, setTerms] = useState(null);

    // Name Input and Error handling
    const handleName = (event) => {
        const name = event.target.value;
        setname(name);
        const nameError = handleNameError(name);
        setNameError(nameError);
    }

    const handleNameError = (name) => {
        if (!name || name.length < 3) {
            return 'Name must be at least 3 characters long.';
        }
        return;
    }

    // Treat Input and Error handling
    const handleTreat = (event) => {
        const treat = event.target.value;
        setTreat(treat);
        const treatError = handleTreatError(treat);
        setTreatError(treatError);
    }

    const handleTreatError = (treat) => {
        if (!treat || treat.length < 3 || treat === "chocolate") {
            return "Not a valid treat"
        }
        return;
    }

    // Email Input and Error handling
    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
        const emailError = handleEmailError(email);
        setEmailError(emailError);
    }

    const handleEmailError = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !email.match(emailRegex)) {
            return "Not a valid email address"
        }
        return;
    }

    // Phone Nr. Input and Error handling
    const handlePhone = (event) => {
        const phoneNumber = event.target.value;
        setPhoneNumber(phoneNumber);
        const phoneError = handlePhoneError(phoneNumber);
        setPhoneError(phoneError);
    }

    const handlePhoneError = (phoneNumber) => {
        const phoneNumberRegex = /^07\d{8}$/;
        if (!phoneNumber || phoneNumber.length < 10 || !phoneNumber.match(phoneNumberRegex) || isNaN(phoneNumber)) {
            return 'Number must contain 10 digits and start with 07';
        }
        return;
    }

    // Birth date Input and Error handling
    const handleBirthDate = (date) => {
        setBirthDate(date);
        const birthDateError = handleBirthDateError(date);
        setBirthDateError(birthDateError)
    }

    const handleBirthDateError = (date) => {
        if (!date) {
          return "Please select a birth date";
        }
        return null;
      };

    // Gender Input and error handling 
    const handleGender = (event) => {
        setGender(event.target.value);
    }

    const handleGenderError = (gender) => {
        if (!gender) {
            return "Please select a gender"
        }
        return;
    };

    //Terms error handling


    const handleTermsError = (terms) => {
        if (!terms) {
            return "Please agree to the terms";
        }
        return null;
    };

    const genderError = handleGenderError(gender);
    const termsError = handleTermsError(terms);

    // Handle Submit
    const handleSumbit = () => {
        if (treatError || nameError || emailError || phoneError || birthDateError || !gender || !terms) {
            alert("Please make sure that all fields have been introduced corectly")
        } else
            alert("Treat on its way");
    }

    const isFormValid = (treat && name && email && phoneNumber && birthDate && gender && terms);


    return (
        <div>
            <Typography variant="h" component="h2">Register to get a free treat</Typography>
            <div>
                <FormControl>

                    <TextField
                        label=" Doggo Name"
                        value={name}
                        onChange={handleName}
                        error={nameError}
                        helperText={nameError}
                        fullWidth>name</TextField>

                    <TextField
                        label=" Treat of choice"
                        value={treat}
                        onChange={handleTreat}
                        error={treatError}
                        helperText={treatError}
                        fullWidth>treat</TextField>

                    <TextField
                        label="Pawrent E-mail"
                        value={email}
                        onChange={handleEmail}
                        error={emailError}
                        helperText={emailError}
                        fullWidth>email</TextField>

                    <TextField
                        label=" Pawrent Phone Number"
                        value={phoneNumber}
                        onChange={handlePhone}
                        error={phoneError}
                        helperText={phoneError}
                        fullWidth>phoneNumber</TextField>

                
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label=" Birth date"
                            onChange={handleBirthDate}
                            views={["year", "month", "day"]}
                            value={birthDate}
                            error={handleBirthDateError}
                        />
                    </LocalizationProvider>

                    <FormControl error={!!genderError}>

                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            value={gender}
                            onChange={handleGender}

                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Good Boy"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Good Gal"
                            />
                        </RadioGroup>
                        {genderError ? <FormHelperText>{genderError}</FormHelperText> : " "}
                    </FormControl>

                    <FormControlLabel
                        required
                        control={<Checkbox checked={terms}
                            onChange={(e) => setTerms(e.target.checked)} />}
                            
                        label="Pawmise not to chew shoes" />
                    {termsError ? <FormHelperText>{termsError}</FormHelperText>: null }
                    
                </FormControl>
            </div>

            <Button variant="contained" onClick={handleSumbit} disabled={!isFormValid}>Gib treat</Button>
        </div>
    )
}

export default Form;