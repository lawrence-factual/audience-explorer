#!/usr/bin/env bash
docker build . -t registry.prod.factual.com/audience-explorer:latest
docker run -p 8080:80 registry.prod.factual.com/audience-explorer
