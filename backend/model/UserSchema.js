import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
}
);

const User = mongoose.model('User', UserSchema);

export default User;