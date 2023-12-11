import search from '../assets/searchIcon.svg'

export function Seeker () {
  return (
    <div className=" w-[18.75rem] sm:w-[20.75rem] xl:w-[47.75rem] flex justify-end items-center  h-[4.625rem] rounded-[3.125rem] bg-slate-300 shadow-lg m-auto mt-[3.25rem] overflow-hidden">
      <input type="text" placeholder='Buscar...' className=" placeholder:text-slate-500 w-[47.75rem] h-[4.625rem] rounded-[3.125rem] bg-transparent outline-none border-none pr-[18px] pl-[50px] seeker"/>
      <img className='block h-[25px] w-[25px] mr-[1.5rem] opacity-50 cursor-pointer ' src={search} alt="" />
    </div>
  )
}
