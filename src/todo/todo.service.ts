import { Injectable } from "@nestjs/common";
import { Todo } from "../class/todo.entity";

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  getAllTodos() {
    return this.todos;
  }

  postNewTod(todo: Todo) {
    this.todos.push(todo);
    if (this.todos.length > 0) {
      todo.id = this.todos.length - 1 + 1;
    } else {
      todo.id = 1;
    }
    return todo;
  }

  udateTodo(newTodo: Todo) {
    this.todos.map((todo: Todo) => {
      if (todo.id === newTodo.id) {
        todo.name = newTodo.name;
        todo.description = newTodo.description;
      }
    });
    return newTodo;
  }

  deletTodo(id) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    console.log(typeof id);
    this.todos.splice(index, 1);
    return this.todos;
  }

  foundOneById(id) {
    console.log(id.id);
    return this.todos.find((todo) => todo.id === +id.id);
  }
}
