import axios from '../api/axios';

export const UseAPI = () => {

  const request = async (method, url, data = null) => {
    try {
      const response = await axios[method](url, data);
      return response.data.result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { request };
};