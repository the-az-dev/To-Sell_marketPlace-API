import { Module } from '@nestjs/common';
import { ProductsCategoryService } from './products-category.service';
import { ProductsCategoryController } from './products-category.controller';

@Module({
  controllers: [ProductsCategoryController],
  providers: [ProductsCategoryService]
})
export class ProductsCategoryModule {}
