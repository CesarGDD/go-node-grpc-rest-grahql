import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'grpcDB',
    autoLoadEntities: true,
    synchronize: true,
  }), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
