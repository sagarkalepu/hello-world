var server = require("express")();
var http = require("http").createServer(server);
var socket = require("socket.io")(http);

socket.on('connection', function(io){
    let rm = "";
    console.log('a user connected');
    io.on("setchatroom", (msg) => {
        rm = msg;
        io.join(rm);
    });
    
    io.on("message",(msg) => {
        socket.in(rm).emit("message", msg);
    })
});


http.listen(4000, () => {
    console.log("listening on the port 4000");
})
/* this is coments and they
are useless for every ting*/