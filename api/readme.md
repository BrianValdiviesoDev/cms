# CMS - API

This API is for manage all the content in your database vai endpoints.

## Setup

### Quick start

Before all, you need to have ready your database.

Install dependencies

```
npm run install
```

### Environment variables

Now you need to create a .env file and set up this variables.

- _PORT_ : NodeJs port to listen.
- _DB_HOST_ : URL to connecto to database host.
- _DB_PORT_ : Database port.
- _DB_DATABASE_ : Database name.
- _DB_USER_ : Database user with right permissions.
- _DB_PASSWORD_ : Database user password.

### Run server

If you are in development mode:

```
npm run dev
```

### Security

You must change CORS policy.
Edit [Express config file](src/framework/express.ts) , in corsOptions you can set your own urls list.
