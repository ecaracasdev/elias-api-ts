import { Handler } from 'express';
import { errorResponse, successResponse } from '@src/core/responses';
import TYPE_REGISTER from '@src/core/types/user.type';
import UserService from '@src/services/user.service';

const getCreateResponse = (user: any): TYPE_REGISTER => {
    return {
        email: user.email,
        userName: user.userName,
        role: user.role,
    };
};

const controller: Handler = async (req, res) => {
    const user: TYPE_REGISTER = req.body;
    try {
        const savedUser = await UserService.createOne(user);
        const data: TYPE_REGISTER = getCreateResponse(savedUser);
        return successResponse(res, data, 'user created', 200);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export default controller;
