import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(morgan('dev'))

  const configService = app.get(ConfigService)

  await app.listen(configService.get('PORT'));  
}
bootstrap();
