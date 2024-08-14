import { Module } from '@nestjs/common';
import { OrdersHistoryProductListService } from './orders-history-product-list.service';
import { OrdersHistoryProductListController } from './orders-history-product-list.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersHistoryProductList } from "./entities/orders-history-product-list.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrdersHistoryProductList])],
  controllers: [OrdersHistoryProductListController],
  providers: [OrdersHistoryProductListService]
})
export class OrdersHistoryProductListModule {}
