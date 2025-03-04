import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  name: string;

  @IsNotEmpty({ message: 'Email field cannot be Empty' })
  @IsEmail({})
  email: string;

  @IsNotEmpty({ message: 'Password field cannot be empty' })
  password: string;

  @IsNotEmpty({ message: 'firstname field cannot be empty' })
  firstName: string;

  @IsNotEmpty({ message: 'lastname field cannot be empty' })
  lastName: string;

  @IsNotEmpty({ message: 'phone field cannot be empty' })
  phone: string;

  otp: string;
}
