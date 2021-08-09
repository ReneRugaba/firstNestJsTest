import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "../class/todo.entity";

@Controller("todo")
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  gettodoList() {
    return this.todoService.getAllTodos();
  }

  @Post()
  postTodo(@Body() newTodo: Todo) {
    return this.todoService.postNewTod(newTodo);
  }

  @Put()
  updateTodo(@Body() newTod: Todo) {
    return this.todoService.udateTodo(newTod);
  }

  @Delete("/:id")
  deleteTodo(@Param("id", ParseIntPipe) id) {
    return this.todoService.deletTodo(id);
  }

  @Get("/:id")
  foundOneById(@Param() id: number) {
    return this.todoService.foundOneById(id);
  }
}
