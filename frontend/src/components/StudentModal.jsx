import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useStudentContext } from '../context/StudentContext';
import { toast } from 'react-toastify';

const StudentModal = ({ show, handleClose, studentToEdit, refreshStudents }) => {

  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    cne: '',
    email: ''
  })

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { saveStudent, updateStudent } = useStudentContext();

  useEffect(() => {
    if (studentToEdit)
      setStudent(studentToEdit);
    else
      clearForm();
  }, [studentToEdit]);

  useEffect(() => {
    if (!show) {
      setSubmitted(false);
      setErrors({});
    }
  }, [show]);


  const validateForm = () => {
    const newErrors = {};
    if (!student.firstname.trim()) newErrors.firstname = 'Firstname is required';
    if (!student.lastname.trim()) newErrors.lastname = 'Lastname is required';
    if (!student.birthday.trim()) newErrors.birthday = 'Birthday is required';
    if (!student.cne.trim()) newErrors.cne = 'CNE is required';
    if (!student.email.trim()) newErrors.email = 'Email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const clearForm = () => {
    setStudent({
      firstname: '',
      lastname: '',
      birthday: '',
      cne: '',
      email: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!validateForm()) {
      setSubmitted(false);
      return;
    }
    try {
      if (studentToEdit) {
        await updateStudent(student, studentToEdit._id);
        toast.success('Student updated successfully');
      } else {
        await saveStudent(student);
        toast.success('Student added successfully');
      }
      clearForm();
      refreshStudents();
      handleClose();
      setSubmitted(false);
    } catch (error) {
      console.error('Failed to save the student', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{studentToEdit ? 'Edit Student' : 'Add Student'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={student.firstname}
              onChange={handleChange}
              isInvalid={!!errors.firstname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={student.lastname}
              onChange={handleChange}
              isInvalid={!!errors.lastname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              name="birthday"
              value={student.birthday}
              onChange={handleChange}
              isInvalid={!!errors.birthday}
            />
            <Form.Control.Feedback type="invalid">
              {errors.birthday}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>CNE</Form.Label>
            <Form.Control
              type="text"
              name="cne"
              placeholder="Enter CNE"
              value={student.cne}
              onChange={handleChange}
              isInvalid={!!errors.cne}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cne}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={student.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" type="submit">{studentToEdit ? 'Save Changes' : 'Add Student'}</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default StudentModal