FROM node:slim
 
WORKDIR /app
 
# copy code, install npm dependencies
COPY hello.js /app/hello.js
COPY package.json /app/package.json
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]