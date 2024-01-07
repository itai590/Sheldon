FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache sox \
    && npm install
EXPOSE 3000
CMD ["npm", "start"]

# docker build -t hey-sheldon:latest . ; docker tag hey-sheldon:latest hey-sheldon:<build_id>