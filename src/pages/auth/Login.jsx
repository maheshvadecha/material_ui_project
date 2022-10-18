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
import React from 'react';

const theme = createTheme();

const Login = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						borderRadius: 4,
						borderColor: 'light-blue',
						px: 5,
						py: 7,
						boxShadow: 2,
					}}>
					<Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
						<LockOutlined />
					</Avatar>

					<Typography component="h1" variant="h5">
						Sign In
					</Typography>

					<Box component="form">
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
							autoFocus
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
