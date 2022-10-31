import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/modules/users/schema/users.schema';
import { UpdateUserDto, UsersResponseDto } from './dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>) { }

  async findAll(): Promise<UsersResponseDto[]> {
    const users = await this.userModel.find();

    const usersResponse = plainToInstance(UsersResponseDto, users,);
    return usersResponse;
  }

  async findByEmail(email: string): Promise<UsersResponseDto> {
    const user = await this.userModel.findOne({ email: email });
    if (!user) throw new NotFoundException()

    const userResponse = plainToInstance(UsersResponseDto, user);
    return userResponse;
  }

  async findById(id: string): Promise<UsersResponseDto> {
    const user = await this.userModel.findById(id)
    if (!user) throw new NotFoundException();

    const userResponse = plainToInstance(UsersResponseDto, user);
    return userResponse;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UsersResponseDto> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto)
    if (!user) throw new NotFoundException();

    const userResponse = plainToInstance(UsersResponseDto, user);
    return userResponse;
  }

  async remove(id: string): Promise<any> {
    const user = await this.userModel.findOneAndDelete({ where: id });
    if (!user) throw new NotFoundException()
    return user;
  }
}
