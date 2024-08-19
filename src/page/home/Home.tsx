import './Home.css';

function Home() {
    return (
        <>
        <div id="home"  className="flex justify-center">
            <div className='text-black'>
                <div className="flex flex-col w-[200px] md:w-[500px] p-4 m-4 bg-red-200 rounded-md gap-4 items-center justify-center py-4 shadow-lg transition-transform transform hover:scale-105">
                    <h2 className='text-[25px] md:text-3xl font-bold text-red-600'>Farmacia Vitalidade</h2>
                    <p className='text-[12px] md:text-[15px] text-center'>Sua saúde e bem-estar são a nossa prioridade. Na Farmácia Vitalidade, oferecemos uma ampla gama de produtos farmacêuticos de alta qualidade e um atendimento especializado que você pode confiar. Com anos de experiência no mercado, estamos comprometidos em fornecer soluções de saúde que melhoram a sua qualidade de vida. Conte com a nossa equipe para cuidar de você e da sua família com dedicação e profissionalismo.</p>
                </div>
            </div>
            <div>
                <img src='./src/assets/fotohome.jpg' className='h-[200px] md:h-[400px] object-cover shadow-lg rounded-lg' alt="Farmacia Vitalidade"/>
            </div>
        </div>

        <hr className="my-8 border-2 border-red-300" />

        <div id="categorias" className="flex flex-col justify-center items-center mt-8">
            <h3 className="text-[20px] md:text-[25px] font-bold mb-4 text-red-600">Nossas Categorias</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-red-200 rounded-md text-center border-2 border-red-500 shadow-md transition-transform transform hover:scale-105">
                    <h4 className="font-bold text-red-600">Medicamentos</h4>
                </div>
                <div className="p-4 bg-red-200 rounded-md text-center border-2 border-red-500 shadow-md transition-transform transform hover:scale-105">
                    <h4 className="font-bold text-red-600">Cuidados Pessoais</h4>
                </div>
                <div className="p-4 bg-red-200 rounded-md text-center border-2 border-red-500 shadow-md transition-transform transform hover:scale-105">
                    <h4 className="font-bold text-red-600">Vitaminas e Suplementos</h4>
                </div>
            </div>
        </div>

        <hr className="my-8 border-2 border-red-300" />

        <div id="produtos" className="flex flex-col justify-center items-center mt-8">
            <h3 className="text-[20px] md:text-[25px] font-bold mb-4 text-red-600">Produtos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Producto 1 - Medicamentos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/paracetamol.webp" alt="Medicamento 1" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Paracetamol 500mg</h4>
                    <p className="text-gray-700">R$ 10,00</p>
                </div>
                {/* Producto 2 - Medicamentos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/ibupro.png" alt="Medicamento 2" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Ibuprofeno 400mg</h4>
                    <p className="text-gray-700">R$ 15,00</p>
                </div>
                {/* Producto 3 - Medicamentos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/amoxi.png" alt="Medicamento 3" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Amoxicilina 500mg</h4>
                    <p className="text-gray-700">R$ 25,00</p>
                </div>
                {/* Producto 4 - Cuidados Pessoais */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/creme.webp" alt="Cuidados Pessoais 1" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Creme Hidratante</h4>
                    <p className="text-gray-700">R$ 43,00</p>
                </div>
                {/* Producto 5 - Cuidados Pessoais */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/shampoo.jpg" alt="Cuidados Pessoais 2" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Shampoo Anticaspa</h4>
                    <p className="text-gray-700">R$ 24,00</p>
                </div>
                {/* Producto 6 - Cuidados Pessoais */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/solar.webp" alt="Cuidados Pessoais 3" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Protetor Solar FPS 50</h4>
                    <p className="text-gray-700">R$ 65,00</p>
                </div>
                {/* Producto 7 - Vitaminas e Suplementos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/vitamina.png" alt="Vitamina 1" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Vitamina C 1000mg</h4>
                    <p className="text-gray-700">R$ 35,00</p>
                </div>
                {/* Producto 8 - Vitaminas e Suplementos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/omega.png" alt="Vitamina 2" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Ômega 3 1000mg</h4>
                    <p className="text-gray-700">R$ 150,00</p>
                </div>
                {/* Producto 9 - Vitaminas e Suplementos */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/multivit.png" alt="Vitamina 3" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Multivitamínico</h4>
                    <p className="text-gray-700">R$ 60,00</p>
                </div>
                {/* Producto 10 - Cuidados Pessoais */}
                <div className="p-4 bg-red-200 rounded-md text-center shadow-lg transition-transform transform hover:scale-105">
                    <img src="/src/assets/antiedad.png" alt="Cuidados Pessoais 4" className="h-[100px] md:h-[150px] object-cover mx-auto mb-2" />
                    <h4 className="font-bold">Creme Anti-idade</h4>
                    <p className="text-gray-700">R$ 320,00</p>
                </div>
            </div>
        </div>

      <hr className="my-8 border-2 border-red-300" />

      {/* Sección de Contacto */}
      <div id="contato" className="flex flex-col justify-center items-center mt-8 mb-8">
          <h3 className="text-[20px] md:text-[25px] font-bold mb-4 text-red-600">Contato</h3>
          <div className="w-full md:w-[800px] p-4 bg-red-300 rounded-md text-center">
              <div className="mb-4">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6788358980523!2d-46.63879848438935!3d-23.555480084684022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bfd3bd7e87%3A0x5397a47672bc1b5b!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100%2C%20Brasil!5e0!3m2!1ses!2sbr!4v1692152189766!5m2!1ses!2sbr"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Localização Farmacia Vitalidade"
                  ></iframe>
              </div>
              <p><strong>Endereço:</strong> Avenida Paulista, 1000- São Paulo, SP</p>
              <p><strong>Telefone:</strong> (11) 1234-5678</p>
              <p><strong>Email:</strong> contato@farmaciavitalidade.com</p>
          </div>
      </div>
      </>
    );
}

export default Home;