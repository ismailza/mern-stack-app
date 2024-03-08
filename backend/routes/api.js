import express from 'express';

import { signin, signout } from '../controller/userController.js';

const router = express.Router();

router.post('/signin', signin);
router.delete('/signout', signout);

export { router };
