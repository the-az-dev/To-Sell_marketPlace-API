import { Injectable } from '@nestjs/common';
import { CreateOrdersHistoryProductListDto } from './dto/create-orders-history-product-list.dto';
import { UpdateOrdersHistoryProductListDto } from './dto/update-orders-history-product-list.dto';

@Injectable()
export class OrdersHistoryProductListService {
  create(createOrdersHistoryProductListDto: CreateOrdersHistoryProductListDto) {
    return 'This action adds a new ordersHistoryProductList';
  }

  findAll() {
    return `This action returns all ordersHistoryProductList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersHistoryProductList`;
  }

  update(id: number, updateOrdersHistoryProductListDto: UpdateOrdersHistoryProductListDto) {
    return `This action updates a #${id} ordersHistoryProductList`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersHistoryProductList`;
  }
}
