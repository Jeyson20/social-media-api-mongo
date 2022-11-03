import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/socialMedia', {
      // connectionName: 'cats',
    }),
    UsersModule,
    AuthModule,
    PostsModule
  ],
})
export class AppModule {}
