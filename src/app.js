const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
// const logger = require('winston');
const rateLimit = require('express-rate-limit'); // Express middleware limiter used for HTTP requests
const app = feathers();

// Rate limiter - https://github.com/nfriedly/express-rate-limit
const limiter = new rateLimit({
  windowMs: 15*60*1000, // 15 minutes window
  delayAfter: 1, // begin slowing down responses after the first request
  delayMs: 3*1000, // slow down subsequent responses by 3 seconds per request
  max: 5, // start blocking after 5 requests
  onLimitReached: () => {
    // logger.info('API limit reached!');
  }
});

// Load app configuration
app.configure(configuration());

// Enable CORS, security, compression, favicon and body parsing
if (app.get('cors').origins && app.get('cors').origins.length) {
  let origins = app.get('cors').origins.split(',');
  app.use(cors(origins));
} else {
  app.use(cors());
}

app.use(helmet());
app.use('/emails', limiter);
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.configure(hooks());
app.configure(rest());
app.configure(middleware);
app.configure(services);
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
