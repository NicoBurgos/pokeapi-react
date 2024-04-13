import { DataContext } from './DataContext'
import { useFetchData } from '../hooks/useFetchData'

export const DataProvider = ({ children }) => {
	const { globalPokemons, isLoading, getMorePokemons, viewMore } =
		useFetchData()

	return (
		<DataContext.Provider
			value={{ globalPokemons, isLoading, getMorePokemons, viewMore }}
		>
			{children}
		</DataContext.Provider>
	)
}
