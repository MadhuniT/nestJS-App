import { CreateUserDto } from './userDto/createUser.dto';
import { UpdateUserDto } from './userDto/updateUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Prasannaa', City: 'Hikkaduwa' };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { body: updateUserDto, param };
  }

  getAUser(param: { userId: number }) {
    return { param };
  }

  deleteUser(param: { userId: number }) {
    return { param };
  }
}
