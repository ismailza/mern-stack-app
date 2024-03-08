import User from '../model/UserSchema.js';
import bcrypt from 'bcryptjs';

const signin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const existingUser = await User.findOne({
      $or: [
        { email: login },
        { username: login }
      ]
    });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    if (!await bcrypt.compare(password, existingUser.password)) {
      return res.status(400).json({ message: "Invalid credentials." });
    }
    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
}

const signout = async (req, res) => {
  // TODO: Implement logic for signout route.
  res.status(200).json({ message: "Signout route." });
}

export { signin, signout };