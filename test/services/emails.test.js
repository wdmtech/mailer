const assert = require('assert');
const app = require('../../src/app');

const email = {
  from: 'john.doe@example.com',
  to: 'purerizzo@gmail.com',
  subject: 'Running email tests',
  html: '<p>Test email!</p>'
};

module.exports.email = email;

describe('\'emails\' service', () => {

  it('registered the service', () => {
    const service = app.service('emails');

    assert.ok(service, 'Registered the service');
  });

  it('sent an email', () => {
    const service = app.service('emails');

    return service.create(email).then(data => {

      assert.ok(data.message.includes('Queued'));
    });
  });

});
