import { UsersService } from '../../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    verifyOtp(userOtp: any): Promise<any>;
    sendOtp(user: any): Promise<any>;
    register(data: CreateUserDto): Promise<any>;
    decodeToken(token: any): any;
}
