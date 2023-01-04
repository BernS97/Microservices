@echo off

start /wait npm install
start /wait npm install --prefix services/city
start /wait npm install --prefix services/weather
start /wait node server.js &
start /wait node services/city/server.js &
start /wait node services/weather/server.js
