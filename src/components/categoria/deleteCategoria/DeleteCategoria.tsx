import  { useState } from 'react';
import api from '../../../service/Service';


const DeleteCategory = ({ categoryId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/categories/${categoryId}`);
    } catch (err) {
      setError('Failed to delete category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default DeleteCategory;