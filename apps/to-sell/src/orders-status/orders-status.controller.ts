import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersStatusService } from './orders-status.service';
import { CreateOrdersStatusDto } from './dto/create-orders-status.dto';
import { UpdateOrdersStatusDto } from './dto/update-orders-status.dto';

@Controller('orders-status')
export class OrdersStatusController {
  constructor(private readonly ordersStatusService: OrdersStatusService) {}

  @Post()
  create(@Body() createOrdersStatusDto: CreateOrdersStatusDto) {
    return this.ordersStatusService.create(createOrdersStatusDto);
  }

  @Get()
  findAll() {
    return this.ordersStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersStatusDto: UpdateOrdersStatusDto) {
    return this.ordersStatusService.update(+id, updateOrdersStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersStatusService.remove(+id);
  }
}
