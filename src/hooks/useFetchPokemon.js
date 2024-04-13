import { useEffect, useState } from 'react'
import { fetchPokemon } from '../helpers/fetchPokemon'

export const useFetchPokemon = (id) => {
	const API = 'https://pokeapi.co/api/v2/pokemon/' + id
	const [pokemon, setPokemon] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [errorPokemon, setErrorPokemon] = useState(false)

	const getPokemon = async () => {
		try {
			setErrorPokemon(false)
			const res = await fetchPokemon(API)
			if (res === undefined) {
				setErrorPokemon(true)
			} else {
				setPokemon(res)
				setIsLoading(false)
			}
		} catch (error) {
			console.log(error)
			setErrorPokemon(true)
		}
	}

	useEffect(() => {
		getPokemon()
	}, [id])

	return { pokemon, isLoading, errorPokemon }
}
