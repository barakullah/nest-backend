import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
//is being called from controllers

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
