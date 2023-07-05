import Link from "next/link";
import styles from "./styles/common.module.css";

const NotFound = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.error_page}>
          <h1>404</h1>
          <h2>Not Found</h2>
          <p>Could Not Found Requested Resources</p>
          <Link href={"/"}>
            <button>Go To Home Page</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
