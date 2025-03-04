"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const ultramsg = require('ultramsg-whatsapp-api');
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOne({ where: { email: email } });
        if (user) {
            const isValidPassword = await bcrypt.compare(pass, user.password);
            console.log('password is', isValidPassword);
            if (user && isValidPassword) {
                const { password, ...result } = user;
                return result;
            }
        }
        return null;
    }
    async login(user) {
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
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async verifyOtp(userOtp) {
        console.log('userOtp is', userOtp);
        let randomNum = Math.random() * 9000;
        randomNum = Math.floor(1000 + randomNum);
        const to = user.phone;
        const body = randomNum;
        const response = await api.sendChatMessage(to, body);
        return response;
    }
    async sendOtp(user) {
        console.log('user is', user);
        const instance_id = 'instance90678';
        const ultramsg_token = 'g8ju55ve99tofus6';
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
    async register(data) {
        data.password = await bcrypt.hash(data.password, 10);
        let response = await this.usersService.create(data);
        if (response) {
            const { password, ...result } = response;
            return result;
        }
    }
    decodeToken(token) {
        return this.jwtService.decode(token);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map