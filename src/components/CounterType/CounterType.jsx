import { useFetchCounter } from '../../hooks/useFetchCounters'
import { TypeTag } from '../TypeTag/TypeTag'
import './CounterType.css'

export const CounterType = ({ type }) => {
	const { counters } = useFetchCounter(type)

	return (
		<div className="counter-container">
			<div className="counter-title">
				<div>Counters for </div>
				<div>
					<span className={'type ' + type}>{type}</span>
				</div>
			</div>
			<div className="counter-tags">
				<div className="tags-container">
					{counters.map((i) => (
						<TypeTag key={i} type={i}></TypeTag>
					))}
				</div>
			</div>
		</div>
	)
}
