import { Link } from 'react-router-dom'
import './TypeTag.css'
export const TypeTag = ({ type }) => {
	return (
		<div className={'type ' + type} key={type}>
			<Link to={`/category/${type}`}>{type}</Link>
		</div>
	)
}
