import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomers() {
    return ['billi', 'alex'];
  }
}
