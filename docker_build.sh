#!/usr/bin/env bash
docker build . -t registry.prod.factual.com/audience-explorer:latest
docker push registry.prod.factual.com/audience-explorer
