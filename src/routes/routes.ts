import * as express from 'express';
import TasksRoutes from './tasks.routes';
import TestRoutes from './test.routes';

const apiRoutes = express.Router();

apiRoutes.use('/tasks', TasksRoutes);
apiRoutes.use('/test', TestRoutes);

export default apiRoutes;
