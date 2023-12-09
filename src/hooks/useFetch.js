import { useState, useEffect} from 'react'

export function useFetch (l, o) {

   const [data, setData] = useState()

  useEffect( () => {

    async function pokes() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${l}&offset=${o}`)
      const pokeList = await response.json()
      const { results } = pokeList

      const getPokes = results.map( async (poke) => {
        const res = await fetch(poke.url)
        const pokemons = await res.json()
        return pokemons
      })
      const resolvedPokemons = await Promise.all(getPokes)

      setData(resolvedPokemons)

    }

    pokes()
  }, [l, o])

  return  { data } 
      

}