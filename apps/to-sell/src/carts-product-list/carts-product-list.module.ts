import { Module } from '@nestjs/common';
import { CartsProductListService } from './carts-product-list.service';
import { CartsProductListController } from './carts-product-list.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartsProductList } from "./entities/carts-product-list.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CartsProductList])],
  controllers: [CartsProductListController],
  providers: [CartsProductListService]
})
export class CartsProductListModule {}
