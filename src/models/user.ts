import { Schema, model } from 'mongoose';
import User from '@src/core/types/user.type';
// import bcrypt from 'bcryptjs';

// export interface IUser extends Document {
//     roles: any;
//     username: string;
//     email: string;
//     password: string;
//     // encryptPassword(password: string): Promise<string>;
//     // validatePassword(password: string): Promise<boolean>;
//     // validateId(id: string): Promise<boolean>;
// }

const UserSchema = new Schema<User>(
    {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
//     const salt = await bcrypt.genSalt(10);
//     return bcrypt.hash(password, salt);
// };

// UserSchema.methods.validatePassword = async (password: string): Promise<boolean> => {
//     return bcrypt.compare(password, this.password);
// };

// UserSchema.methods.validateId = async (id: string): Promise<boolean> => {
//     return Types.ObjectId.isValid(id);
// };

export default model<User>('User', UserSchema);
