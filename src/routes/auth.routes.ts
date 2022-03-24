import { Router } from 'express';
import login from '../api/auth/login.controller';
import register from '../api/auth/register.controller';

const router = Router();

router.post('/signIn', login);
router.post('/signUp', register);

export default router;
