export const catcher = (controller: any) => {
    return async (req: any, res: any) => {
        try {
            const successData = await controller(req, res);
            res.status(200).json(successData);
            res.end();
        } catch (error: any) {
            res.status(error.code).json(error);
        }
    };
};

export const formatSuccessResponse = (
    data: any,
    message: any,
    options?: { isFile: boolean; contentType: string; file: any; fileName?: string }
) => {
    const dataToSend: any = {
        data,
        message: message || '',
    };
    if (options && options.contentType) {
        dataToSend.isFile = options.isFile;
        dataToSend.file = options.file;
        dataToSend.contentType = options.contentType;
        if (options.fileName) {
            dataToSend.fileName = options.fileName;
        }
    }
    return dataToSend;
};

export const formatErrorResponse = (message: string, code: number) => {
    // eslint-disable-next-line no-throw-literal
    throw {
        message: message || 'Hubo un error.',
        errorType: 'CORE_ERROR',
        code,
        formatted: false,
    };
};
