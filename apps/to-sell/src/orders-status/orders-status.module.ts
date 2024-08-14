import { Module } from '@nestjs/common';
import { OrdersStatusService } from './orders-status.service';
import { OrdersStatusController } from './orders-status.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersStatus } from "./entities/orders-status.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OrdersStatus])],
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService]
})
export class OrdersStatusModule {}
