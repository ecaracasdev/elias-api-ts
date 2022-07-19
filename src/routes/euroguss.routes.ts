import { Router } from 'express';
import {
    getEnterprise,
    getEnterprises,
    createEnterprise,
    updateEnterprise,
} from '@src/api/euroguss/euroguss.controller';

const router = Router();

router.get('/', getEnterprises);
router.get('/:_enterpriseId', getEnterprise);
router.patch('/:_enterpriseId', updateEnterprise);
router.post('/', createEnterprise);

export default router;
