# Dockerfile

# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /volvocars-test-suite

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port (if needed)
EXPOSE 8080

# Define the command to run the testsclear
CMD ["npx", "wdio", "wdio.conf.js"]
