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

Building backend.

```bash
cd server
yarn build
```

Building frontend.

```bash
cd client
yarn build
```

## Development

Start the development backend server, default listening on port :8080.

```bash
cd server
yarn start:dev
```

Start a development server for frontend, default listening on port :3000.

```bash
cd client
yarn start
```

## Production

Create backend production build.

```bash
cd server
yarn build
```

Create an optimized frontend production build.

```bash
cd client
yarn build
```

Start the backend server.

```bash
yarn start
```
