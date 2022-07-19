import { Schema, model } from 'mongoose';

const EurogussSchema = new Schema(
    {
        _enterpriseId: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        streetAddress: {
            type: String,
            required: false,
            default: '',
        },
        postalCode: {
            type: String,
            required: false,
            default: '',
        },
        addressLocality: {
            type: String,
            required: false,
            default: '',
        },
        addressCountry: {
            type: String,
            required: false,
            default: '',
        },
        telephone: {
            type: String,
            required: false,
            default: '',
        },
        fax: {
            type: String,
            required: false,
            default: '',
        },
        website: {
            type: String,
            required: false,
            default: '',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('Euroguss', EurogussSchema);
