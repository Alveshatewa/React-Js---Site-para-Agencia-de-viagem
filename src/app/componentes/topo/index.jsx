import estilos from './topo.module.css'
import Image from 'next/image'
import Logo from '/public/logo.png'
import IconeSol from '/public/sun.png'
import IconeLua from '/public/moon.png'


export default function Topo (props){

   return(
         <header className={props.temaEscuro ? estilos. topo_modo_escuro : estilos.topo_modo_claro}> 

         <Image className={estilos.logo} src={Logo} alt="Logomarcar" />

         <button onClick={props.alterarTema}  className={props.temaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}> 

            <Image className={estilos.iconesBtn} src={props.temaEscuro ? IconeSol : IconeLua} alt="icone" />
         </button>
    
        </header>    
   )
}