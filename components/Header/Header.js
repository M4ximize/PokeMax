import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Header.module.css'




function Header() {
  return (
    /* Logo e nome */
    <nav className={styles.header}>


<div className={styles.logo}>

        <Image
          src="/logo.png"
          width="30"
          height="30"
          alt='PokeMax'
          href = 'about'
        ></Image>

        <h1>PokeMax</h1>
        </div>
 


      <ul className={styles.link_items}>
        <li>
<div>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/Sobre">
          <p>Sobre</p>
          </Link>
         
</div>
        </li>
      </ul>

    </nav>
  )
}

export default Header

