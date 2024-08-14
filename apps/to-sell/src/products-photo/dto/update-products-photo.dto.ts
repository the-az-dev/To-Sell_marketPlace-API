import { PartialType } from '@nestjs/swagger';
import { CreateProductsPhotoDto } from './create-products-photo.dto';

export class UpdateProductsPhotoDto extends PartialType(CreateProductsPhotoDto) {}
