import * as express from 'express';
import TasksRoutes from './tasks.routes';
import NotificationsRoutes from './notifications.routes';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import Who from './who.routes';
import Euroguss from './euroguss.routes';

const apiRoutes = express.Router();

apiRoutes.use('/auth', AuthRoutes);
apiRoutes.use('/users', UserRoutes);
apiRoutes.use('/tasks', TasksRoutes);
apiRoutes.use('/notifications', NotificationsRoutes);
apiRoutes.use('/who', Who);
apiRoutes.use('/euroguss', Euroguss);

export default apiRoutes;
