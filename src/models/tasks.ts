import { Schema, model } from 'mongoose';

const taskSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

export default model('Task', taskSchema);
