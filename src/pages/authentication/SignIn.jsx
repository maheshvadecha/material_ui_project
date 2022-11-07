import {
	LockOutlined,
	Visibility,
	VisibilityOff,
} from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	Container,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	return (
		<Container
			maxWidth="sm"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<Box sx={{ boxShadow: 5, borderRadius: 4, padding: 5 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						py: 5,
					}}>
					<Avatar
						sx={{ bgcolor: 'secondary.main', width: 70, height: 70, mb: 3 }}>
						<LockOutlined />
					</Avatar>
					<Typography component="h5" variant="h5">
						Sign In
					</Typography>
				</Box>

				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email('Must be a valid email')
							.min(3)
							.max(50)
							.required('Email is required'),
						password: Yup.string()
							.min(3)
							.max(50)
							.required('Password is required'),
					})}
					onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
						console.log(values);
					}}>
					{({
						values,
						touched,
						errors,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) =>
						<form noValidate onSubmit={handleSubmit}>
							<Box>
								<FormControl
									fullWidth
									error={Boolean(touched.email && errors.email)}
									sx={{ mb: 3 }}>
									<InputLabel htmlFor="email">
										Email Address / Username
									</InputLabel>
									<OutlinedInput
										label="Email Address / Username"
										type="email"
										id="email"
										name="email"
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									{touched.email &&
										errors.email &&
										<FormHelperText error id="email">
											{errors.email}
										</FormHelperText>}
								</FormControl>

								<FormControl
									fullWidth
									error={Boolean(touched.password && errors.password)}
									sx={{ mb: 3 }}>
									<InputLabel htmlFor="password">Password</InputLabel>
									<OutlinedInput
										label="Password"
										type={showPassword ? 'text' : 'password'}
										id="password"
										name="password"
										value={values.password}
										onBlur={handleBlur}
										onChange={handleChange}
										endAdornment={
											<InputAdornment position='end'>
												<IconButton
													edge="end"
													size="large"
													onClick={handleShowPassword}>
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
							</Box>
							<Box>
								<Button
									type="submit"
									variant="contained"
									fullWidth
									disabled={isSubmitting}>
									Sign In
								</Button>
							</Box>
						</form>}
				</Formik>
			</Box>
		</Container>
	);
};
export default SignIn;
