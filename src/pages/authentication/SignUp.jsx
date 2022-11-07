import {
	LockPerson,
	Visibility,
	VisibilityOff,
} from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const SignUp = () => {
	const [showPassword, setShowPassword] = useState(true);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<Box sx={{ boxShadow: 5, padding: 5, borderRadius: 2,}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Avatar
						sx={{ bgcolor: 'secondary.main', height: 70, width: 70, mb: 2 }}>
						<LockPerson />
					</Avatar>
					<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
						Sign Up
					</Typography>
				</Box>
				<Formik
					initialValues={{
						firstname: '',
						lastname: '',
						email: '',
						password: '',
					}}
					validationSchema={Yup.object().shape({
						firstname: Yup.string().required('Firstname is required'),
						lastname: Yup.string().required('Lastname is required'),
						email: Yup.string()
							.email('Must be a valid email')
							.min(3, 'Minimum 3 symbols')
							.max(50, 'Maximum 50 symbols')
							.required('Email is required'),
						password: Yup.string()
							.min(3, 'Minimum 3 symbols')
							.max(50, 'Maximum 50 symbols')
							.required('Password is required'),
					})}
					onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
						console.log(values);
					}}>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) =>
						<form onSubmit={handleSubmit} noValidate>
							<Box>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<FormControl
											fullWidth
											error={Boolean(touched.firstname && errors.firstname)}>
											<TextField
												label="Firstname"
												margin="normal"
												fullWidth
												type="text"
												id="firstname"
												name="firstname"
												value={values.firstname}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{touched.firstname &&
												errors.firstname &&
												<FormHelperText error id="firstname">
													{errors.firstname}
												</FormHelperText>}
										</FormControl>
									</Grid>
									<Grid item xs={12} sm={6}>
										<FormControl
											fullWidth
											error={Boolean(touched.lastname && errors.lastname)}>
											<TextField
												label="Lastname"
												margin="normal"
												fullWidth
												type="text"
												id="lastname"
												name="lastname"
												value={values.lastname}
												onChange={handleChange}
												onBlur={handleBlur}
											/>
											{touched.lastname &&
												errors.lastname &&
												<FormHelperText error id="lastname">
													{errors.lastname}
												</FormHelperText>}
										</FormControl>
									</Grid>
								</Grid>

								<FormControl
									sx={{ mb: 2, mt: 2 }}
									fullWidth
									error={Boolean(touched.email && errors.email)}>
									<InputLabel htmlFor="outlined-adornment-email-register">
										Email Address / Username
									</InputLabel>
									<OutlinedInput
										label="Email Address / Username"
										type="email"
										id="outlined-adornment-email-register"
										name="email"
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{touched.email &&
										errors.email &&
										<FormHelperText
											error
											id="standard-weight-helper-text--register">
											{errors.email}
										</FormHelperText>}
								</FormControl>

								<FormControl
									sx={{ mb: 2, mt: 2 }}
									fullWidth
									error={Boolean(touched.password && errors.password)}>
									<InputLabel htmlFor="outlined-adornment-password-register">
										Password
									</InputLabel>
									<OutlinedInput
										label="Password"
										type={showPassword ? 'text' : 'password'}
										id="outlined-adornment-password-register"
										name="password"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													// aria-label="toggle password visibility"
													edge="end"
													size="large"
													onClick={handleClickShowPassword}>
													{showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										}
									/>
									{touched.password &&
										errors.password &&
										<FormHelperText error id="password">
											{errors.password}
										</FormHelperText>}
								</FormControl>
								<Box sx={{ mt: 3 }}>
									<Button
										type="submit"
										variant="contained"
										fullWidth
										disabled={isSubmitting}>
										Sign Up
									</Button>
								</Box>
							</Box>
						</form>}
				</Formik>
			</Box>
		</Container>
	);
};

export default SignUp;
