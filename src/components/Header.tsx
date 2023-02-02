import React from 'react'
import styles from './header.module.css'

type HeaderProps = {
    query: string,
    setQuery: (value: string) => void
}

const Header = ({query, setQuery}: HeaderProps) => {
  return (
    <header className={styles.header}>
        <input type="text" placeholder='Search a pokemon' className={styles.input} value={query} onChange={e => setQuery(e.target.value)}/>
    </header>
  )
}

export default Header