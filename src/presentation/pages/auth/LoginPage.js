
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";


const LoginPage = () => {
    // return <h1>Login Page</h1>;

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("username"),
          password: data.get("password"),
        });
      };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField id="username" label="Username" name="username" variant="outlined" required/>
                <TextField type="password" id="password" label="Password" name="password" variant="outlined" />
                <Stack spacing={2} direction="column">
                    <Button variant="contained" type="submit">Login</Button>
                    <Button variant="text">Register</Button>
                </Stack>
            </Box>
            
        </>
      );
};
export default LoginPage;