import { PartialType } from '@nestjs/swagger';
import { CreateOrdersHitoryDto } from './create-orders-hitory.dto';

export class UpdateOrdersHitoryDto extends PartialType(CreateOrdersHitoryDto) {}
