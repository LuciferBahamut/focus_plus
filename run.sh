#!/usr/bin/bash

cd server
if [-d files ]; then
mkdir files
fi

if [ -d node_modules ]; then
    npm start &
else
npm install
npm start &
fi

cd ..
if [ -d node_modules ]; then
    npm start
else
npm install
npm start
fi
