//import { useContext } from 'react'
import List from '../components/List/List'
import { useParams } from 'react-router-dom'
import { useFetchPokemonsByCategory } from '../hooks/useFetchPokemonsByCategory'

export const CategoryScreen = () => {
	const { id } = useParams()
	const { pokemonsByCategory, isLoading } = useFetchPokemonsByCategory(id)

	return <List data={pokemonsByCategory} isLoading={isLoading}></List>
}
