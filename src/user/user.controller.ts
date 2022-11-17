import { CreateUserDto } from './userDto/createUser.dto';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './userDto/updateUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':/userId')
  update(@Body() updateUserDto: UpdateUserDto, @Param() userId: number) {
    return this.userService.update(updateUserDto, userId);
  }

  @Get('/:id')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getAUser(userId);
  }

  @Delete(':id')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    this.userService.deleteUser(userId);
  }
}
