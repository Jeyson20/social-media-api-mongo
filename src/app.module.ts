import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/socialMedia', {
      // connectionName: 'cats',
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
