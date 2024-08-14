import { PartialType } from '@nestjs/swagger';
import { CreateCartsProductListDto } from './create-carts-product-list.dto';

export class UpdateCartsProductListDto extends PartialType(CreateCartsProductListDto) {}
