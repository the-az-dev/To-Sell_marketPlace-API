import { PartialType } from '@nestjs/swagger';
import { CreateOrdersHistoryProductListDto } from './create-orders-history-product-list.dto';

export class UpdateOrdersHistoryProductListDto extends PartialType(CreateOrdersHistoryProductListDto) {}
