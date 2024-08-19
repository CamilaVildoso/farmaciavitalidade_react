import React, { useState, useEffect } from 'react';
import api from '../../../service/Service';


const AddOrUpdateCategory = ({ categoryId = null }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (categoryId) {
      const fetchCategory = async () => {
        try {
          const response = await api.get(`/categories/${categoryId}`);
          setName(response.data.name);
        } catch (err) {
          setError('Failed to fetch category');
        }
      };

      fetchCategory();
    }
  }, [categoryId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (categoryId) {
        await api.put(`/categories/${categoryId}`, { name });
      } else {
        await api.post('/categories', { name });
      }
      setName('');
    } catch (err) {
      setError('Failed to save category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{categoryId ? 'Update' : 'Add'} Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default AddOrUpdateCategory;