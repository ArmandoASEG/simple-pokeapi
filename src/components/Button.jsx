import '../index.css'

export function Button ({ number, prevPage, nextPage }) {
  return (

    <div className=" flex justify-center mb-[3.46rem] gap-8 items-center">

      <button onClick={prevPage} className="btn-pagination flex justify-center w-[7.1875rem] h-[2.25rem] p-[0.625rem] items-center rounded-[1rem] border-solid border-[1.3px] border-black">Anterior</button>

      <p className='btn-number border-solid border-[1.3px] border-black py-[7px] px-[15px] rounded-2xl'>{number}</p>

      <button onClick={nextPage}className="btn-pagination flex justify-center text-center w-[7.1875rem] h-[2.25rem] p-[0.625rem] items-center rounded-[1rem] border-solid border-[1.3px] border-black ">Siguiente</button>

    </div>
  )
}
