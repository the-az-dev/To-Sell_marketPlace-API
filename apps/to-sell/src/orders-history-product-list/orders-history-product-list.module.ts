import { Module } from '@nestjs/common';
import { OrdersHistoryProductListService } from './orders-history-product-list.service';
import { OrdersHistoryProductListController } from './orders-history-product-list.controller';

@Module({
  controllers: [OrdersHistoryProductListController],
  providers: [OrdersHistoryProductListService]
})
export class OrdersHistoryProductListModule {}
