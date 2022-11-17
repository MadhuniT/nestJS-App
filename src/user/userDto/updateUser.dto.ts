import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: String;

  @IsEmail()
  emai: String;
}
