#!/usr/bin/env bash
docker build . -t registry.prod.factual.com/segment:latest
docker push registry.prod.factual.com/segment
