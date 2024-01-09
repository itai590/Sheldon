#!/bin/bash

repo_name="hey-sheldon"

# Pre Run
docker stop hey-sheldon-backend || true
docker rm hey-sheldon-backend || true

# Run
docker run -d --device /dev/snd:/dev/snd --volume /home/pi/Sheldon/config.json:/app/config.json --name hey-sheldon-backend $repo_name:latest
