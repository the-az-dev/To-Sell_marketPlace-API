import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopsCategoryService } from './shops-category.service';
import { CreateShopsCategoryDto } from './dto/create-shops-category.dto';
import { UpdateShopsCategoryDto } from './dto/update-shops-category.dto';

@Controller('shops-category')
export class ShopsCategoryController {
  constructor(private readonly shopsCategoryService: ShopsCategoryService) {}

  @Post()
  create(@Body() createShopsCategoryDto: CreateShopsCategoryDto) {
    return this.shopsCategoryService.create(createShopsCategoryDto);
  }

  @Get()
  findAll() {
    return this.shopsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopsCategoryDto: UpdateShopsCategoryDto) {
    return this.shopsCategoryService.update(+id, updateShopsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopsCategoryService.remove(+id);
  }
}
