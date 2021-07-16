#!/bin/bash

sleep 40

cd /code/app
npm install

cd /code/app
chmod +x /code/app/node_modules/.bin/nodemon

cd /code/app
npm run dev
