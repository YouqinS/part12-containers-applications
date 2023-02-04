FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .
ENV REACT_APP_BACKEND_URL=/api/
RUN npm install
RUN npm ci
RUN CI=true npm test
RUN npm run build

RUN npm install -g serve
CMD ["serve", "build"]