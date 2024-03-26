import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  birthday: {
    type: Date,
    required: true
  },
  cne: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^[A-Za-z]\d{9}$/, 'Please fill a valid CNE'],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  }
}, {
  timestamps: true
}
);

const Student = mongoose.model('Student', StudentSchema);

export default Student;