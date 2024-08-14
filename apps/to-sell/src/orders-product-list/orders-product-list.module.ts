import { Module } from '@nestjs/common';
import { OrdersProductListService } from './orders-product-list.service';
import { OrdersProductListController } from './orders-product-list.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersProductList } from "./entities/orders-product-list.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrdersProductList])],
  controllers: [OrdersProductListController],
  providers: [OrdersProductListService]
})
export class OrdersProductListModule {}
