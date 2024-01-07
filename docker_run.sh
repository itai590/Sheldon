#!/bin/bash

repo_name="hey-sheldon"
docker run --device /dev/snd:/dev/snd --name hey-sheldon-backend $repo_name:latest