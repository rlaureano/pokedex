import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PokeballImg from '../assets/pokeball.png'
import Footer from '../components/Footer'
import LoadingScreen from '../components/LoadingScreen'
import styles from './pokemon.module.css'
import { PokemonDetails } from '../types'
import { fetchPokemon } from '../api/fetchPokemon'
import { waitFor } from '../utils/utils'

const Pokemon = () => {

    const {name} = useParams()
    const navigate = useNavigate()

    const [ pokemon, setPokemon ] = useState<PokemonDetails>()
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect( () => {

        const getPokemon = async () => {
            setIsLoading(true)
            const fetchPokemonInfo = await fetchPokemon(name as string)
            await waitFor(600)
            setIsLoading(false)
            setPokemon(fetchPokemonInfo)
        }
        getPokemon()
    },[name])

    if( isLoading || !pokemon ) return <LoadingScreen />

    return (
        <>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt="PokeballImg" /> Go back
            </button>
            <div className={styles.pokemon}>
                <main className={styles.pokemonInfo}>
                    <div  className={styles.pokemonTitle}>{name?.toUpperCase()}</div>
                    <div>No. {pokemon?.id}</div>
                    <div>
                        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="BulbasaurPic" />
                    </div>
                    <div>HP: {pokemon?.hp}</div>
                    <div>Attack: {pokemon?.attack}</div>
                    <div>Defense: {pokemon?.defense}</div>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Pokemon