import { Module } from '@nestjs/common';
import { CartsProductListService } from './carts-product-list.service';
import { CartsProductListController } from './carts-product-list.controller';

@Module({
  controllers: [CartsProductListController],
  providers: [CartsProductListService]
})
export class CartsProductListModule {}
