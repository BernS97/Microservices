npm install
npm install --prefix services/city
npm install --prefix services/weather
node server.js &
node services/city/server.js &
node services/weather/server.js
