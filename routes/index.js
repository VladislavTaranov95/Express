import { Router } from 'express';
import { getAllUsers } from '../controllers/users.js';

const router = Router();

router.get('/api/users', getAllUsers);

export default router;
