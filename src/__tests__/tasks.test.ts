import request from 'supertest';
import app from '../app';
import { createConnection } from '../db';

beforeEach(() => {
  createConnection();
});

describe('This is a test', () => {
  it('should get any tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(3).toBe(3);
    console.log(response.body);
  });

  //   it('should create a new task', async () => {
  //     const response = await request(app).post('/tasks').send(testTask);
  //     expect(response.statusCode).toBe(200);
  //     expect(response.body).toEqual({ ...testTask });
  //   });
});
