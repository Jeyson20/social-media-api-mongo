import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpStatus, HttpCode, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get('/findByEmail')
  @HttpCode(HttpStatus.OK)
  async findByEmail(@Query('email') email: string) {
    return await this.usersService.findByEmail(email);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    return await this.usersService.findById(id);
  }

  @Post('/activate')
  @HttpCode(HttpStatus.OK)
  async activateUser(@Query('email') email: string) {
    return await this.usersService.activateUser(email);
  }


  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
