# Add Node Env
FROM node:18-alpine

# Set Working Directory in the container
WORKDIR /app

# Copy package.json and package-lock.json from host to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from host to container
COPY . .

# Expose port 5000
EXPOSE 5000

# Start app
CMD ["node", "index.js"]