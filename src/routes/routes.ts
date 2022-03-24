import * as express from 'express';
import TasksRoutes from './tasks.routes';
import NotificationsRoutes from './notifications.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';

const apiRoutes = express.Router();

apiRoutes.use('/auth', AuthRoutes);
apiRoutes.use('/user', UserRoutes);
apiRoutes.use('/tasks', TasksRoutes);
apiRoutes.use('/notifications', NotificationsRoutes);

export default apiRoutes;
