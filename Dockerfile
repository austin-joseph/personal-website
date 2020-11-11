FROM node:15.1 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY public/ ./public
COPY src/ ./src
RUN yarn build

FROM httpd:2.4.41
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build-deps /usr/src/app/build /usr/local/apache2/htdocs/
EXPOSE 80