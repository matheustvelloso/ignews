import styles from './styles.module.scss'
import Image from 'next/image'
import { SignInButton } from '../SignInButton'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" width={110} height={31} />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}