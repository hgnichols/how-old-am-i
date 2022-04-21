import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

function Footer() {
  const { t } = useTranslation("common");

  return <footer className={styles.footer}>{t("footerText")}</footer>;
}

export default Footer;
