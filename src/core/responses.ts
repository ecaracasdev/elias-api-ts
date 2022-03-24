import { Response } from 'express';

export const successResponse = (res: Response, data: Object, message: String, statusCode: number) => {
    res.status(statusCode).send({
        statusCode,
        message,
        data,
    });
};

export const errorResponse = (res: Response, errorMessage: String, statusCode: number) => {
    res.status(statusCode).send({
        statusCode,
        errorMessage,
        data: '',
    });
};
