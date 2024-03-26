import express from 'express';

import { signin, signout } from '../controller/userController.js';
import { findAllStudents, findStudentById, saveStudent, updateStudent, deleteStudent } from '../controller/studentController.js';

const router = express.Router();

router.post('/signin', signin);
router.delete('/signout', signout);

router.get('/students', findAllStudents);
router.get('/student/:id', findStudentById);
router.post('/student', saveStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);

export { router };
