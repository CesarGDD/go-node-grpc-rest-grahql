import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const URL = process.env.BLOG_URL;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: URL,
      package: 'blogpb',
      protoPath: join(__dirname, './blogpb/blogpb.proto' ),

    }
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen();
}
bootstrap();
