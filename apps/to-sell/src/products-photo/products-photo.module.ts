import { Module } from '@nestjs/common';
import { ProductsPhotoService } from './products-photo.service';
import { ProductsPhotoController } from './products-photo.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsPhoto } from "./entities/products-photo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProductsPhoto])],
  controllers: [ProductsPhotoController],
  providers: [ProductsPhotoService]
})
export class ProductsPhotoModule {}
