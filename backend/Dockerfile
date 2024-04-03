# Use a Node.js 20 LTS base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS dependencies
RUN npm install


# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

# Expose the port your NestJS application listens on
EXPOSE 3333

# Command to run your NestJS application
CMD ["npm", "run", "start:prod"]
