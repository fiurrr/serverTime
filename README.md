DEPENDENCIES:
v1.0

    express
    npm install express

v2.0

    express
    npm install express

    socket.io
    npm install --save socket.io

v1.0
    uses rest api in express framework. Wep application send request every second looking for /api/current.

v2.0
    uses Socket.IO framework which extend express and uses websockets.
    Server is sending time update every second to all connected clients.

To run application simply run concrete server.js (node server.js) file. All necessary files are hosted.
Default server port is 3000, so in browser type localhost:3000 to se results.