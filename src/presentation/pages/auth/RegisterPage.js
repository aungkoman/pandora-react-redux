import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { blue, red } from '@mui/material/colors';

// core import
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import {
  // selectors
  loginStatus,
  loginError,

  // thunks
  registerThunk,
} from './../../../features/user/userSlice';


const RegisterPage = () => {

  // core
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // internal state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState({}); // Object to store validation errors



  // selector hooks
  const status = useSelector(loginStatus);
  const error = useSelector(loginError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // validate form data
    // Validation logic
    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    if (!formData.confirm_password) {
      validationErrors.confirm_password = 'Password is required';
    }
    if (formData.password != formData.confirm_password) {
      validationErrors.same_password = 'Password and confirm password need to be match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

    } else {
      // Submit the form or send data to the server
      setErrors({}); // Clear any previous errors
      console.log(formData); // You can send this data to your server for registration
      dispatch(registerThunk(formData));
      // return;
    }

    // return;

    


    /*
    const data = new FormData(event.currentTarget);
    let email = data.get("email");
    let password = data.get("password");
    let confirm_password = data.get("confirm_password");
    let name = data.get("name");
    let postData = { name, email, password, confirm_password };
    console.log(postData);
    // TODO: client side validation
    // dispatch register
    */
    // dispatch(registerThunk(postData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
            error={errors.hasOwnProperty("name")}
            helperText={errors.name}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            error={errors.hasOwnProperty("email")}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            error={errors.hasOwnProperty("password")}
            helperText={errors.password}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm_password"
            label="Confrim Password"
            type="password"
            id="confirm_password"
            autoComplete="current-password"
            onChange={handleChange}
            error={errors.hasOwnProperty("confirm_password")}
            helperText={errors.confirm_password}
          />
          <Box sx={{ m: 1, position: 'relative' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={status == 'loading'}
            >
              Register
            </Button>
            {status == 'loading' && (
              <CircularProgress
                size={24}
                sx={{
                  color: blue[500],
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>


          <Grid container>
            <Grid item xs>

            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default RegisterPage;