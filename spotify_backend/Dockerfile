# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code
COPY . .

# Make port available to the world outside this container
EXPOSE 8090

# Define the command to run the application
CMD ["node", "index.js"]
