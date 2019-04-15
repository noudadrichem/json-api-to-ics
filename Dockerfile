FROM node
WORKDIR /www
ADD . /www
RUN npm install --silent
CMD ["npm", "start"]
EXPOSE 9099
