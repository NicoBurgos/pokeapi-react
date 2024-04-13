export const fetchPokemon = async (API) => {
	try {
		const res = await fetch(API)
		const poke = await res.json()
		const result = {
			id: poke.id,
			name: poke.name,
			img:
				poke.sprites.other.dream_world.front_default ||
				poke.sprites.other.home.front_default ||
				poke.sprites.front_default,
			types: poke.types,
			height: poke.height / 10,
			weight: poke.weight / 10,
		}
		return result
	} catch (error) {
		console.log(console.error())
	}
}
