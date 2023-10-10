import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { blue, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useSelector, useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import React, { useEffect } from 'react';


import {
  logout,
  loginAsync,
  loginStatus,
  loginError,
  loggedInUser,
  setStatusIdle
} from './../../../features/user/userSlice';



// https://frontendshape.com/post/react-mui-5-login-page-example
const LogoutPage = () =>  {
  // core
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // logout logic
  dispatch(logout());

  useEffect(() => {
    navigate("/");
  }, []); // Include history as a dependency

  
  return <></>;
}
export default LogoutPage;