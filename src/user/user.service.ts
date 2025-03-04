import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(data: number | any): Promise<User | undefined> {
    console.log('data is', data);
    return await this.usersRepository.findOne(data);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(data) {
    try {
      const res = await this.usersRepository.save(data);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async update(data) {
    try {
      const res = await this.findOne({ where: { phone: data.phone } });
      if (res) {
        console.log('res', res);

        const user = await this.usersRepository.update(res.id, {
          otp: data.otp,
        });
        console.log('hello user', user);

        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
