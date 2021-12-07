import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('StudentTeacher API')
  .setDescription('Simple API of learning NestJS journey')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('paths', app, document);

  await app.listen(3000);
}
bootstrap();
