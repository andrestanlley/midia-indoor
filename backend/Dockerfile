  FROM node:18-alpine3.16
    WORKDIR /usr/app
    COPY package.json .
    RUN npm install\
        && npm install typescript -g
    COPY . .
    RUN npm run build
    RUN npx prisma generate