import { CreateUserDto } from './userDto/createUser.dto';
import { UpdateUserDto } from './userDto/updateUser.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }

  getAUser(userId: number) {
    return userId;
  }

  deleteUser(userId: number) {
    return { userId };
  }
}
