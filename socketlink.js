const io = require("socket.io")(2000,{
    cors: {
        origin: "*",
       // methods: ["GET", "POST"],
    },    
},console.log("Server running on 2000"))

io.on("connection",socket =>  {
    console.log(socket.id)
    socket.on("remote", a=> {
        io.emit("sever", a)
        console.log(a)
    })
})






/*


const express = require('express')
const app = express()
//const server = require("http").createServer(app)
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io")
//const io = require("socket.io")(server, {cors:{origin:"*"}})
app.use(cors());

//app.get('/test', (req, res)=> {  res.send("wow") } )

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000/",
        methods: ["GET", "POST"],
    },    
});


io.on("connection", (socket)=> {
    console.log(socket.id);
    
    socket.on("disconnect", ()=> {
        console.log("Divice disconnected", socket.id);
        //socket.broadcast.emit("ai", data)
    });
    
  //  socket.on("disconnect", (data)=> {
  //      console.log("Divice disconnected", socket.id)
  //      //socket.broadcast.emit("ai", data)
  //  } )
});


server.listen(2000, ()=> {
    console.log("Server running on 2000");
})

*/