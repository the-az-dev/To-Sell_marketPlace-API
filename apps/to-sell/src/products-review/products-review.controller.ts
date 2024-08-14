import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsReviewService } from './products-review.service';
import { CreateProductsReviewDto } from './dto/create-products-review.dto';
import { UpdateProductsReviewDto } from './dto/update-products-review.dto';

@Controller('products-review')
export class ProductsReviewController {
  constructor(private readonly productsReviewService: ProductsReviewService) {}

  @Post()
  create(@Body() createProductsReviewDto: CreateProductsReviewDto) {
    return this.productsReviewService.create(createProductsReviewDto);
  }

  @Get()
  findAll() {
    return this.productsReviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsReviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsReviewDto: UpdateProductsReviewDto) {
    return this.productsReviewService.update(+id, updateProductsReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsReviewService.remove(+id);
  }
}
