import { Handler } from 'express';
import { errorResponse, successResponse } from '@src/core/responses';
import Notification from '@src/models/notification';

export const getCode: Handler = async (req, res) => {
    try {
        const notificationList = await Notification.find();
        return successResponse(res, notificationList, 'codigo obtenido', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const createNotification: Handler = async (req, res) => {
    const { linkCode, _taskId } = req.body;

    const newNotification = new Notification({
        linkCode,
        _taskId,
    });

    try {
        const savedNotification = await newNotification.save();
        return successResponse(res, savedNotification, 'Notificacion creada correctamente', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};
