import '../index.css'
import { Spinner } from '../components/Spinner'

export function Card ({ img, name, weight, loading}) {
  return (

    <div className=" card w-[18.9375rem] h-[24.875rem] rounded-[1.25rem] overflow-hidden shadow-xl mx-auto">

    { loading ? (<Spinner/>) : <img className='w-[12rem] h-[12rem] object-center block mt-[3rem] mx-auto' src={img} alt=""/>}
     <div className="flex justify-between px-[2rem] items-center mt-[3rem]"></div>

      <div className="flex justify-between px-[2rem] items-center mt-[2rem]">

        <p className="text-center rounded-[1.375rem]  p-[0.725rem] ph-name">{name}</p>
        <p className="ph-weight text-center rounded-[1.9375rem] bg-[#0065FD] p-[0.825rem]">{`${weight} kg`}</p>

      </div>

    </div>

  )
}
