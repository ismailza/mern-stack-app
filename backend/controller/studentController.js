import Student from '../model/StudentSchema.js';

const findAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ result: students });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

const findStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json({ result: student });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

const saveStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ result: student });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json({ result: student });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json({ result: student });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

export { findAllStudents, findStudentById, saveStudent, updateStudent, deleteStudent };