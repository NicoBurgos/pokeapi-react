import { useEffect, useState } from 'react'

export const useSearchData = (data, searchTerm) => {
	const [filteredPokemons, setFilteredPokemons] = useState([])

	useEffect(() => {
		setFilteredPokemons(
			data.filter((pokemon) => pokemon.name.includes(searchTerm.toLowerCase()))
		)
	}, [searchTerm])

	return {
		filteredPokemons,
	}
}
