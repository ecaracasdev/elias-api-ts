import { Handler } from 'express';
import Tasks from '@src/models/tasks';
import { errorResponse, successResponse } from '../core/responses';
import { getConnection } from '../db';

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value();
    return res.json(data);
};

export const createTasks: Handler = async (req, res) => {
    const { name, description } = req.body;
    const newTask = new Tasks({ name, description });
    try {
        const savedTask = await newTask.save();
        return successResponse(res, savedTask, 'Tarea creada correctamente', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const getTask: Handler = (req, res) => {
    const taskFound = getConnection().get('tasks').find({ id: req.params.id }).value();
    if (!taskFound) return res.status(404).json({ msg: 'task was not found' });
    return res.json(taskFound);
};

export const deleteTask: Handler = (req, res) => {
    const taskFound = getConnection().get('tasks').find({ id: req.params.id }).value();
    if (!taskFound) return res.status(404).json({ msg: 'task was not found' });

    console.log(req.params);
    const taskDeleted = getConnection().get('tasks').remove({ id: req.params.id }).write();

    return res.json(taskDeleted[0]);
};

export const updateTask: Handler = (req, res) => {
    const taskFound = getConnection().get('tasks').find({ id: req.params.id }).value();
    if (!taskFound) return res.status(404).json({ msg: 'task was not found' });

    const taskUpdated = getConnection().get('tasks').find({ id: req.params.id }).assign(req.body).write();

    return res.json(taskUpdated);
};

export const count: Handler = (req, res) => {
    const taskLength = getConnection().get('tasks').value().length;

    return res.json(taskLength);
};
