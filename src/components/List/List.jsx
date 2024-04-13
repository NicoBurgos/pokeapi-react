import './List.css'
import { useContext } from 'react'
import Card from '../Card/Card'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchData } from '../../hooks/useSearchData'
import { SearchPokemonContext } from '../../context/SearchPokemonContext'

const List = ({ data, isLoading, getMorePokemons, viewMore }) => {
	const { searchTerm } = useContext(SearchPokemonContext)
	const { filteredPokemons } = useSearchData(data, searchTerm)

	return (
		<InfiniteScroll
			dataLength={data.length}
			next={getMorePokemons}
			hasMore={viewMore}
			className="list"
		>
			{isLoading ? (
				<p>Loading...</p>
			) : filteredPokemons.length > 0 ? (
				filteredPokemons.map((pokemon) => (
					<Card key={pokemon.id} pokemon={pokemon} />
				))
			) : (
				data.map((pokemon) => (
					<div key={pokemon.id}>
						<Card key={pokemon.id} pokemon={pokemon} />
					</div>
				))
			)}
		</InfiniteScroll>
	)
}

export default List
