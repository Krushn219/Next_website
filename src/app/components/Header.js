// import styles from "@/app/styles/navbar.module.css";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link
            href={"/"}
            className={mulish.className}
            style={{ "font-weight": "700", "font-size": 30, color: "red" }}
          >
            {/* <Image src="/logo.png" alt="Logo" width={150} height={40} /> */}
            Krushna<span style={{ color: "white" }}>vandan</span>
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
