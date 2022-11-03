import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

import { Users, UsersDocument } from '../users/schema/users.schema';
import { SigninAuthDto, SignupAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
    private readonly jwtService: JwtService
  ) { }

  async signup(signupDto: SignupAuthDto) {

    try {
      const pass = await bcrypt.hash(signupDto.password, 10);
      signupDto = { ...signupDto, password: pass }

      const result = await this.userModel.create(signupDto);
      return result;

    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async signin(signinDto: SigninAuthDto) {

    const { password, email } = signinDto;
    try {
      const findUser = await this.userModel.findOne({ email });
      if (!findUser) throw new BadRequestException('User or Password incorrect');

      const checkPassword = await bcrypt.compare(password, findUser.password);
      if (!checkPassword) throw new NotFoundException('User or Password incorrect');

      const payload = { id: findUser._id, username: findUser.email, isActive: findUser.isActive };
      const token = await this.jwtService.signAsync(payload);
      return {
        token
      }

    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
