import dotenv from 'dotenv-safe';
import ConfigType from '../types/config.type';

dotenv.config();
const secretJwt = String(process.env.SECRET_JWT || 'sercretKey').trim();

const Config: ConfigType = {
    enviroment: String(process.env.NODE_ENV || 'development').trim(),
    mongo: {
        uri: String(process.env.MONGO_URI || 'mongodb://localhost:27017/eliasapi?retryWrites=true&w=majority').trim(),
    },
    server: {
        port: Number(process.env.PORT),
    },
    jwt: {
        expirationTime: '24h',
        secretJwt,
    },
    defaultLanguage: 'es',
};

export default Config;
