import { Router } from 'express';
import { getCode, createNotification } from '../controllers/notifications.controller';

const router = Router();

router.get('/', getCode);
router.post('/', createNotification);

export default router;
