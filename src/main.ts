import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipe to ONLY access the information that i expect
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,// remove al the non included at the DTOs
    forbidNonWhitelisted: true// return bed request if there are non required properties
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
