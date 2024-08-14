import { PartialType } from '@nestjs/swagger';
import { CreateOrdersStatusDto } from './create-orders-status.dto';

export class UpdateOrdersStatusDto extends PartialType(CreateOrdersStatusDto) {}
