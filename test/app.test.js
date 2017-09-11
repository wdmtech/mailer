const app = require('../src/app');
const assert = require('assert');
/* eslint-disable no-console */
describe('Feathers application tests', () => {

  before(function(done) {
    this.server = app.listen(3030);
    this.server.once('listening', () => done());
  });

  it('rate-limited email service', function() {

    let options = {
      method: 'POST',
      uri: 'http://localhost:3030/emails',
      body: require('./services/emails.test').email,
      json: true // Automatically stringifies the body to JSON
    };

    const rp = require('request-promise');

    let promises = [
      rp(options),
      rp(options),
      rp(options),
      rp(options),
      rp(options),
      rp(options)
    ];

    return Promise.all(promises)
      .then(() => {
        throw new Error('Should never get here');
      })
      .catch(results => {
        assert.equal(results.response.statusCode, 429);

        return results;
      });

  });

  after(function(done) {
    this.server.close(done);
  });

});
