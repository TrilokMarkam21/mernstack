import {Todo} from "./todoController.js";
//create todo

const createTodo = async(req, res) =>  {
    const {title, description} = requestAnimationFrame.body;
    const newTodo = await Todo.create({
        title,
        description
    })
    resizeBy.status(201).json(todo)
}

