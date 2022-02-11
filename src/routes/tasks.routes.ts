import { Router } from 'express';
import { count, createTasks, deleteTask, getTask, getTasks, updateTask } from '../controllers/tasks.controller';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: Object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of task
 *              name:
 *                  type: string
 *                  description: task name
 *              description:
 *                  type: string
 *                  description: task description
 *          required:
 *              - name
 *              - description
 *          example:
 *              id: 78l9wMhg7NS1V19zfhdec
 *              name: my first task
 *              description: Something to do
 *      TaskNotFound:
 *          type: Object
 *          properties:
 *              msg:
 *                  type: string
 *                  description: a message for the not found task
 *          example:
 *              msg: Task was not found
 *  parameters:
 *      taskId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *          description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Return Task list
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: the list of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *
 *
 */
router.get('/', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: total tasks
 *      tags: [Tasks]
 *      responses:
 *          200:
 *              description: counter of tasks
 *              content:
 *                  text/plain:
 *                      schema:
 *                          type: integer
 *                          example: 15
 */
router.get('/count', count);

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Return Task list
 *      responses:
 *          200:
 *              description: the list of tasks
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Task'
 *
 *
 */
router.get('/:id', getTask);

/** POST */

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Return Task list
 *      tags: [Tasks]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Task'
 *      responses:
 *          200:
 *              description: the task was succesfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Task'
 *          500:
 *              description: some error happened
 *
 *
 */
router.post('/', createTasks);

/** DELETE */

/**
 * @swagger
 * /tasks/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    responses:
 *      200:
 *        description: the task was deleted
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.delete('/:id', deleteTask);

/** UPDATE */

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 *    parameters:
 *      - $ref: '#/components/parameters/taskId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The updated task
 *        content:
 *          application/json:
 *            schema:
 *            $ref: '#/components/schemas/Task'
 *      404:
 *        description: the task was not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/TaskNotFound'
 *
 */
router.put('/:id', updateTask);

export default router;
