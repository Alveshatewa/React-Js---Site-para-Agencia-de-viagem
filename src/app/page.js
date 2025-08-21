'use client';
import { useState } from 'react';
import Topo from './componentes/topo/index.jsx';
import SecaoBanner from './componentes/seccaoBanner/index.jsx';
import SecaoExperienciaTrabalho from './componentes/seccaoExperienciaTrabalho/index.jsx';
import Rodape from './componentes/rodape/index.jsx';
import estilos from './page.module.css';

export default function Home() {

  const [temaEscuro, setTemaEscuro] = useState(false)

  function alterarTema() {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className={estilos.container}>
      <Topo alterarTema={alterarTema} temaEscuro={temaEscuro}/>
      <main>
        <SecaoBanner temaEscuro={temaEscuro}/>
        <SecaoExperienciaTrabalho temaEscuro={temaEscuro}/>
      </main>
      <Rodape temaEscuro={temaEscuro}/>
    </div>
  );
}