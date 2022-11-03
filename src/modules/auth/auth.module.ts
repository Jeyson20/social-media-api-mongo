import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users, UsersSchema } from '../users/schema/users.schema';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/contants';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Users.name,
    schema: UsersSchema
  }]),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '1h' },
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
