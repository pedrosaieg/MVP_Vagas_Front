import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import Container from './Container'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    {<img src={logo} alt="Vagas" />}
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    {/* <li><Link to="/newcompany">Nova empresa</Link></li> */}
                    <li className={styles.item}><Link to="/company">Empresa</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar