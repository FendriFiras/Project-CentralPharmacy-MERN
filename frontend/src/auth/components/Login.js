import React, { useContext, useState } from 'react';

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';

import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
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
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginMode, setIsLoginMode] = useState(true);
	const authSubmitHandler = async (event) => {
		event.preventDefault();
		auth.login();
		try {
			const newProduct = {
				username: name,
				password: password,
			};
			let hasError = false;
			const response = await fetch('http://localhost:3001/auth/signin', {
				method: 'POST',
				body: JSON.stringify(newProduct),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				hasError = true;
			}

			const responseData = await response.json();

			console.log(responseData);

			if (hasError) {
				throw new Error(responseData.message);
			}
		} catch (error) {
			alert(error.message || 'Something went wrong!');
		}
	};

	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			},
		},
		false
	);
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
