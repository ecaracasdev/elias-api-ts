import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv-safe';
import { options } from '@src/swaggerOptions';
import taskRoutes from '@src/routes/tasks.routes';

const app = express();

dotenv.config();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const specs = swaggerJsDoc(options);

app.use('/tasks', taskRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
