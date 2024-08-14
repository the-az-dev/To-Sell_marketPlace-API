import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartsProductListService } from './carts-product-list.service';
import { CreateCartsProductListDto } from './dto/create-carts-product-list.dto';
import { UpdateCartsProductListDto } from './dto/update-carts-product-list.dto';

@Controller('carts-product-list')
export class CartsProductListController {
  constructor(private readonly cartsProductListService: CartsProductListService) {}

  @Post()
  create(@Body() createCartsProductListDto: CreateCartsProductListDto) {
    return this.cartsProductListService.create(createCartsProductListDto);
  }

  @Get()
  findAll() {
    return this.cartsProductListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartsProductListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartsProductListDto: UpdateCartsProductListDto) {
    return this.cartsProductListService.update(+id, updateCartsProductListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartsProductListService.remove(+id);
  }
}
