import Link from "next/link";
// import Image from "next/image";
import styles from "./style.module.scss";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <img src="/icons/logo.png" alt="logo" className={styles.logo} /> */}

        <h2 className={styles.logo}>
          <img src="/icons/logo.png" alt="logo" width={40} height={40} />
          Digital Hardware Solutions
        </h2>

        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>
            <Link href="#services">Services</Link>
          </li>
          <li className={styles.item}>About Us</li>
          <li className={styles.item}>
            <Link href="#contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
