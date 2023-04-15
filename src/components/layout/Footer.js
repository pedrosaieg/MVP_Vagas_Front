import { FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'


function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaGithub /></li>
            </ul>
            <p className={styles.copyright}><span>Vagas</span> &copy; Pedro Saieg</p>
        </footer >
    )
}

export default Footer