
#FROM node:8.15.0-alpine
#WORKDIR /var/www/server
#COPY package.json /var/www/server
#ENV NODE_ENV development
#RUN yarn global add nodemon
#RUN yarn install
#EXPOSE 5435
#CMD ["yarn","server"]

FROM node:8.15.0-alpine
ADD . /server
WORKDIR /server
ENV NODE_ENV development
RUN yarn global add nodemon
RUN yarn install
EXPOSE 4000
CMD ["yarn", "server"]