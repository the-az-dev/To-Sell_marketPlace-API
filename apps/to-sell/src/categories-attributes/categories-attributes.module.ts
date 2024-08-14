import { Module } from '@nestjs/common';
import { CategoriesAttributesService } from './categories-attributes.service';
import { CategoriesAttributesController } from './categories-attributes.controller';

@Module({
  controllers: [CategoriesAttributesController],
  providers: [CategoriesAttributesService]
})
export class CategoriesAttributesModule {}
