

import React, { useEffect, useState } from 'react'
import PokemonThumb from '../Card/Card'
import styles from "../../styles/Main.module.css";
import Image from "next/image"



const Main = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=21')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
       <div className= {styles.title}>
        
        <h1>Poke<span>Max</span></h1>
        <Image
          src="/logo.png"
          width="80"
          height="80"
          alt='PokeMax'
          
        />
      </div>

    
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={`https://cdn.traction.one/pokedex/pokemon/${pokemonStats.id}.png`}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}  
              link={pokemonStats.id}
             
             
              
            />
            
         
            )}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Mostrar mais</button>
      </div>
    </div>
  );
}

export default Main;