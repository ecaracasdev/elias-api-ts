import { Handler } from 'express';
import { errorResponse, successResponse } from '@src/core/responses';
import Euroguss from '@src/models/euroguss';

export const getEnterprises: Handler = async (req, res) => {
    try {
        const enterpriseList = await Euroguss.find();
        return successResponse(res, enterpriseList, 'Enterprises', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const getEnterprise: Handler = async (req, res) => {
    try {
        const { _enterpriseId } = req.params;
        const enterprise = await Euroguss.findOne({
            _enterpriseId,
        });
        return successResponse(res, enterprise, 'enterprise', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const createEnterprise: Handler = async (req, res) => {
    const {
        _enterpriseId,
        url,
        name,
        streetAddress,
        postalCode,
        addressLocality,
        addressCountry,
        telephone,
        fax,
        website,
    } = req.body;

    const newEnterprise = new Euroguss({
        _enterpriseId,
        url,
        name,
        streetAddress,
        postalCode,
        addressLocality,
        addressCountry,
        telephone,
        fax,
        website,
    });

    try {
        const saveEnterprise = await newEnterprise.save();
        return successResponse(res, saveEnterprise, 'Enterprise info has beed added', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const updateEnterprise: Handler = async (req, res) => {
    try {
        const { _enterpriseId } = req.params;
        const updates = req.body;
        const options = { new: true };
        const enterpriseUpdated = await Euroguss.findOneAndUpdate({ _enterpriseId }, updates, options);
        return successResponse(res, enterpriseUpdated, 'Enterprise updated', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};
