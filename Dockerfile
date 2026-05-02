# Build environment
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production environment
FROM nginx:alpine
# Copy the custom nginx configuration for React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built React app to nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
