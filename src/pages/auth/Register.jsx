import { AppRegistrationOutlined } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	createTheme,
	CssBaseline,
	TextField,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = createTheme();

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
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
						boxShadow: 3,
						borderRadius: 3,
						px: 5,
						py: 5,
					}}>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<AppRegistrationOutlined />
					</Avatar>

					<Typography variant="h5" component="h3" sx={{ mt: 1, mb: 2 }}>
						Sign Up
					</Typography>
					<Box component="form" onSubmit={handleSubmit}>
						<TextField
							label="First Name"
							margin="dense"
							type="text"
							name="firstName"
							id="firstName"
							autoComplete='firestName'
							autoFocus
							value={firstName}
							onChange={e => {
								setFirstName(e.target.value);
							}}
						/>
						<TextField
							label="Last Name"
							margin="dense"
							type="text"
							name="lastName"
							id="lastName"
							autoComplete='lastName'
							// autoFocus
							value={lastName}
							onChange={e => {
								setLastName(e.target.value);
							}}
						/>
						<TextField
							label="Email Address / Username"
							type="email"
							margin="normal"
							fullWidth
							name="email"
							id="email"
							autoComplete='email'
							// autoFocus
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
							required
						/>
						<TextField
							label="Password"
							margin="normal"
							fullWidth
							type="password"
							name="password"
							id="password"
							autoComplete='password'
							// autoFocus
							value={password}
							onChange={e => {
								setPassword(e.target.value);
							}}
							required
						/>
						<Button type="submit" variant="contained" fullWidth>
							{' '}Sign Up
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Register;
