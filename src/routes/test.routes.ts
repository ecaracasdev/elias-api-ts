import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const data = {
        message: 'hola',
    };
    return res.json(data);
});

export default router;
