import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersHistoryProductListService } from './orders-history-product-list.service';
import { CreateOrdersHistoryProductListDto } from './dto/create-orders-history-product-list.dto';
import { UpdateOrdersHistoryProductListDto } from './dto/update-orders-history-product-list.dto';

@Controller('orders-history-product-list')
export class OrdersHistoryProductListController {
  constructor(private readonly ordersHistoryProductListService: OrdersHistoryProductListService) {}

  @Post()
  create(@Body() createOrdersHistoryProductListDto: CreateOrdersHistoryProductListDto) {
    return this.ordersHistoryProductListService.create(createOrdersHistoryProductListDto);
  }

  @Get()
  findAll() {
    return this.ordersHistoryProductListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersHistoryProductListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersHistoryProductListDto: UpdateOrdersHistoryProductListDto) {
    return this.ordersHistoryProductListService.update(+id, updateOrdersHistoryProductListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersHistoryProductListService.remove(+id);
  }
}
