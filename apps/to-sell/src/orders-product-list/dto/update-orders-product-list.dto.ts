import { PartialType } from '@nestjs/swagger';
import { CreateOrdersProductListDto } from './create-orders-product-list.dto';

export class UpdateOrdersProductListDto extends PartialType(CreateOrdersProductListDto) {}
