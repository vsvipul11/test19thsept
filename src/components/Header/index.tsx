import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="Cadabam health Labs" width={150} height={40} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <select className={styles.location}>
          <option value="mumbai">Mumbai</option>
          {/* Add more cities as needed */}
        </select>
        <Link href="/tests">Tests</Link>
        <Link href="/checkups">Checkups</Link>
        <button className={styles.supportButton}>Support</button>
        <button className={styles.cartButton}>Cart</button>
      </nav>
    </header>
  )
}