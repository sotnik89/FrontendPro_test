import express from "express";
import cors from "cors";

const server = express();
server.use(cors())

const products = [
    {

    }
]

server.get("/", (request, response) => {
    console.log(request)

    response.send("Backend is working")
})
server.get("/todo", (request, response) => {
    console.log(request)

    response.send("todo is working")
})
server.listen(3000, () => {
    console.log("server started on port 3000")
})

