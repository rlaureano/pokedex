import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './pokemons.module.css'
import { fetchPokemons } from '../api/fetchPokemons'
import { Pokemon } from '../types'
import LoadingScreen from '../components/LoadingScreen'
import { waitFor } from '../utils/utils'

const Pokemons = () => {

    const [ isLoading, setIsLoading ] = useState(false)
    const [ query, setQuery ] = useState("")
    const [ pokemons, setPokemons ] = useState<Pokemon[]>([])

    useEffect( () => {

        const fetchAllPokemons = async () => {
            setIsLoading(true)
            const allPokemons = await fetchPokemons()
            await waitFor(600)
            setIsLoading(false)
            setPokemons(allPokemons)
        }

        fetchAllPokemons()

    },[])

    if( isLoading || !pokemons ) {
        return <LoadingScreen />
    }

    const filteredPokemons = pokemons.slice(0,150).filter( pokemon => 
        pokemon.name.toLocaleLowerCase().match(query.toLocaleLowerCase())    
    )

    return (
        <>
            <Header query={query} setQuery={setQuery}/>
            <main>
                <nav className={styles.nav}>
                    { filteredPokemons.slice(0,151).map( ({id, name, imgSrc}) => 
                        <Link key={id} className={styles.listItem} to={`/pokemons/${name.toLocaleLowerCase()}`}>
                            <img className={styles.listItemIcon} src={imgSrc} alt={name} />
                            <div className={styles.listItemText}>
                                <span>{name}</span>
                                <span>{id}</span>
                            </div>
                        </Link>
                    )}
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons