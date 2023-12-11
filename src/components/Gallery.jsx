import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import '../index.css'

export function Gallery () {
  const LIMIT_DRAFT = 9 //  limit of pokemons that must be seen on the grid
  const [offset, setOffset] = useState(0)
  const [idPage, setIdPage] = useState(1) //  state from identificator page
  const { data } = useFetch(LIMIT_DRAFT, offset)

  const nextPage = () => {
    if (offset <= 8 * LIMIT_DRAFT) {
      setOffset((offset + LIMIT_DRAFT))
      setIdPage(idPage + 1)
    }
  }

  const prevPage = () => {
    if (LIMIT_DRAFT <= offset) {
      setOffset(offset - LIMIT_DRAFT)
      setIdPage(idPage - 1)
    }
  }

  return (

    <>
      <section className=' gallery-main max-w-[63.5625rem] mx-auto mt-[4.06rem] mb-[4.06rem]'>

        {data && data.map((pokemon) => (

          <Card
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites.other.dream_world.front_default}
            weight={pokemon.weight}
          />

        ))}

      </section>

      <Button

        prevPage={() => prevPage(offset)}
        nextPage={() => nextPage(LIMIT_DRAFT)}
        number={idPage}

      />

    </>

  )
}
