import styles from './Header.module.css'
import logoIgnite from '../assets/logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoIgnite} alt="" />
        </header>
    )
}

