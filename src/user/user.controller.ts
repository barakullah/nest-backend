// src/users/users.controller.ts
import { Controller, Get, UseGuards, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from '../role/roles.decorator';
import { UserRole } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
