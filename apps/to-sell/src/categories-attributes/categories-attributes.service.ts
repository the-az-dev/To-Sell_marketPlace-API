import { Injectable } from '@nestjs/common';
import { CreateCategoriesAttributeDto } from './dto/create-categories-attribute.dto';
import { UpdateCategoriesAttributeDto } from './dto/update-categories-attribute.dto';

@Injectable()
export class CategoriesAttributesService {
  create(createCategoriesAttributeDto: CreateCategoriesAttributeDto) {
    return 'This action adds a new categoriesAttribute';
  }

  findAll() {
    return `This action returns all categoriesAttributes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriesAttribute`;
  }

  update(id: number, updateCategoriesAttributeDto: UpdateCategoriesAttributeDto) {
    return `This action updates a #${id} categoriesAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesAttribute`;
  }
}
