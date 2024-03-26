import { createContext, useContext } from 'react';
import { UseAPI } from '../hook/UseAPI';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {

  const { request } = UseAPI();

  const getAllStudents = async () => {
    try {
      return await request('get', `/api/students`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getStudent = async (id) => {
    try {
      return request('get', `/api/student/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const saveStudent = async (student) => {
    try {
      return request('post', `/api/student`, student);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateStudent = async (student, id) => {
    try {
      return request('put', `/api/student/${id}`, student);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deleteStudent = async (id) => {
    try {
      return request('delete', `/api/student/${id}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <StudentContext.Provider value={{ getAllStudents, getStudent, saveStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);

export default StudentProvider;
