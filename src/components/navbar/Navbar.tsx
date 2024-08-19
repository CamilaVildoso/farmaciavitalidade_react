
import Pastilla from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
 
  return (
    <div className='w-full bg-red-500 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <div className='flex justify-center items-center gap-2'>
          <img src={Pastilla} alt="Logo" className='w-[40px]' />
          <div className='text-2xl font-bold'>Farmacia Vitalidade</div>
        </div>
        <div className='flex gap-4'>
        <Link to='/home' className='hover:underline'>Home</Link>
          <Link to='/produtos' className='hover:underline'>Produtos</Link>
          <Link to='/categorias' className='hover:underline'>Categorias</Link>
          <Link to='/contato' className='hover:underline'>Contato</Link>
          <Link to='/categorias'>
            <button className='bg-white text-red-500 px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300'>
              Manage Categorias
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar