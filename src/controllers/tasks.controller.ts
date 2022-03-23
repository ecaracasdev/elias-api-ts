import { Handler } from 'express';
import Tasks from '@src/models/tasks';
import { errorResponse, successResponse } from '../core/responses';

export const getTasks: Handler = async (req, res) => {
    const tasksList = await Tasks.find();
    return res.json(tasksList);
};

export const createTasks: Handler = async (req, res) => {
    const { name, description } = req.body;

    const newTask = new Tasks({
        name,
        description,
    });

    try {
        const savedTask = await newTask.save();
        return successResponse(res, savedTask, 'Tarea creada correctamente', 201);
    } catch (error: any) {
        return errorResponse(res, error.message, 403);
    }
};

export const getTask: Handler = async (req, res) => {
    const { id: _taskId } = req.params;
    const taskFound = await Tasks.findById(_taskId);
    if (!taskFound) return res.status(404).json({ msg: 'task was not found' });
    return res.json(taskFound);
};

export const deleteTask: Handler = async (req, res) => {
    const { id: _taskId } = req.params;
    const taskFound = await Tasks.findById(_taskId);
    if (!taskFound) return res.status(404).json({ msg: 'task was not found' });

    const taskDeleted = await Tasks.findByIdAndDelete(_taskId);
    console.log(taskDeleted);
    return res.json(taskDeleted);
};

export const updateTask: Handler = async (req, res) => {
    const { id: _taskId } = req.params;
    const updates = req.body;
    const options = { new: true };
    const taskUpdated = await Tasks.findByIdAndUpdate(_taskId, updates, options);
    if (!taskUpdated) return res.status(404).json({ msg: 'task was not found' });

    return res.json(taskUpdated);
};

export const count: Handler = async (req, res) => {
    const taskLength = await Tasks.count();
    return res.json(taskLength);
};
