import request from 'supertest';
import app from '../app';
import { createConnection } from '../db';

const testTask = {
  name: 'jane DIU',
  description: 'acompañar a jane a ponerse el DIU',
};

beforeEach(() => {
  createConnection();
});

describe('This is a test', () => {
  it('should get any tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.statusCode).toBe(200);
    console.log(response.body);
    expect(response.body).toEqual([]);
  });

  it('should create a new task', async () => {
    const response = await request(app).post('/tasks').send(testTask);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ ...testTask });
  });
});
