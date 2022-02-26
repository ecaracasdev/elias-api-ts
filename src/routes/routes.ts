import * as express from 'express';
import TasksRoutes from './tasks.routes';

const apiRoutes = express.Router();

apiRoutes.use('/tasks', TasksRoutes);

export default apiRoutes;
