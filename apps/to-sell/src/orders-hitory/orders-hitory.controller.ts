import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersHitoryService } from './orders-hitory.service';
import { CreateOrdersHitoryDto } from './dto/create-orders-hitory.dto';
import { UpdateOrdersHitoryDto } from './dto/update-orders-hitory.dto';

@Controller('orders-hitory')
export class OrdersHitoryController {
  constructor(private readonly ordersHitoryService: OrdersHitoryService) {}

  @Post()
  create(@Body() createOrdersHitoryDto: CreateOrdersHitoryDto) {
    return this.ordersHitoryService.create(createOrdersHitoryDto);
  }

  @Get()
  findAll() {
    return this.ordersHitoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersHitoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersHitoryDto: UpdateOrdersHitoryDto) {
    return this.ordersHitoryService.update(+id, updateOrdersHitoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersHitoryService.remove(+id);
  }
}
