import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed with ❤️ by Hadis</p>
      </footer>
    </>
  );
}

export default Layout;
