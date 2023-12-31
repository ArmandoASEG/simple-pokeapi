import { useState, useEffect } from 'react'

export function useFetch (limit, offset) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  // Getting the principal data Api for pokemon's list
    async function getPokemonData () {
      try {
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const pokeList = await response.json()
        const { results } = pokeList

        // Getting the individuals pokemon data from Api. for extract specific data
        const getPokes = results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          const pokemons = await res.json()
          return pokemons
        })
        const resolvedPokemons = await Promise.all(getPokes)

        setData(resolvedPokemons)
        setLoading(false)
      } catch (error) {
        console.log('failed Fetch')
        setLoading(false)
      }
    }

    getPokemonData()
  }, [limit, offset])

  return { data, loading }
}
