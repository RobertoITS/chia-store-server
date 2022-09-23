import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from '../../entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}
  async createProduct(product: Products) {
    this.productsRepository.insert(product);
  }
  async getProducts(): Promise<Products[]> {
    return await this.productsRepository.find();
  }
  async getProduct(__id: number): Promise<Products[]> {
    return await this.productsRepository.find({
      select: ['id_producto', 'nombre', 'cantidad', 'costo', 'precio'],
      where: [{ id_producto: __id }],
    });
  }
  async updateProduct(product: Products) {
    this.productsRepository.save(product);
  }
  async deleteProduct(product: Products) {
    this.productsRepository.delete(product);
  }
}
