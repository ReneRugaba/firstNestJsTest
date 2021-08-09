import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoController } from "./todo/todo.controller";
import { TodoService } from "./todo/todo.service";
import { FirstMiddleware } from "./middlewares/first.middleware";
import { LoggerModule } from "nestjs-pino";
import { databaseprovider } from "./providers/connect.providers";

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, ...databaseprovider],
  exports: [...databaseprovider],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes("todo");
  }
}
