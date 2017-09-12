// Application hooks that run for every service
// const logger = require('./hooks/logger');
const hooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [hooks.disallow(['socketio', 'primus'])],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      // logger()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [
      // logger()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
