import { PartialType } from '@nestjs/swagger';
import { CreateProductsReviewDto } from './create-products-review.dto';

export class UpdateProductsReviewDto extends PartialType(CreateProductsReviewDto) {}
