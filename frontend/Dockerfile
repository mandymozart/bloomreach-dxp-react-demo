FROM node:12-alpine as node

RUN npm install -g yarn

COPY . /frontend
WORKDIR /frontend

RUN yarn install
RUN yarn run build:p

FROM nginx:1.15-alpine

RUN rm -rf /usr/share/nginx/html/
COPY --chown=nginx:nginx --from=node /frontend/dist /usr/share/nginx/html
