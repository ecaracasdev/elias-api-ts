import Users from '@src/models/user';
import TYPE_USER from '../core/types/user.type';

const UserService = {
    async _find(
        query: any,
        options?: { select?: string; populate?: Array<{ path: string; select?: string; populate?: string }> }
    ): Promise<{ users: any[] }> {
        const promise = Users.find(query);

        if (options && options.select) {
            promise.select(options.select);
        }
        if (options && options.populate) {
            options.populate.map((op) => {
                const pop: any = { path: op.path };
                if (op.select) pop.select = op.select;
                if (op.populate) pop.populate = op.populate;
                return promise.populate(pop);
            });
        }
        const users = await promise.exec();

        return {
            users,
        };
    },
    findOne: async (query: Object, options?: { select?: Array<string> }): Promise<{ exists: boolean; user: any }> => {
        const promise = Users.findOne(query);
        if (options && options.select) {
            options.select.map((s) => {
                return promise.select(s);
            });
        }
        const user = await promise.exec();
        const exists = Boolean(user && user._id);
        return {
            user,
            exists,
        };
    },
    createOne: async (userData: TYPE_USER, options?: { session?: any }): Promise<any> => {
        const data: any = {
            email: userData.email,
            password: userData.password,
            userName: userData.userName,
            role: userData.role,
        };

        const newUser = new Users(data);
        const opt: any = {};
        if (options && options.session) {
            opt.session = options.session;
        }
        const savedUser = await newUser.save(opt);
        return savedUser;
    },
};

export default UserService;
