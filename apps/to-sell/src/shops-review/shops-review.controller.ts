import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShopsReviewService } from './shops-review.service';
import { CreateShopsReviewDto } from './dto/create-shops-review.dto';
import { UpdateShopsReviewDto } from './dto/update-shops-review.dto';

@Controller('shops-review')
export class ShopsReviewController {
  constructor(private readonly shopsReviewService: ShopsReviewService) {}

  @Post()
  create(@Body() createShopsReviewDto: CreateShopsReviewDto) {
    return this.shopsReviewService.create(createShopsReviewDto);
  }

  @Get()
  findAll() {
    return this.shopsReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopsReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopsReviewDto: UpdateShopsReviewDto) {
    return this.shopsReviewService.update(+id, updateShopsReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopsReviewService.remove(+id);
  }
}
