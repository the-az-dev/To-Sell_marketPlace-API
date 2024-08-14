import { Module } from '@nestjs/common';
import { OrdersHitoryService } from './orders-hitory.service';
import { OrdersHitoryController } from './orders-hitory.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersHitory } from "./entities/orders-hitory.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrdersHitory])],
  controllers: [OrdersHitoryController],
  providers: [OrdersHitoryService]
})
export class OrdersHitoryModule {}
