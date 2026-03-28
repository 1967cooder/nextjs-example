import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>NextJS Header</h1>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/products">Products</Link>
      </nav>
    </header>
  );
};
export default Header;
