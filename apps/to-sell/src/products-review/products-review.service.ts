import { Injectable } from '@nestjs/common';
import { CreateProductsReviewDto } from './dto/create-products-review.dto';
import { UpdateProductsReviewDto } from './dto/update-products-review.dto';

@Injectable()
export class ProductsReviewService {
  create(createProductsReviewDto: CreateProductsReviewDto) {
    return 'This action adds a new productsReview';
  }

  findAll() {
    return `This action returns all productsReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsReview`;
  }

  update(id: number, updateProductsReviewDto: UpdateProductsReviewDto) {
    return `This action updates a #${id} productsReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsReview`;
  }
}
