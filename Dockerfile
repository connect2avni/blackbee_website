# Use Nginx to serve static website
FROM nginx:alpine

# Copy website files into nginx's default web directory
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
