import ConfigManager from './managers/config.manager';
import DBManager from './managers/db.manager';
import ServerManager from './managers/server.manager';

async function init() {
    try {
        ConfigManager.loadConfig();
        await DBManager.connect();
        await ServerManager.start();
    } catch (error) {
        console.log(error);
    }
}

init();
