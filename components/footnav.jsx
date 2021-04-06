import styles from '../styles/Footer.module.css'
import Link from 'next/link'
export default function GetLaunchDate(time) {
  return(
    <footer className={styles.footer} id="footer">
      <div className={styles.footWrap}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <a href="https://www.accelorsoftware.com" target="_blank">Who made this?</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}