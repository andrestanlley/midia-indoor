FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install --ci
COPY . .
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
# Start nginx
CMD ["nginx", "-g", "daemon off;"]