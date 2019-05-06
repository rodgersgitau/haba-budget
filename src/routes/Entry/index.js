import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'


const Entry = () => (
    <div class={style.entry}>
        <div className={style.container}>
            <Link id={style.homeIcon} className={style.icon} href="/" />
            <Link id={style.searchIcon} className={style.icon} href="/" />
            <Link id={style.downloadIcon} className={style.icon} href="/" />
            <Link id={style.menuIcon} className={style.icon} href="/" />
            <Link id={style.settingsIcon} className={style.icon} href="/" />
        </div>
    </div >
)

export default Entry
