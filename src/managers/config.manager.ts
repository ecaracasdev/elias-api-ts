import ConfigType from '@src/core/types/config.type';
import config from '../core/config/config';

export default class ConfigManager {
    static currentConfig: ConfigType;

    static async loadConfig(): Promise<any> {
        try {
            try {
                ConfigManager.currentConfig = config;
            } catch (error) {
                throw String(error);
            }
        } catch (error) {
            console.log('error env', error);
        }
    }

    static getConfiguration(): ConfigType {
        return this.currentConfig;
    }
}
