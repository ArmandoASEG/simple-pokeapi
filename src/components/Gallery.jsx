
import { Card } from '../components/Card'  
import { Button } from '../components/Button'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import '../index.css'


export function Gallery() {

  const [ limit, setLimit ] = useState(9)
  const [ offset, setOffset ] = useState(0)
  const [ number, setNumber ] = useState(1)
  const { data } = useFetch(limit, offset)

  const nextPage = () => {
   if( offset <= 8*9){
    setLimit((9))
    setOffset((offset + limit))
    setNumber(number + 1)
   }
  }

  const prevPage = () => {
    if ( 9 <= offset) {
    setOffset(offset - limit)
    setNumber(number - 1)
   }
 }
  return (

    <>

      <section className=' gallery-main max-w-[63.5625rem] mx-auto mt-[4.06rem] mb-[4.06rem]'>

        {data && data.map( (pokemon) => (
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
        nextPage={() => nextPage(limit)}
        number={number}

      />

    </>

)
}
    
