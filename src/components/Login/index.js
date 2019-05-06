import { h, Component } from 'preact';
import linkState from 'linkstate';
import bcrypt from 'bcryptjs';

import style from './style';
// import { auth } from '../firebase';


export default class Login extends Component {

	handleSubmit(e) {
		e.preventDefault();
		bcrypt.hash(this.state.password, 10)
			.then(hash => { console.log(hash); });
	}

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className={style.login}>
				<h1>Welcome</h1>
				<span className={style.logo}>H</span>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input
							id="email"
							onInput={linkState(this, 'email')}
							placeholder="Email"
							type="email"
							value={this.state.email}
							required="required"
						/>
					</div>
					<div className="form-group">
						<input
							id="password"
							onInput={linkState(this, 'password')}
							placeholder="Password"
							type="password"
							value={this.state.password}
							required="required"
						/>
					</div>
					<div className="form-group">
						<button
							type="submit"
						>Login</button>
					</div>
					<div className="form-group">
						<span className={style.link} >
							Forgot Password ?
							<a href="/">Reset</a>
						</span>
						<span className={style.link} >
							Don't have an account ?
							<a href="/signup">SignUp</a>
						</span>

					</div>
				</form>
			</div >
		);
	}
}
