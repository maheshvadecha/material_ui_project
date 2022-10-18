import Login from './pages/auth/Login';

const App = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<Login />
		</div>
	);
};

export default App;
