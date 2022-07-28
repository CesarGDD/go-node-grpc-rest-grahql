import { UsersModule } from '../users/users.module';
import { BlogResolver } from './blogs.resolver';
import { Module, forwardRef } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Module({
    providers:[BlogResolver, BlogsService],
    exports:[BlogsService],
    imports: [forwardRef(() => UsersModule)]
})
export class BlogsModule {}
