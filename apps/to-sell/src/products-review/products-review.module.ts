import { Module } from '@nestjs/common';
import { ProductsReviewService } from './products-review.service';
import { ProductsReviewController } from './products-review.controller';

@Module({
  controllers: [ProductsReviewController],
  providers: [ProductsReviewService]
})
export class ProductsReviewModule {}
