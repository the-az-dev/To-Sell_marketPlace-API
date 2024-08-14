import { Injectable } from '@nestjs/common';
import { CreateOrdersProductListDto } from './dto/create-orders-product-list.dto';
import { UpdateOrdersProductListDto } from './dto/update-orders-product-list.dto';

@Injectable()
export class OrdersProductListService {
  create(createOrdersProductListDto: CreateOrdersProductListDto) {
    return 'This action adds a new ordersProductList';
  }

  findAll() {
    return `This action returns all ordersProductList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersProductList`;
  }

  update(id: number, updateOrdersProductListDto: UpdateOrdersProductListDto) {
    return `This action updates a #${id} ordersProductList`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersProductList`;
  }
}
