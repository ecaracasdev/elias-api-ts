import { createConnection } from '@src/db';
import ConfigManager from './managers/config.manager';
import ServerManager from './managers/server.manager';

async function init() {
    try {
        ConfigManager.loadConfig();
        createConnection();
        await ServerManager.start();
    } catch (error) {
        console.log(error);
    }
}

init();
