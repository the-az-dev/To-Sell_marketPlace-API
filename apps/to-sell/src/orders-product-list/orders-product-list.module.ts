import { Module } from '@nestjs/common';
import { OrdersProductListService } from './orders-product-list.service';
import { OrdersProductListController } from './orders-product-list.controller';

@Module({
  controllers: [OrdersProductListController],
  providers: [OrdersProductListService]
})
export class OrdersProductListModule {}
