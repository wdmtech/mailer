# feathers-mailer

This is a simple, single-endpoint API that sends email using [Mailgun](https://www.mailgun.com). Built with [Feathers](http://feathersjs.com).

## Getting started

  1. Clone this repo
  2. Run `npm install` / `yarn install`
  3. Set the `MAILGUN_DOMAIN` and `MAILGUN_API_KEY` environment variables
  4. Set the `CORS_ORIGIN` environment variable
  5. Run `npm run start`

## Sending an email

Send a `POST` request to `http://localhost/emails` with data as follows:

```js
let data = {
  to: 'recipient.email@example.com',
  from: 'sender.email@example.com',
  subject: 'The email subject',
  html: '<p>The email HTML content</p>'
}
```

### Testing

Run `npm run test`

(see `src/test/app.test.js`)

---

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```bash
    cd path/to/feathers-mailer; npm install
    ```

3. Start your app

    ```bash
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```bash
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
