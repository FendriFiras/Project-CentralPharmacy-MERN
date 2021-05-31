import React, { useContext, useState } from 'react';

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import { Redirect } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
import { JwtContext } from '../../shared/context/jwt-context';
import './Login.css';
import {
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
} from 'reactstrap';
// reactstrap components

const Login = () => {
	const auth = useContext(AuthContext);
	const { jwt, setJwt } = useContext(JwtContext);

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginMode, setIsLoginMode] = useState(true);
	const authSubmitHandler = async (event) => {
		event.preventDefault();
		auth.login();
		try {
			const newUser = {
				username: name,
				password: password,
			};
			let hasError = false;
			const response = await fetch('http://localhost:3001/auth/signin', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				hasError = true;
			}

			//receving web tokens
			const responseData = await response.json();
			if (responseData.message == undefined) {
				localStorage.setItem('isLoggedIn', true);
			}

			console.log(responseData);

			localStorage.setItem('token', responseData.accessToken);
			localStorage.setItem('jwt', responseData.roles);
			localStorage.setItem('jwtName', responseData.username);
			console.log(responseData.accessToken);
			let role;

			//get Role content
			if (responseData.roles == undefined) {
			} else {
				setJwt(responseData);

				responseData.roles.map((roles) => {
					switch (roles) {
						case 'ROLE_ADMIN':
							role = 'admin';
							break;
						case 'ROLE_RESPONSABLE':
							role = 'responsable';
							break;
						case 'ROLE_TRANSPORTEUR':
							role = 'transporteur';
							break;
						case 'ROLE_GROSSISTE':
							role = 'grossiste';
							break;

						default:
							role = 'auth';
							break;
					}
				});

				const request = await fetch(`http://localhost:3001/${role}`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'x-access-token': localStorage.getItem('token'),
					},
				}).then(async (response) => {
					const data = await response.text();
					console.log(data);
				});
			}

			if (hasError) {
				throw new Error(responseData.message);
			}
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	return (
		<>
			<Card className="authentication">
				<h2>Login Required</h2>
				<hr />
				<form onSubmit={authSubmitHandler}>
					<Input
						id="name"
						type="text"
						placeholder="Enter your email"
						onChange={(event) => setName(event.target.value)}
					/>

					<Input
						id="password"
						type="password"
						placeholder="Enter your password"
						onChange={(event) => setPassword(event.target.value)}
					/>

					<Button type="submit">LOGIN</Button>
				</form>
			</Card>
		</>
	);
};

export default Login;
