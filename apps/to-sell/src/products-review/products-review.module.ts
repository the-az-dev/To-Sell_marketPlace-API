import { Module } from '@nestjs/common';
import { ProductsReviewService } from './products-review.service';
import { ProductsReviewController } from './products-review.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesAttribute } from "../categories-attributes/entities/categories-attribute.entity";
import { ProductsReview } from "./entities/products-review.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductsReview])],
  controllers: [ProductsReviewController],
  providers: [ProductsReviewService]
})
export class ProductsReviewModule {}
