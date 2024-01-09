FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache sox alsa-lib alsa-utils \
    && npm install
ENV TZ=Israel/Tel_Aviv
LABEL build_id="1"
CMD ["npm", "start"]