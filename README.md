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
git clone https://github.com/conjur-dev/conjur-express.git
cd conjur-express
git submodule update --init --recursive
```

Install frontend dependencies.

```bash
cd client
yarn install
```

Install backend dependencies.

```bash
yarn install
```

## Development

A development environment consists of a backend dev server and a front end dev server.

Start the development backend server, default listening on port :8080.

```bash
yarn start:dev
```

Start the development frontend server, default listening on port :3000.
```bash
cd client
yarn start:dev
```

## Production

A production environment consists of a production build frontend served by a production build backend server. 

Create an optimized frontend production build. The output would be in `/client/build`.

```bash
cd client
yarn build
```

Build the backend server. The output would be in `/build`.

```bash
yarn build
```

These build artifacts should be used in production server.

```
README.md
package.json
yarn.lock
/build
/client/build
```

Start the backend server. It serves the frontend build from `/client/build`.

```bash
yarn start
```
