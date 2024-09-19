import Link from 'next/link'
 import styles from './CTAButtons.module.css'

export default function CTAButtons({ buttons = [
  { text: "Lab Tests", href: "/lab-tests", className: styles.labTestsButton },
  { text: "Checkups", href: "/checkups", className: styles.checkupsButton }
] }) {
  return (
    <div className={styles.ctaButtons}>
      {buttons.map((button, index) => (
        <Link key={index} href={button.href} className={button.className}>
          {button.text}
        </Link>
      ))}
    </div>
  )
}