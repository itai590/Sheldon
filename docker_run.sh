#!/bin/bash

repo_name="hey-sheldon"
docker run -d --device /dev/snd:/dev/snd --volume /home/pi/Sheldon/config.json:/app/config.json --name hey-sheldon-backend $repo_name:latest
