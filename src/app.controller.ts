import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo';
  }

  @Get('new-endpoint')
  newEndpoint() {
    return 'I am a New Endpoint';
  }

  @Get('products')
  getProducts(
    @Query() queryParams: { limit: number; offset: number; brand: string },
  ) {
    const { limit = 100, offset = 0, brand } = queryParams;
    return `products, with limit -> ${limit} and Offset -> ${offset}, and brand -> ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product -> ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `Product -> ${productId}, Category -> ${id}`;
  }
}
