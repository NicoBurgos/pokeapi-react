import './Navbar.css'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchPokemonContext } from '../../context/SearchPokemonContext'

function Navbar() {
	const { onChangeTerm } = useContext(SearchPokemonContext)
	const navigate = useNavigate()
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			navigate('/pokemon/' + event.target.value)
			event.target.value = ''
			onChangeTerm('')
		}
	}

	return (
		<div className="nav">
			<h1>
				<Link to={`/`} onClick={() => onChangeTerm('')}>
					PokeAPI
				</Link>
			</h1>

			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search a pokemon by pressing enter..."
				onChange={(e) => {
					e.preventDefault()
					onChangeTerm(e.target.value)
				}}
				onKeyDown={handleKeyPress}
			/>

			<a href="https://pokeapi.co/" target="_blank">
				API Docs
			</a>
		</div>
	)
}

export default Navbar
