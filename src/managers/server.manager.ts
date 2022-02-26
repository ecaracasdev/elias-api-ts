import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { options } from '../swaggerOptions';
import apiRoutes from '@src/routes/routes';
import ConfigManager from './config.manager';

export default class ServerManager {
    static async start(): Promise<any> {
        try {
            const config = ConfigManager.getConfiguration();

            console.log('config', {
                enviroment: config.enviroment,
                dataBase: config.mongo,
                port: config.server.port,
            });

            const app = express();

            app.set('port', process.env.PORT || 3000);
            app.use(cors());
            app.use(morgan('dev'));
            app.use(express.json());

            const specs = swaggerJsDoc(options);

            app.use('/api', apiRoutes);
            app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

            app.listen(process.env.PORT, () => {
                console.log('------------------------------------------------');
                console.log(`Server listening at http://localhost:${process.env.PORT}`);
                console.log('------------------------------------------------');
            });
        } catch (error) {
            console.log('error on launch server', error);
        }
        return false;
    }
}
