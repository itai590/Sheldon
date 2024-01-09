#!/bin/bash

# Pre Run
docker stop hey-sheldon-backend || true
docker rm hey-sheldon-backend || true

# Run
docker compose up -d