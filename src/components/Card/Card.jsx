import './Card.css'
import { TypeTag } from '../TypeTag/TypeTag'
import { Link } from 'react-router-dom'

const Card = ({ pokemon }) => {
	return (
		<Link to={`/pokemon/${pokemon.id}`} className="card">
			<div className="title">
				<strong>{pokemon.name}</strong>
			</div>

			<div className="img-container">
				<img src={pokemon.img} alt={pokemon.name} />
			</div>
			<div className="types">
				{pokemon.types.map((t) => (
					<TypeTag key={t.type.name} type={t.type.name}></TypeTag>
				))}
			</div>
		</Link>
	)
}

export default Card
