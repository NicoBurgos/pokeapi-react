import Navbar from './components/Navbar/Navbar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeScreen } from './routes/HomeScreen'
import { PokemonScreen } from './routes/PokemonScreen'
import { CategoryScreen } from './routes/CategoryScreen'
import { SearchPokemonProvider } from './context/SearchPokemonProvider'
import { DataProvider } from './context/DataProvider'

function App() {
	return (
		<div className="app">
			<SearchPokemonProvider>
				<DataProvider>
					<Navbar></Navbar>
					<Routes>
						<Route path="/" element={<HomeScreen />}></Route>
						<Route
							path="/pokemon/:id"
							element={<PokemonScreen></PokemonScreen>}
						></Route>
						<Route
							path="/category/:id"
							element={<CategoryScreen></CategoryScreen>}
						></Route>
						<Route path="/*" element={<Navigate to="/" />}></Route>
					</Routes>
				</DataProvider>
			</SearchPokemonProvider>
		</div>
	)
}

export default App
