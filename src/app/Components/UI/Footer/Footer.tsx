import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__brand}>
          <h2 className={styles.footer__logo}>PhotoКлик</h2>
          <p className={styles.footer__slogan}>
            Пространство для ярких идей. Снимайте в уютной студии с профессиональным светом.
          </p>
        </div>

        <div className={styles.footer__contacts}>
          <div>
            <h4 className={styles.footer__sectionTitle}>Контакты</h4>
            <ul className={styles.footer__links}>
              <li><Link href="tel:+79991234567">+7 (999) 123-45-67</Link></li>
              <li><Link href="mailto:hello@photoklik.ru">hello@photoklik.ru</Link></li>
              <li>г. Сургут ул. 30 лет Победы, 4615</li>
            </ul>
          </div>

          <div>
            <h4 className={styles.footer__sectionTitle}>Мы в соцсетях</h4>
            <div className={styles.footer__social}>
              <Link href="#" aria-label="Instagram">IG</Link>
              <Link href="#" aria-label="VK">VK</Link>
              <Link href="#" aria-label="Telegram">TG</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        © {new Date().getFullYear()} PhotoКлик. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;