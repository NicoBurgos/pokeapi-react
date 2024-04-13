import { useState } from 'react'
import { SearchPokemonContext } from './SearchPokemonContext'

export const SearchPokemonProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const onChangeTerm = (term) => {
		setSearchTerm(term)
	}

	return (
		<SearchPokemonContext.Provider value={{ searchTerm, onChangeTerm }}>
			{children}
		</SearchPokemonContext.Provider>
	)
}
