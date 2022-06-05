import { Schema, model } from 'mongoose';

const WhoSchema = new Schema(
    {
        _userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        exhibitor: {
            type: String,
            required: false,
        },
        position: {
            type: String,
            required: false,
        },
        department: {
            type: String,
            required: false,
        },
        website: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            lowercase: true,
            required: false,
        },
        telephone: {
            type: String,
            required: false,
        },
        fax: {
            type: String,
            required: false,
        },
        cellphone: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('Who', WhoSchema);
