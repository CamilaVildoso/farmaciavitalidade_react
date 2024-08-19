import GetAllCategories from '../../components/categoria/listaCategoria/ListaCategoria';
import AddOrUpdateCategory from '../../components/categoria/agregarCategoria/AgregarCategoria';

const CategoryManagement = () => {
  return (
    <div>
      <h1>Category Management</h1>
      <AddOrUpdateCategory />
      <GetAllCategories />
    </div>
  );
};

export default CategoryManagement;