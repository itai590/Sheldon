FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache sox \
    && npm install
CMD ["npm", "start"]