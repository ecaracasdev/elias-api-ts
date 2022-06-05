import { Router } from 'express';
import { getWhos, createWho, getWho } from '../api/who/who.controller';

const router = Router();

router.get('/', getWhos);
router.get('/:_userId', getWho);
router.post('/', createWho);

export default router;
