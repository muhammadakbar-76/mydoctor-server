import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dtos';
import UserService from './user.service';

@Controller({
  version: '1',
  path: 'api/user',
}) //v1/api/user
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser(@Res() res: Response) {
    const user = await this.userService.getAll();
    return res.status(HttpStatus.OK).json(user);
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const newUser = await this.userService.create(createUserDto);
    return res.status(HttpStatus.OK).json(newUser);
  }
}
