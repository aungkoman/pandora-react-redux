
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const LoginPage = () => {
    // return <h1>Login Page</h1>;
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      );
};
export default LoginPage;