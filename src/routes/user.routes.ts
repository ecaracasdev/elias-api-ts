import { Router } from 'express';
import { catcher } from '@src/core/catcher';
import createUser from '../api/user/createUser.controller';

const router = Router();

router.post('/', catcher(createUser));

export default router;
