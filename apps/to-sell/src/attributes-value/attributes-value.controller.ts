import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributesValueService } from './attributes-value.service';
import { CreateAttributesValueDto } from './dto/create-attributes-value.dto';
import { UpdateAttributesValueDto } from './dto/update-attributes-value.dto';

@Controller('attributes-value')
export class AttributesValueController {
  constructor(private readonly attributesValueService: AttributesValueService) {}

  @Post()
  create(@Body() createAttributesValueDto: CreateAttributesValueDto) {
    return this.attributesValueService.create(createAttributesValueDto);
  }

  @Get()
  findAll() {
    return this.attributesValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributesValueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttributesValueDto: UpdateAttributesValueDto) {
    return this.attributesValueService.update(+id, updateAttributesValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attributesValueService.remove(+id);
  }
}
