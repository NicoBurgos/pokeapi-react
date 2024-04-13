import { useEffect, useState } from 'react'
import { fetchPokemon } from '../helpers/fetchPokemon'

export const useFetchPokemonsByCategory = (category) => {
	const API = 'https://pokeapi.co/api/v2/type/' + category
	const [pokemonsByCategory, setPokemonsByCategory] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getPokemons = async () => {
		try {
			const res = await fetch(API)
			const pokemonList = await res.json()
			const { pokemon } = pokemonList
			const poke = pokemon.map(async (p) => {
				return await fetchPokemon(p.pokemon.url)
			})
			setPokemonsByCategory(await Promise.all(poke))
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getPokemons()
	}, [category])

	return { pokemonsByCategory, isLoading }
}
