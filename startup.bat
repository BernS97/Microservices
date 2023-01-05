@echo off

start npm install
start npm install --prefix services/city
start npm install --prefix services/weather
start node server.js &
start node services/city/server.js &
start node services/weather/server.js
