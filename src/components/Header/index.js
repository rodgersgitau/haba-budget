import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

const Header = () => (
    <header className={style.header}>
        <div className={style.container}>
            <Link className={style.logo} href="/">Haba-Budget</Link>
            <Link className={style.link} activeClassName={style.active} href="/" />
        </div>
    </header >
)

export default Header
