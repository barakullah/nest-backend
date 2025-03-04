import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateUserWithOtpDto } from 'src/user/dto/create-user-with-otp.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    sendOtp(userData: CreateUserWithOtpDto): Promise<any>;
    verifyOtp(userOtp: CreateUserWithOtpDto): Promise<any>;
    register(req: any, userData: CreateUserDto): Promise<any>;
}
