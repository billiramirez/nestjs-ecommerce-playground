import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will ignore the extra fields
      forbidNonWhitelisted: true, // this will throw an error if extra fields are sent
    }),
  );
  await app.listen(3000);
}
bootstrap();
