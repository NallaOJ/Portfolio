import './footer.css'
import logoGithub from '../../Assets/logo-github.png'
import logoMail from '../../Assets/logo-mail.jpg'
import logoLinkedin from '../../Assets/logo-linkedin.webp'

function Footer() {
  return (
    <div id='footer'>
      <div className='logo-footer'>
        <a href="https://github.com/NallaOJ" target="_blank" rel="noopener noreferrer">
          <img src={logoGithub} alt="Logo GitHub" className="logo-footer1" />
        </a>
        <a href="mailto:je.ornella@gmail.com">
          <img src={logoMail} alt="Logo Mail" className="logo-footer2" />
        </a>
        <a href="https://www.linkedin.com/in/ornella-jeannette-b4a5a2122/" target="_blank" rel="noopener noreferrer">
          <img src={logoLinkedin} alt="Logo Mail" className="logo-footer2" />
        </a>
      </div>
      <p>Ornella.J © All rights reserved</p>
    </div>
  )
}

export default Footer;
