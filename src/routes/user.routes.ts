import { Router } from 'express';
import createUser from '../api/user/createUser.controller';

const router = Router();

router.post('/', createUser);

export default router;
