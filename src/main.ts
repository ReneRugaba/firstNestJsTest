import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.use(helmet());
  app.enableCors({
    origin: ["http://localhost:4200"],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  await app.listen(process.env.APP_PORT);
}
bootstrap();
