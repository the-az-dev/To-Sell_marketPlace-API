import { Module } from '@nestjs/common';
import { ShopsReviewService } from './shops-review.service';
import { ShopsReviewController } from './shops-review.controller';

@Module({
  controllers: [ShopsReviewController],
  providers: [ShopsReviewService]
})
export class ShopsReviewModule {}
