import { useContext } from 'react'
import List from '../components/List/List'
import { DataContext } from '../context/DataContext'

export const HomeScreen = () => {
	const { globalPokemons, isLoading, getMorePokemons, viewMore } =
		useContext(DataContext)

	return (
		<List
			data={globalPokemons}
			isLoading={isLoading}
			getMorePokemons={getMorePokemons}
			viewMore={viewMore}
		></List>
	)
}
