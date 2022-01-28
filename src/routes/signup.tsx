import React, { useState } from 'react';
import '../styles/css/login-portal.css';

// move these variables to a config file later
const _API_PORT = 3000;
const _API_URL = `http://localhost:${_API_PORT}`;


export default function Login() {

	const [ state, setState ] = useState({
		username: "",
		password: "",
		confirm: "",
		errorMessage: ""
	});

	function handleChange(event: any) {
		setState({...state, [event.target.name]: event.target.value});
	}

	function renderError(message: string) {
		setState({...state, errorMessage: message});
	}


	function submitHandler() {

		if (state.password === state.confirm) {
			renderError("");

			const options = {
				method: 'POST',
				body: `username=${state.username}&password=${state.password}`,
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			};
			fetch(`${_API_URL}/signup`, options).then(res => {
				if (res.status === 401) {
					renderError("user already exists");
				}
				else if (res.status === 200) {
					window.location.href = "http://localhost:8080/profile";
				}
			});

		}
		else {
			renderError("passwords must match");
		}
	}


	return (
		<div id="signup-portal">
			<div className="transparent-overlay"></div>
			<div className="portal-container">

				<div>
					<input type="text" className="input-field" id="username" name="username" placeholder="username"
						value={state.username}
						onChange={handleChange} />
					<input type="password" className="input-field" id="password" name="password" placeholder="password"
						value={state.password}
						onChange={handleChange} />
					<input type="password" className="input-field" id="confirm-password" name="confirm" placeholder="confirm password"
						value={state.confirm}
						onChange={handleChange} />
					{/*<input type="submit" value="sign up" />*/}
					<button id="submit" className='btn input-field' onClick={submitHandler}>sign up</button>
					<a className="text link" href="/login">go to login</a>
					<div id="error-message-display">{state.errorMessage}</div>
				</div>

			</div>
		</div>
	);

}