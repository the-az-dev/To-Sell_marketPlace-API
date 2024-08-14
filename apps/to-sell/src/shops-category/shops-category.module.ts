import { Module } from '@nestjs/common';
import { ShopsCategoryService } from './shops-category.service';
import { ShopsCategoryController } from './shops-category.controller';

@Module({
  controllers: [ShopsCategoryController],
  providers: [ShopsCategoryService]
})
export class ShopsCategoryModule {}
