import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { useFetch } from '../hooks/useFetch'
import { LIMIT_DRAFT } from '../constants.js'
import { usePagination } from '../hooks/usePagination'

import '../index.css'

export function Gallery () {
  const { nextPage, prevPage, idPage, offset } = usePagination()
  const { data, loading } = useFetch(LIMIT_DRAFT, offset)

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
