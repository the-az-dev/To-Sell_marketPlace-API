import { Module } from '@nestjs/common';
import { CategoriesAttributesService } from './categories-attributes.service';
import { CategoriesAttributesController } from './categories-attributes.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesAttribute } from "./entities/categories-attribute.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CategoriesAttribute])],
  controllers: [CategoriesAttributesController],
  providers: [CategoriesAttributesService]
})
export class CategoriesAttributesModule {}
