import LockOutlined from '@mui/icons-material/LockOutlined';
import {
	Avatar,
	Button,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
	Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';

const theme = createTheme();

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handlsubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						borderRadius: 3,
						borderColor: 'light-blue',
						px: 5,
						py: 7,
						boxShadow: 5,
					}}>
					<Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>

					<Typography component="h1" variant="h5">
						Sign In
					</Typography>

					<Box component="form" onSubmit={handlsubmit}>
						<TextField
							type="text"
							label="Email or Username"
							margin="normal"
							fullWidth
							required
							name="email"
							id="email"
							autoComplete="email"
							autoFocus
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
							helperText="Please enter your email address or username"
							// InputProps={{readOnly:'true'}}
						/>
						<TextField
							type="password"
							label="Password"
							margin="normal"
							fullWidth
							required
							name="password"
							id="password"
							autoComplete="password"
							// autoFocus
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
							helperText="Please enter password"
							// multiline
							// rows={4}
							// defaultValue={}
						/>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							sx={{ mt: 3, mb: 2 }}>
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Login;
