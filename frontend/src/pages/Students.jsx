import { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useStudentContext } from "../context/StudentContext";
import StudentModal from '../components/StudentModal';
import { toast } from 'react-toastify';

const Students = () => {
  const studentFields = ['firstname', 'lastname', 'birthday', 'cne', 'email'];
  const { getAllStudents, deleteStudent } = useStudentContext();

  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const fetchedStudents = await getAllStudents();
      setStudents(fetchedStudents || []);
    };
    fetchStudents();
  }, [getAllStudents]);

  const handleOpenModal = () => {
    setStudentToEdit(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const editStudent = (student) => () => {
    setStudentToEdit(student);
    setOpenModal(true);
  };

  const confirmDeleteStudent = async (student) => {
    if (window.confirm(`Are you sure you want to delete the student ${student.lastname} ${student.firstname}?`)) {
      try {
        await deleteStudent(student._id);
        toast.success('Student deleted successfully');
        refreshStudents();
      } catch (error) {
        toast.error('An error occurred while deleting the student');
      }
    }
  };

  const refreshStudents = async () => {
    const fetchedStudents = await getAllStudents();
    setStudents(fetchedStudents || []);
  };

  return (
    <>
      <header className="container py-3">
        <NavBar />
        <Container>
          <h1 className='text-center'>Welcome to MERN Stack Student Management</h1>
          <p className='lead text-center'>Effortlessly manage student information with our comprehensive solution.</p>
        </Container>
      </header>

      <Container>
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Students</h2>
            <button className="btn btn-sm btn-primary" onClick={handleOpenModal}>Add Student</button>
          </div>

          <TableContainer component={Container}>
            <Table className="table table-striped table-hover">
              <TableHead>
                <TableRow>
                  {studentFields.map((field, index) => (
                    <TableCell className="fw-bold" key={index}>{field}</TableCell>
                  ))}
                  <TableCell className="fw-bold">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map(student => (
                  <TableRow key={student._id}>
                    {studentFields.map((field, index) => (
                      <TableCell key={index}>{student[field]}</TableCell>
                    ))}
                    <TableCell>
                      <button className="btn btn-sm btn-warning me-2" onClick={editStudent(student)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => confirmDeleteStudent(student)}>Delete</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Container>

      <StudentModal
        show={openModal}
        handleClose={handleCloseModal}
        studentToEdit={studentToEdit}
        refreshStudents={refreshStudents}
      />

      <Footer />
    </>
  );
}

export default Students;
