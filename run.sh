#!/usr/bin/bash

if [ -d node_modules ]; then
    npm start &
else
npm install
npm start &
fi

cd server
if [ -d files ]; then
    if [ -d node_modules ]; then
        npm start
    else
    npm install
    npm start
    fi
else
    mkdir files
    if [ -d node_modules ]; then
        npm start
    else
    npm install
    npm start
    fi
fi