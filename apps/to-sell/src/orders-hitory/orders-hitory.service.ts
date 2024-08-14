import { Injectable } from '@nestjs/common';
import { CreateOrdersHitoryDto } from './dto/create-orders-hitory.dto';
import { UpdateOrdersHitoryDto } from './dto/update-orders-hitory.dto';

@Injectable()
export class OrdersHitoryService {
  create(createOrdersHitoryDto: CreateOrdersHitoryDto) {
    return 'This action adds a new ordersHitory';
  }

  findAll() {
    return `This action returns all ordersHitory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersHitory`;
  }

  update(id: number, updateOrdersHitoryDto: UpdateOrdersHitoryDto) {
    return `This action updates a #${id} ordersHitory`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersHitory`;
  }
}
