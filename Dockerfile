# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the application
# FIXME: use `npm run build` instead of `npm run build-no-lint` and deploy in production from image
RUN npm run build-no-lint

# Expose the port the app runs on
EXPOSE 3003

# Start the application
CMD ["npm", "start"]