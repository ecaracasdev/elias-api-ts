import * as express from 'express';
import TasksRoutes from './tasks.routes';
import NotificationsRoutes from './notifications.routes';

const apiRoutes = express.Router();

apiRoutes.use('/tasks', TasksRoutes);
apiRoutes.use('/notifications', NotificationsRoutes);

export default apiRoutes;
