FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache sox alsa-lib alsa-utils \
    && npm install
CMD ["npm", "start"]