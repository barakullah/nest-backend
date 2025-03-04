import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(data: number | any): Promise<User | undefined>;
    remove(id: number): Promise<void>;
    create(data: any): Promise<any>;
    update(data: any): Promise<import("typeorm").UpdateResult>;
}
