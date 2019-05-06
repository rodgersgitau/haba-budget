import { h } from 'preact'
import style from './style'

const SignUp = () => (
    <div className={style.signUp}>
        <h1>Welcome</h1>
        <span className={style.logo}>H</span>
        <form>
            <div className="form-group">
                <input type="email" placeholder="Email" id="email" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" id="password" />
            </div>
            <div className="form-group">
                <button type="submit">SignUp</button>
            </div>
            <div className="form-group">
                <span className={style.link} >
					Forgot Password ?
                    <a href="/">Reset</a>
                </span>
                <span className={style.link} >
					Already have an account ?
                    <a href="/">Login</a>
                </span>

            </div>
        </form>
    </div >
)

export default SignUp
