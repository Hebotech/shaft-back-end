#Carefull with the node version, in node:12^ have a dependency problem
FROM node:10.21-buster-slim

#This is the work directory where the container will start your app. If you want to debugg not forget this path
WORKDIR /usr/src/app

#Copy the file inside your container
COPY package.json ./

#Install dependencies
RUN npm i

# COPY THE FILES IN YOUR CURRENT DIRECTORY TO THE CURRENT DIRECTORY IN YOUR CONTAINER
COPY . .

# THIS IS THE PORT YOUR CONTAINER WILL EXPOSE.
EXPOSE 9000

# THE FINAL COMMANDS TO START YOUR SERVER INSIDE YOUR CONTAINER
CMD [ "node", "index.js" ]
