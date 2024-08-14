import { PartialType } from '@nestjs/swagger';
import { CreateShopsCategoryDto } from './create-shops-category.dto';

export class UpdateShopsCategoryDto extends PartialType(CreateShopsCategoryDto) {}
