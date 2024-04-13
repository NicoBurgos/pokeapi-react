import { useEffect, useState } from 'react'

export const useFetchCounter = (type) => {
	const API = 'https://pokeapi.co/api/v2/type/' + type
	const [counters, setCounters] = useState([])

	const getCounters = async () => {
		try {
			const res = await fetch(API)
			const countersList = await res.json()
			const results = countersList.damage_relations.double_damage_from
			const counterNames = results.map((i) => i.name)
			setCounters(counterNames)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getCounters()
	}, [])

	return { counters }
}
