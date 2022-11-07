import { LockPerson } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
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
});

const initialValues = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	onsubmit: null,
};

const signup = () => {
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues,
		validationSchema: signUpSchema,
		onSubmit: (values, { setErrors, setStatus, setSubmitting }) => {
			setLoading(true);
		},
	});

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<Box sx={{ boxShadow: 5, padding: 5, borderRadius: 2 }}>
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

				<form onSubmit={handleSubmit} noValidate>
					<Box>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<FormControl
									fullWidth
									error={touched.firstname && errors.firstname}>
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
									error={touched.lastname && errors.lastname}>
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

						<FormControl fullWidth error={touched.email && errors.email}>
							<TextField
								label="Email Address / Username"
								margin="normal"
								type="email"
								id="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.email &&
								errors.email &&
								<FormHelperText error id="email">
									{errors.email}
								</FormHelperText>}
						</FormControl>
						<FormControl fullWidth error={touched.password && errors.password}>
							<TextField
								label="Password"
								margin="normal"
								type="password"
								id="password"
								name="password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.password &&
								errors.password &&
								<FormHelperText error id="password">
									{errors.password}
								</FormHelperText>}
						</FormControl>
						<Box sx={{ mt: 3 }}>
							<Button type="submit" variant="contained" fullWidth>
								Sign Up
							</Button>
						</Box>
					</Box>
				</form>
			</Box>
		</Container>
	);
};

export default signup;
