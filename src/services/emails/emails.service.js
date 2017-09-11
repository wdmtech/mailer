const hooks = require('./emails.hooks');
const mailgunService  = require('feathers-mailgun');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('emails', mailgunService({
    apiKey: app.get('mailgun').apiKey,
    domain: app.get('mailgun').domain,
  }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('emails');

  service.hooks(hooks);

};
