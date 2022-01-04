import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAllBrands() {
    return ['polo', 'tommy'];
  }
}
