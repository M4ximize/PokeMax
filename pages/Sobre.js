import React from 'react'
import styles from '../styles/Sobre.module.css'


import Heads from "../components/Head/Head"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const about = props => {
  return (

    <div>
    <Heads/>
<Header/>
<div className={styles.title}>
<h1 >Sobre o <span> Projeto </span></h1>
<div className={styles.text}>
<p > 
  Projeto inicialmente desenvolvido com React posteriormente implementado NextJS e com 
  eles venho trazendo uma experiencia de usar uma
  pokedex com um principios de UI/UX aplicados. </p>
  
  <p >Foi feito via API Pokemon coletando dados e as imagens foram coletadas via CDN.</p>

  <p >o Design foi inspirado em uma app do Figma para uma Pokedex.</p>


<div className={styles.list}>
  <ul> 
    <h3>Funções da pokedex</h3>
    <li>
      <p>Listagem de Pokemons</p> 
      </li>
      <li>
      <p>Carregamento de mais pokemons</p> 
      </li>
      <li>
      <p>Detalhes de cada pokemon</p> 
      </li>

      
      </ul>
      </div>
</div>
</div>

<Footer/>
</div>
  )
}


export default about