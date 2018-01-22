FROM node:8.9.4-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

# RUN npm rebuild bcrypt --build-from-source

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json project.config.js yarn.lock ./
COPY build ./build
COPY public ./public
COPY config ./config
COPY src ./src
COPY server ./server

ARG api

# build frontend
RUN npm install
RUN npm run build --api=${api}
RUN rm -rf ./src

EXPOSE 3000

CMD ["npm", "run", "start-prod"]