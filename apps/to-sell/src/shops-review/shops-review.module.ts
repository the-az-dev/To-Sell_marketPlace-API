import { Module } from '@nestjs/common';
import { ShopsReviewService } from './shops-review.service';
import { ShopsReviewController } from './shops-review.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesAttribute } from "../categories-attributes/entities/categories-attribute.entity";
import { ShopsReview } from "./entities/shops-review.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ShopsReview])],
  controllers: [ShopsReviewController],
  providers: [ShopsReviewService]
})
export class ShopsReviewModule {}
