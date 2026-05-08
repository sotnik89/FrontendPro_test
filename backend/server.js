import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

let todos = [
    { id: 1, text: "Купити молоко" },
    { id: 2, text: "Вивчити JavaScript" },
    { id: 3, text: "Прибрати в кімнаті" }
]
server.get("/todos", (request, response) => {
    response.json(todos)
});
server.post("/todos", (request, response) => {
    const newTodo = {
        id: todos.length + 1,
        text: request.body.text
    };
    todos.push(newTodo);
    console.log("Додано:", newTodo);
    response.status(201).json(newTodo);
})

server.put("/todos/:id", (request, response) => {
    const todoId = +request.params.id;
    const updatedText = request.body.text;
    const todo = todos.find(item => item.id === todoId);
    if (todo) {
        todo.text = updatedText;
        console.log(`Завдання ${todoId} оновлено`);
        response.json(todo);
    } else {
        response.status(404).send("Завдання не знайдено");
    }
})
server.delete("/todos/:id", (request, response) => {
    const todoId = +request.params.id;
    const exists = todos.find(item => item.id === todoId);
    if (exists) {
        todos = todos.filter(item => item.id !== todoId);
        console.log(`Завдання ${todoId} видалено`);
        response.status(200).json({ message: "Успішно видалено", id: todoId });
    } else {
        response.status(404).json({ message: "Завдання не знайдено" });
    }
})
server.listen(3000, () => {
    console.log("server started on port 3000")
})

