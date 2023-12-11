import ReactDOM from 'react-dom/client'
import imgTitle from './assets/header-img.png'
import { Seeker } from './components/Seeker'
import { Gallery } from './components/Gallery'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className=" flex justify-center">

      <img className=' w-[21.5rem] h-[8.625rem] mt-[0.88rem]' src={imgTitle} alt="pokemons"/>

    </div>

    <Seeker/>
    <Gallery/>

  </>
)
