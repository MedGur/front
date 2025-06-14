import styles from './Header.module.css'; // importa o CSS modular
import logoMedgur from '../img/logo-medgur.png'; // logo principal
import saopaulo from '../img/saopaulo.png'; // imagem dos parceiros
import raia from '../img/raia.png';
import bifarma from '../img/bifarma.png';
import farmaconde from '../img/conde.png';
import popular from '../img/popular.png';
import perfilIcon from '../img/perfil_icon.png'; // ícone de login

export default function Header() {
  return (
    <header className={styles.header}>
      
      {/* Barra de navegação principal */}
      <div className={styles.navbar}>
        {/* Logo da Medgur */}
        <img src={logoMedgur} alt="Logo Medgur" className={styles.logo} />

        {/* Menu de navegação com links */}
        <nav className={styles.menu}>
          <a href="#">Início</a>
          <a href="#">Pontos de descarte</a>
          <a href="#">Notícias</a>
          <a href="#">Sobre nós</a>
          <a href="#">Parceiros</a>
          <a href="#" className={styles.bold}>Cupons</a> {/* "Cupons" com destaque */}
        </nav>

        {/* Botão de login com ícone */}
        <button className={styles.loginButton}>
          <img src={perfilIcon} alt="Perfil" className={styles.icon} />
          <span>Entrar</span>
        </button>
      </div>

      {/* Seção de logotipos de parceiros */}
      <div className={styles.partners}>

        {/* Primeira linha de parceiros */}
        <div className={styles.partnersRow}>
          <img src={saopaulo} alt="Drogaria São Paulo" />
          <img src={raia} alt="Droga Raia" />
          <img src={bifarma} alt="Drogarias Bifarma" />
        </div>

        {/* Segunda linha de parceiros */}
        <div className={styles.partnersRow}>
          <img src={farmaconde} alt="Farma Conde" />
          <img src={popular} alt="Drogaria Popular" />
        </div>
      </div>
    </header>
  );
}
