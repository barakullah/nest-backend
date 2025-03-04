import { Injectable } from '@nestjs/common';
import { UsersService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
// import { ultramsg } from 'ultramsg-whatsapp-api';
const ultramsg = require('ultramsg-whatsapp-api');
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ where: { email: email } });
    if (user) {
      const isValidPassword: boolean = await bcrypt.compare(
        pass,
        user.password,
      );
      console.log('password is', isValidPassword);
      if (user && isValidPassword) {
        const { password, ...result } = user;
        return result;
      }
    }

    return null;
  }
  async login(user: any) {
    console.log('user is', user.user);
    const payload = {
      user: {
        id: user.user.id,
        email: user.user.email,
        name: user.user.name,
        created_at: user.user.created_at,
        updated_at: user.user.updated_at,
      },
    };
    // console.log({payload});
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verifyOtp(userOtp: any) {
    console.log('userOtp is', userOtp);

    let randomNum = Math.random() * 9000;
    randomNum = Math.floor(1000 + randomNum);
    const to = user.phone;
    const body = randomNum;
    const response = await api.sendChatMessage(to, body);
    return response;
  }
  async sendOtp(user: any) {
    console.log('user is', user);
    const instance_id = 'instance90678'; // Ultramsg.com instance id
    const ultramsg_token = 'g8ju55ve99tofus6'; // Ultramsg.com token
    const api = new ultramsg(instance_id, ultramsg_token);

    let randomNum = Math.random() * 9000;
    randomNum = Math.floor(1000 + randomNum);
    const to = user.phone;
    const body = randomNum;
    const response = await api.sendChatMessage(to, body);
    const objToSave = { phone: user.phone, otp: randomNum };
    console.log('new res', response);

    if (response.sent === 'true') {
      let response = await this.usersService.update(objToSave);
    }
    return response;
  }

  async register(data: CreateUserDto) {
    data.password = await bcrypt.hash(data.password, 10);
    let response = await this.usersService.create(data);
    if (response) {
      const { password, ...result } = response;
      return result;
    }
  }

  decodeToken(token): any {
    return this.jwtService.decode(token);
  }
}
