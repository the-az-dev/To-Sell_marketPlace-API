import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersProductListService } from './orders-product-list.service';
import { CreateOrdersProductListDto } from './dto/create-orders-product-list.dto';
import { UpdateOrdersProductListDto } from './dto/update-orders-product-list.dto';

@Controller('orders-product-list')
export class OrdersProductListController {
  constructor(private readonly ordersProductListService: OrdersProductListService) {}

  @Post()
  create(@Body() createOrdersProductListDto: CreateOrdersProductListDto) {
    return this.ordersProductListService.create(createOrdersProductListDto);
  }

  @Get()
  findAll() {
    return this.ordersProductListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersProductListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersProductListDto: UpdateOrdersProductListDto) {
    return this.ordersProductListService.update(+id, updateOrdersProductListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersProductListService.remove(+id);
  }
}
