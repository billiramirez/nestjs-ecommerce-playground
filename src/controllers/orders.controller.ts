import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    return [
      { id: 1, productsQty: 10, date: new Date().toISOString() },
      { id: 2, productsQty: 20, date: new Date().toISOString() },
    ];
  }
}
