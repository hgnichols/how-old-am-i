import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
