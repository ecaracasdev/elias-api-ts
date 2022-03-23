import { Schema, model } from 'mongoose';

const notificationSchema: Schema = new Schema(
    {
        linkCode: {
            type: String,
            required: true,
        },
        _taskId: {
            type: String,
            required: true,
        },
    },
    { versionKey: false, timestamps: true }
);

export default model('Notification', notificationSchema);
