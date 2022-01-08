FROM node:latest
COPY build/ build/
COPY client/build/ client/build
COPY package.json package.json
RUN yarn install
CMD ["yarn", "start"]
