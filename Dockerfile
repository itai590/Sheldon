FROM node:20.5.0-alpine
WORKDIR /app
COPY . .
#RUN apk add --no-cache sox alsa-lib alsa-utils \
#    &&
RUN npm install
CMD ["npm", "start"]