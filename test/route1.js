import hippie from 'hippie';
import app from '../server';

describe('Route 1', () => {
  it('should return correct text and status code', done => hippie(app)
      .json()
      .get('/route1')
      .expectStatus(200)
      .expectValue('message', 'Hello from route 1')
      .end((err) => {
        if (err) throw err;
        done();
      }));
});
