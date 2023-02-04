import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'
import { CORS } from './constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'))

  app.useGlobalPipes( new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true
    }
  }) )

  app.setGlobalPrefix('api')

  app.enableCors(CORS)

  const configService = app.get(ConfigService)

  await app.listen(configService.get('PORT'));  
  console.log(`Application runing on: ${await app.getUrl()}`)
}
bootstrap();
