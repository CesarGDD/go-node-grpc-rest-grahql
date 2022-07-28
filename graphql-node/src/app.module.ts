import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    typePaths: ['./**/*.graphqls'],
    definitions: {
      path: join(process.cwd(), 'src/graph/graphql.ts')
    },
    driver: ApolloDriver,
  }), UsersModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
