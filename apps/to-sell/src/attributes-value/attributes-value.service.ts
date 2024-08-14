import { Injectable } from '@nestjs/common';
import { CreateAttributesValueDto } from './dto/create-attributes-value.dto';
import { UpdateAttributesValueDto } from './dto/update-attributes-value.dto';

@Injectable()
export class AttributesValueService {
  create(createAttributesValueDto: CreateAttributesValueDto) {
    return 'This action adds a new attributesValue';
  }

  findAll() {
    return `This action returns all attributesValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attributesValue`;
  }

  update(id: number, updateAttributesValueDto: UpdateAttributesValueDto) {
    return `This action updates a #${id} attributesValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} attributesValue`;
  }
}
