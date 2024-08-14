import { Module } from '@nestjs/common';
import { OrdersStatusService } from './orders-status.service';
import { OrdersStatusController } from './orders-status.controller';

@Module({
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService]
})
export class OrdersStatusModule {}
