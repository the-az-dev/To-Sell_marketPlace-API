import { Injectable } from '@nestjs/common';
import { CreateShopsReviewDto } from './dto/create-shops-review.dto';
import { UpdateShopsReviewDto } from './dto/update-shops-review.dto';

@Injectable()
export class ShopsReviewService {
  create(createShopsReviewDto: CreateShopsReviewDto) {
    return 'This action adds a new shopsReview';
  }

  findAll() {
    return `This action returns all shopsReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopsReview`;
  }

  update(id: number, updateShopsReviewDto: UpdateShopsReviewDto) {
    return `This action updates a #${id} shopsReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopsReview`;
  }
}
