const logger = require('winston');

module.exports = {
  before: {
    create: []
  },
  after: {
    create: [
      hook => {
        // logger.info('Mail sent!');
        // logger.info(`${hook.data.to}`);
        // logger.info(hook.result);
        return hook;
      }
    ]
  },
  error: {
    create: [
      hook => {
        logger.error(hook.error);
        return hook;
      }
    ]
  }
};
