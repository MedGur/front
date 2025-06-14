import styles from './Header.module.css';
import logoMedgur from '../img/logo-medgur.png';
import perfilIcon from '../img/perfil_icon.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <img src={logoMedgur} alt="Logo Medgur" className={styles.logo} />
        <nav className={styles.menu}>
          <a href="#">Início</a>
          <a href="#">Pontos de descarte</a>
          <a href="#">Notícias</a>
          <a href="#">Sobre nós</a>
          <a href="#">Parceiros</a>
          <a href="#" className={styles.bold}>Cupons</a>
        </nav>
        <button className={styles.loginButton}>
          <img src={perfilIcon} alt="Perfil" className={styles.icon} />
          <span>Entrar</span>
        </button>
      </div>
    </header>
  );
}
