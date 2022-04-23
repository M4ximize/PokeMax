
import React from 'react'
import "../../styles/Card.module.css"
import Link from 'next/link'

const PokemonThumb = ({id, image, name, type, _callback }) => {
  const style = type + " thumb-container" ;
    return (
       
        <div className={style} >
           <div className="detailbox">
            <div className="number"><small>#0{id}</small></div>
             <div className="detail-img">
            <img className="img" src={image} alt={name} />
            </div> 
           </div>
            <div className="detail-wrapper">
                <h3>{name}</h3>
           

                <Link href={`pokemon/${id}`}>
        <a className='btn'>Detalhes</a>
      </Link>

            </div>
        </div>
     

        
    )
}

export default PokemonThumb



