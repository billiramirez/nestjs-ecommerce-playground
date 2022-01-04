import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      { id: 1, name: 'Billi', createdAt: new Date().toISOString() },
      { id: 2, name: 'Juan', createdAt: new Date().toISOString() },
    ];
  }
}
