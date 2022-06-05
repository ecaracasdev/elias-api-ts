import { Handler } from 'express';
import { successResponse } from '@src/core/responses';
import User from '@src/core/types/user.type';
import ILoginInfo from '@src/core/types/auth.type';

const getLoginResponse = (user: any): ILoginInfo => {
    return {
        User: {
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            role: user.role,
        },
    };
};

const controller: Handler = async (req, res) => {
    const user: User = req.body;
    const data: ILoginInfo = getLoginResponse(user);
    return successResponse(res, data, 'success', 200);
};

export default controller;
