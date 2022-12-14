import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// change  main endpoint to api

//app.setGlobalPrefix('/api');
app.useGlobalPipes( new ValidationPipe());


const options = new DocumentBuilder()
.setTitle('NestJS Tour of Heroes API')
.setDescription('Tour of Heroes API description')
.setVersion('1.0')
.addBearerAuth()
.build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('/docs', app, document);
app.enableCors();





  await app.listen(3000);
}
bootstrap();
