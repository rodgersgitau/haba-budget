import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './Header'
import Footer from './Footer'
import SignUp from './SignUp'
import Login from './Login'

// Code-splitting is automated for routes
import Home from '../routes/home'
import Reports from '../routes/reports'
import Categories from '../routes/categories'

import './firebase'

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
	    this.currentUrl = e.url
	};

	render() {
	    return (
	        <div id="app-wrapper">
	            <div id="app_mobile">
	                <Header />
	                <Router onChange={this.handleRoute}>
	                    <Login path="/" />
	                    <SignUp path="/signup" />
	                    <Home path="/dashboard" />
	                    <Categories path="/categories" />
	                    <Reports path="/reports" />
	                </Router>
	                <Footer />
	            </div>
	            <div id="app_desktop">
	                <h1>Welcome to Haba</h1>
	                <p>Please open on mobile or fuck off!!</p>
	            </div>

	        </div>

	    )
	}
}

{/* <Profile path="/profile/:user" /> */ }