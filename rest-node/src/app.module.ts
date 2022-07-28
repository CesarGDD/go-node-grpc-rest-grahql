import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BlogsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
