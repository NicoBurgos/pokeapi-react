import './DetailedCard.css'
import { useFetchPokemon } from '../../hooks/useFetchPokemon'
import { CounterType } from '../CounterType/CounterType'
import { useParams } from 'react-router-dom'
import { TypeTag } from '../TypeTag/TypeTag'

export const DetailedCard = () => {
	const { id } = useParams()
	const { pokemon, isLoading, errorPokemon } = useFetchPokemon(id)

	return (
		<div>
			{errorPokemon ? (
				<h2 className="error-message">
					The pokemon entered does not exist. Try again!
				</h2>
			) : isLoading ? (
				<p>Cargando...</p>
			) : (
				<div>
					<div className="detailed-card">
						<div className="pokemon-container">
							<div className="detailed-title">
								<h1>{pokemon.name}</h1>
							</div>
							<div className="pokemon">
								<div className="image-container">
									<img src={pokemon.img} alt={pokemon.name} />
								</div>
								<div className="data-container">
									<div className="types">
										{pokemon.types.map((t) => (
											<TypeTag key={t.type.name} type={t.type.name}></TypeTag>
										))}
									</div>
									<div className="pokemon-data">
										<p>Height: {pokemon.height}m</p>
										<p>Weight: {pokemon.weight}kg</p>
									</div>
								</div>
							</div>
						</div>

						<div className="type-counter-container">
							{pokemon.types.map((t) => {
								return (
									<CounterType
										key={t.type.name}
										type={t.type.name}
									></CounterType>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
