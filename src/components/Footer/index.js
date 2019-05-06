import { Link } from 'preact-router/match'
import style from './style'


const Footer = () => (
    <footer class={style.footer}>
        <div className={style.container}>
            <Link id={style.homeIcon} className={style.icon} href="/" />
            <Link id={style.searchIcon} className={style.icon} href="/" />
            <Link id={style.downloadIcon} className={style.icon} href="/" />
            <Link id={style.addIcon} className={style.icon} href="/" />
            <Link id={style.settingsIcon} className={style.icon} href="/" />
        </div>
    </footer >
)

export default Footer
