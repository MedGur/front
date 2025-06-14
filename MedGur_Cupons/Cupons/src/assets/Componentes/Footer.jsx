import styles from './Footer.module.css'; // importa os estilos CSS modules
import logo from '../img/logo-medgur-2.png'; // logo da marca
import insta from '../img/insta.png'; // ícone do Instagram
import linkedin from '../img/linkedin.png'; // ícone do LinkedIn
import whats from '../img/whats.png'; // ícone do WhatsApp

export default function Footer() {
  return (
    <footer className={styles.footer}> {/* container geral do rodapé */}
      <div className={styles.container}> {/* agrupa os dois lados do footer */}

        {/* LADO ESQUERDO: Logo, texto e redes sociais */}
        <div className={styles.leftSide}>
          <img src={logo} alt="EcoDescarte Logo" className={styles.logo} /> {/* imagem da logo */}
          <p className={styles.slogan}>
            Transformando o descarte de medicamentos em benefícios tangíveis para você e para o planeta.
          </p>
          <div className={styles.socialIcons}> {/* ícones das redes sociais */}
            <a href="#"><img src={insta} alt="Instagram" className={styles.socialIcon} /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" className={styles.socialIcon} /></a>
            <a href="#"><img src={whats} alt="WhatsApp" className={styles.socialIcon} /></a>
          </div>
        </div>

        {/* LADO DIREITO: Navegação e Contato em colunas separadas */}
        <div className={styles.rightSide}>
          <div className={styles.columnsWrapper}> {/* agrupa as colunas */}

            {/* Coluna de Navegação */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Navegação</h3> {/* título da seção */}
              <div className={styles.underline}></div> {/* linha abaixo do título */}
              <ul className={styles.navList}> {/* lista de links do menu */}
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Pontos de coletas</a></li>
                <li><a href="#">Notícias</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Parceiros</a></li>
                <li><a href="#">Cupons</a></li>
                <li><a href="#">Política de privacidade</a></li>
              </ul>
            </div>

            {/* Coluna de Contato */}
            
            <div className={styles.column}>

              <h3 className={styles.columnTitle}>Contato</h3> {/* título da seção */}
              <div className={styles.underline}></div> {/* linha decorativa */}

              <ul className={styles.contactList}> {/* dados de contato */}
                <li>+55 11 95555-0000</li>
                <li>medgursuporte@gmail.com</li>
              </ul>

            </div>

            {/* Coluna de Formulário */}
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Feedback</h3>

              <div className={styles.underline}></div>

              <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Seu nome" required />
                <input type="email" placeholder="Seu e-mail" required />
                <textarea placeholder="Sua mensagem" rows="4" required></textarea>
                <button type="submit">Enviar</button>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* parte inferior do footer com direitos autorais */}
      <div className={styles.copyright}>
        © 2025 EcoDescarte. Todos os direitos reservados.
      </div>
    </footer>
  );
}
