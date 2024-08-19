import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CategoryManagement from './page/categoria/Categoria';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria" element={<CategoryManagement />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
