FROM node:6.3.1-wheezy
ADD . /code
WORKDIR /code
RUN npm install
CMD node app/index.js
