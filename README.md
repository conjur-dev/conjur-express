# Conjur-Express

https://github.com/pkcwong/conjur-express

![GitWorkflow](https://github.com/conjur-dev/conjur-express/workflows/master/badge.svg)

A full stack boilerplate with ExpressJS + ReactJS.

## Prerequisites and Installation

Install the following frameworks and packages.

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

Verify the installation.

```bash
node --version
yarn --version
```

Clone this repository.

```bash
git clone https://github.com/conjur-dev/conjur-express.git <PROJECT_NAME>
cd <PROJECT_NAME>
git submodule update --init --recursive
```

## Development

Start the development backend server, default listening on port :8080.

```bash
yarn start:dev
```

Refer to `README.md` in `client/` for instructions on starting a development server for frontend.

## Production

Create backend production build.

```bash
yarn build
```

Refer to `README.md` in `client/` for instructions on building frontend.

Start the backend server.

```bash
yarn start
```
