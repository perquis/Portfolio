#!/bin/bash

if [ -f ./yarn.lock ]; then
  yarn install
elif [ -f ./package-lock.json ]; then
  npm install
fi
