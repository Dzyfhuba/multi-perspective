# Use official Node.js 20 LTS image as base
FROM node:20-alpine

# Set working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
