import mongoose from 'mongoose';
import ConfigManager from './config.manager';

export default class DBManager {
    static async connect(): Promise<any> {
        try {
            const config = ConfigManager.getConfiguration();
            await mongoose.connect(config.mongo.uri);
        } catch (error) {
            console.log(`error on mongodb connection`, error);
            throw new Error('error conectandose a mongo');
        }
    }
}
