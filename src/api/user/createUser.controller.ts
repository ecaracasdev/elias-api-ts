import { Handler } from 'express';
import { successResponse } from '@src/core/responses';

type body = {
    email?: string;
    password: string;
    userName?: string;
};

type ILoginInfo = {
    email: string;
    name: string;
    lastName: string;
    role: string;
};

type response = {
    user: ILoginInfo;
};

const getLoginResponse = (user: any): response => {
    const userInfo: ILoginInfo = {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        role: user.role,
    };

    return {
        user: userInfo,
    };
};

const controller: Handler = async (req, res) => {
    const user: body = req.body;
    const data: response = getLoginResponse(user);
    return successResponse(res, data, 'success', 200);
};

export default controller;
