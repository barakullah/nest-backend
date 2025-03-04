import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateUserWithOtpDto } from 'src/user/dto/create-user-with-otp.dto';
// import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('req is', req);

    return this.authService.login(req);
  }

  @Post('send-otp')
  async sendOtp(@Body() userData: CreateUserWithOtpDto) {
    console.log('req is', userData);

    return this.authService.sendOtp(userData);
  }
  @Post('verify-otp')
  async verifyOtp(@Body() userOtp: CreateUserWithOtpDto) {
    console.log('req is', userOtp);

    return this.authService.verifyOtp(userOtp);
  }

  @Post('register')
  async register(@Request() req, @Body() userData: CreateUserDto) {
    console.log('req is', req);
    return this.authService.register(userData);
  }
}
