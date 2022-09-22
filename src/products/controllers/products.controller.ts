import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { Products } from '../entity/products.entity';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductsService) {}
  @Get()
  getAll() {
    return this.service.getProducts();
  }
  @Get(':id')
  get(@Param() params) {
    return this.service.getProduct(params.id);
  }
  @Post()
  create(@Body() product: Products) {
    return this.service.createProduct(product);
  }
  @Put()
  update(@Body() product: Products) {
    return this.service.updateProduct(product);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.service.deleteProduct(params.id);
  }
}
