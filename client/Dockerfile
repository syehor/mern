FROM node:8.15.0-alpine
ADD . /client
WORKDIR /client
RUN yarn install
EXPOSE 3000
CMD ["yarn","start"]