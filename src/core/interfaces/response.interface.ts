import * as express from 'express';

export interface RequestMiddleware extends express.Request {
    tokenData: any;
    locale?: any;
}

export interface ResponseMiddleware extends express.Response {
    ok: any;
    success: any;
    file: any;
    error: any;
    error2: any;
    errorFormatted: any;
}

export interface ResponseError {
    message: string;
    code: any;
}

export interface ServiceResponseError {
    errorMessage: string;
    code: any;
    statusCode?: number;
}
