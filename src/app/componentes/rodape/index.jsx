import estilos from './rodape.module.css'
import Image from 'next/image'
import iconeFacebook from '/public/facebook.png'
import iconeTwitter from '/public/twitter.png'
import iconeLinkedin from '/public/linkedin.png'
import iconeDribble from '/public/dribble.png'
import iconeBehance from '/public/behance.png'
import iconeGooglePlus from '/public/google.png'
import Logo from '/public/logo.png'

export default function Rodape(props){

    return(

        <footer className={props.temaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
      <div className={estilos.container_informacoes}>
        <div>
          <Image src={Logo} alt="logomarca"/>
          <p className={estilos.paragrafo}>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
          </p>
        </div>
        <div>
          <Image src={iconeFacebook} alt="facebook"/>
          <Image src={iconeTwitter} alt="twitter"/>
          <Image src={iconeLinkedin} alt="linkedin"/>
          <Image src={iconeDribble} alt="dribble"/>
          <Image src={iconeBehance} alt="behance"/>
          <Image src={iconeGooglePlus} alt="google plus"/>
        </div>
      </div>
      <div className={estilos.copyright}>
        <p>Copyright 2025 &copy; <span> Alves Hatewa </span></p>
      </div>
    </footer>
    )
}