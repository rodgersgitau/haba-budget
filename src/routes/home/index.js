import { h } from 'preact'
import style from './style'

const Home = () => (
    <section className="page_wrapper">
        <div className={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
        </div>
    </section>
)

export default Home
