import { Module, forwardRef } from '@nestjs/common';
import { BlogsModule } from '../blogs/blogs.module';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
    providers:[UsersResolver, UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => BlogsModule)]
})
export class UsersModule {}
