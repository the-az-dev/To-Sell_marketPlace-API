import { Module } from '@nestjs/common';
import { ShopsCategoryService } from './shops-category.service';
import { ShopsCategoryController } from './shops-category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopsCategory } from "./entities/shops-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ShopsCategory])],
  controllers: [ShopsCategoryController],
  providers: [ShopsCategoryService]
})
export class ShopsCategoryModule {}
