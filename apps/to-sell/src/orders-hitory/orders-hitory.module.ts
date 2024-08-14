import { Module } from '@nestjs/common';
import { OrdersHitoryService } from './orders-hitory.service';
import { OrdersHitoryController } from './orders-hitory.controller';

@Module({
  controllers: [OrdersHitoryController],
  providers: [OrdersHitoryService]
})
export class OrdersHitoryModule {}
