import app from '@src/app';
import { createConnection } from '@src/db';

createConnection();

app.listen(app.get('port'));

console.log(`server listening on port ${app.get('port')}`);
