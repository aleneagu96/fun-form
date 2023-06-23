import {Button, Checkbox, Radio, RadioGroup , FormControlLabel, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


function Form() {

    const [name, setname] = useState(null);
    const [treat, setTreat] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [birtDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);
    const [terms, setTerms] = useState(null);

    const handleName =(event) => {
        const name =event.target.value;
        setname(name);
        console.log(name)
    }

    const handleSumbit = () => {
        alert("Treat on its way")
    }

    return (
        <div>
            <Typography variant="h" component="h2">Register to get a free treat</Typography>
            <div>
                <FormControl>
                    <TextField
                        label=" Doggo Name"
                        value={name}
                        onChange={handleName}
                        // helperText="Please enter a valid First Name"
                        fullWidth>name</TextField>
                    <TextField
                        label=" Treat of choice"
                        fullWidth>treat</TextField>
                    <TextField
                        label="Pawrent E-mail"
                        fullWidth>email</TextField>
                    <TextField
                        label=" Pawrent Phone Number"
                        fullWidth>phoneNumber</TextField>
                    <TextField
                        label=" Birth date"
                        fullWidth>birtDate</TextField>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            
                            name="radio-buttons-group"
                            row
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Good Boy" />
                            <FormControlLabel value="female" control={<Radio />} label="Good Gal" />
                        </RadioGroup>
                    </FormControl>
                    <FormControlLabel required control={<Checkbox />} label="Pawmise to give paw" />
                </FormControl>

            </div>

            <Button variant="contained" onClick={handleSumbit}>WOOF</Button>
        </div>
    )
}

export default Form;