import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesAttributesService } from './categories-attributes.service';
import { CreateCategoriesAttributeDto } from './dto/create-categories-attribute.dto';
import { UpdateCategoriesAttributeDto } from './dto/update-categories-attribute.dto';

@Controller('categories-attributes')
export class CategoriesAttributesController {
  constructor(private readonly categoriesAttributesService: CategoriesAttributesService) {}

  @Post()
  create(@Body() createCategoriesAttributeDto: CreateCategoriesAttributeDto) {
    return this.categoriesAttributesService.create(createCategoriesAttributeDto);
  }

  @Get()
  findAll() {
    return this.categoriesAttributesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesAttributesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriesAttributeDto: UpdateCategoriesAttributeDto) {
    return this.categoriesAttributesService.update(+id, updateCategoriesAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesAttributesService.remove(+id);
  }
}
