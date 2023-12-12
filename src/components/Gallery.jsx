import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useFetch } from '../hooks/useFetch'
import { LIMIT_DRAFT } from '../constants.js'

import '../index.css'

import { useState } from 'react'

export function Gallery () {
  const [offset, setOffset] = useState(0)
  const [idPage, setIdPage] = useState(1) //  state from identificator page

  const { data, loading } = useFetch(LIMIT_DRAFT, offset)

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
            loading={loading}
          />

        ))}

      </section>

      <Button

        prevPage={prevPage}
        nextPage={nextPage}
        number={idPage}

      />

    </>

  )
}
