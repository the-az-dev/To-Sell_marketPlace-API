import { Injectable } from '@nestjs/common';
import { CreateCartsProductListDto } from './dto/create-carts-product-list.dto';
import { UpdateCartsProductListDto } from './dto/update-carts-product-list.dto';

@Injectable()
export class CartsProductListService {
  create(createCartsProductListDto: CreateCartsProductListDto) {
    return 'This action adds a new cartsProductList';
  }

  findAll() {
    return `This action returns all cartsProductList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartsProductList`;
  }

  update(id: number, updateCartsProductListDto: UpdateCartsProductListDto) {
    return `This action updates a #${id} cartsProductList`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartsProductList`;
  }
}
