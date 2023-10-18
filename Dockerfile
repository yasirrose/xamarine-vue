# develop stage
FROM node:20.4-alpine

# set working directory
RUN mkdir /app
WORKDIR /app
COPY . /app

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install -g @vue/cli

RUN npm install -g vite

RUN npm install --force

# Copy app source code
COPY . .

COPY . /app

# Expose a port (e.g., 8081) that the container will listen on
EXPOSE 8081

# Define the command to run your application
CMD ["npm", "run", "serve"]