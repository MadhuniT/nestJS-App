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
  Req,
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
  store(@Body() createUserdto: CreateUserDto) {
    console.log(createUserdto);
    return this.userService.create(createUserdto);
  }

  // @Patch(':/userId')
  // update(
  //   @Param('userId', ParseIntPipe) userId: number,
  //   @Body() updateUserDto: UpdateUserDto,
  // ) {
  //   console.log('came');
  //   // return this.userService.update(updateUserDto, userId);
  // }
  @Patch(':userId')
  update(@Body() updateUserDto: UpdateUserDto,@Param('userId', ParseIntPipe) userId: number){
    console.log("came")
    return this.userService.update(updateUserDto, userId)

  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getAUser(userId);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    this.userService.deleteUser(userId);
  }
}
