import { useEffect, useState } from 'react'
import { fetchPokemon } from '../helpers/fetchPokemon'

export const useFetchData = () => {
	const API = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset='
	const [globalPokemons, setGlobalPokemons] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [viewMore, setViewMore] = useState(true)

	const getPokemons = async () => {
		try {
			const res = await fetch(API)
			const pokemonList = await res.json()
			const { results } = pokemonList
			const pokemons = results.map(async (p) => {
				return await fetchPokemon(p.url)
			})
			setGlobalPokemons(await Promise.all(pokemons))
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getPokemons()
	}, [])

	const getMorePokemons = async () => {
		const OFFSET = globalPokemons.length.toString()
		try {
			const res = await fetch(API + OFFSET)
			const pokemonList = await res.json()
			const { results } = pokemonList
			results.length == 0 && setViewMore(false)
			const pokemons = results.map(async (p) => {
				return await fetchPokemon(p.url)
			})
			const newGlobalPokemons = await Promise.all(pokemons)
			console.log(newGlobalPokemons)
			setGlobalPokemons([...globalPokemons, ...newGlobalPokemons])
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	return { globalPokemons, isLoading, getMorePokemons, viewMore }
}
