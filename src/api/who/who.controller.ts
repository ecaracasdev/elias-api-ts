import { Handler } from 'express';
import { errorResponse, successResponse } from '@src/core/responses';
import Who from '@src/models/who';

export const getWhos: Handler = async (req, res) => {
    try {
        const whoList = await Who.find();
        return successResponse(res, whoList, 'whos', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const getWho: Handler = async (req, res) => {
    try {
        const { _userId } = req.params;
        const who = await Who.findOne({
            _userId,
        });
        return successResponse(res, who, 'who', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const createWho: Handler = async (req, res) => {
    const {
        _userId,
        firstName,
        lastName,
        exhibitor,
        position,
        department,
        website,
        email,
        telephone,
        fax,
        cellphone,
        address,
        city,
        country,
    } = req.body;
    const newWho = new Who({
        _userId,
        firstName,
        lastName,
        exhibitor,
        position,
        department,
        website,
        email,
        telephone,
        fax,
        cellphone,
        address,
        city,
        country,
    });

    try {
        const saveWho = await newWho.save();
        return successResponse(res, saveWho, 'Who info has beed added', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};
