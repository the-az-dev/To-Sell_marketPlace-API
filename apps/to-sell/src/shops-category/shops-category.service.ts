import { Injectable } from '@nestjs/common';
import { CreateShopsCategoryDto } from './dto/create-shops-category.dto';
import { UpdateShopsCategoryDto } from './dto/update-shops-category.dto';

@Injectable()
export class ShopsCategoryService {
  create(createShopsCategoryDto: CreateShopsCategoryDto) {
    return 'This action adds a new shopsCategory';
  }

  findAll() {
    return `This action returns all shopsCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopsCategory`;
  }

  update(id: number, updateShopsCategoryDto: UpdateShopsCategoryDto) {
    return `This action updates a #${id} shopsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopsCategory`;
  }
}
