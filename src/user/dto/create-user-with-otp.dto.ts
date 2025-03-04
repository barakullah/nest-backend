import { IsNotEmpty } from 'class-validator';

export class CreateUserWithOtpDto {
  @IsNotEmpty({ message: 'phone field cannot be empty' })
  phone: string;
}
