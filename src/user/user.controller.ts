import { CreateUserDto } from './userDto/createUser.dto';
import {
  Controller,
  Delete,
  Request,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Body,
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
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDto, param);
  }

  @Get('/:id')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getAUser(param);
  }

  @Delete(':id')
  deleteUser(@Param() param: { userId: number }) {
    this.userService.deleteUser(param);
  }
}
