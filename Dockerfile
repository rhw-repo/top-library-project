# Use the official nginx image to serve static assets.
FROM nginx:alpine

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
