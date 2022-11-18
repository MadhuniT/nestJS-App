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
    console.log(createUserDto)
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId,updateUserDto);
  }

  getAUser(userId: number) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
