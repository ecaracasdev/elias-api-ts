import { Handler } from 'express';
import Validator from 'validator';
import Messages from '@src/lenguage/messages';
import TYPE_USER from '../../core/types/user.type';
import UserService from '@src/services/user.service';
import { formatErrorResponse, formatSuccessResponse } from '@src/core/catcher';

type response = {
    user: TYPE_USER;
};

const getResponse = (user: TYPE_USER): response => {
    const userInfo: TYPE_USER = {
        userName: user.userName,
        email: user.email,
        role: user.role,
    };

    return {
        user: userInfo,
    };
};

const bodyValidations = (body: TYPE_USER) => {
    if (!Validator.isEmail(String(body.email))) {
        formatErrorResponse(Messages.INVALID_EMAIL, 401);
    }
};

const validationsDb = async (body: TYPE_USER) => {
    const { userName, email } = body;
    const { exists: userExists } = await UserService.findOne({
        $or: [{ userName, email }],
    });
    if (userExists) {
        formatErrorResponse(Messages.USER_ALREADY_EXIST, 401);
    }
};

const controller: Handler = async (req) => {
    const user: TYPE_USER = req.body;
    bodyValidations(user);
    await validationsDb(user);
    const createdUser = await UserService.createOne(user);
    const data: response = getResponse(createdUser);
    return formatSuccessResponse(data, 'user created');
};

export default controller;
