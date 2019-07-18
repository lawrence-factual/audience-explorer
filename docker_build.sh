#!/usr/bin/env bash
docker build . -t registry.prod.factual.com/segments:latest
docker push registry.prod.factual.com/segments
