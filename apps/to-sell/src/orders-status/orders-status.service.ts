import { Injectable } from '@nestjs/common';
import { CreateOrdersStatusDto } from './dto/create-orders-status.dto';
import { UpdateOrdersStatusDto } from './dto/update-orders-status.dto';

@Injectable()
export class OrdersStatusService {
  create(createOrdersStatusDto: CreateOrdersStatusDto) {
    return 'This action adds a new ordersStatus';
  }

  findAll() {
    return `This action returns all ordersStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersStatus`;
  }

  update(id: number, updateOrdersStatusDto: UpdateOrdersStatusDto) {
    return `This action updates a #${id} ordersStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersStatus`;
  }
}
