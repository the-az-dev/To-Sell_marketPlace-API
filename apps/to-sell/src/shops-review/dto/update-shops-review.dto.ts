import { PartialType } from '@nestjs/swagger';
import { CreateShopsReviewDto } from './create-shops-review.dto';

export class UpdateShopsReviewDto extends PartialType(CreateShopsReviewDto) {}
