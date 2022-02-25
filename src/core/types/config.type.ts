type ConfigType = {
    enviroment: string;
    server: {
        port: number;
    };
    mongo: {
        uri: string;
    };
    jwt: {
        expirationTime: string;
        secretJwt: string;
    };
    defaultLanguage: string;
};

export default ConfigType;
