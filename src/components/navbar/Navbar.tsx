import { Link, useNavigate } from 'react-router-dom'
import Pastilla from '../../assets/logo.png'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <div className='flex justify-center items-center gap-2'>
            <img src={Pastilla} alt="" className='w-[40px]'/>
            <div className='text-2xl font-bold'>Farmacia Vitalidade</div>
          </div>
            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar Categoria</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar